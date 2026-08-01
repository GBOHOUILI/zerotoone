import { NextRequest, NextResponse } from "next/server";

/**
 * Nonce-based Content-Security-Policy.
 *
 * Why this exists instead of a static CSP in next.config.mjs:
 * the App Router streams RSC payloads to the client via inline
 * `<script>` tags (`self.__next_f.push(...)`). A CSP with a bare
 * `script-src 'self'` blocks those inline scripts outright, which
 * silently breaks hydration — every client component (Framer
 * Motion reveals included) never mounts, so anything animated in
 * from `opacity: 0` stays invisible forever. This is what was
 * happening on every page.
 *
 * The fix: generate a per-request nonce, allow only scripts tagged
 * with that nonce. Next.js automatically reads the nonce out of the
 * `Content-Security-Policy` response header and stamps it onto the
 * inline scripts it generates, so no other code changes are needed
 * for hydration to work again. `strict-dynamic` lets those nonced
 * scripts load further scripts they trust, while still falling back
 * to `'self'` for older browsers that don't understand it.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    // 'unsafe-eval' is only needed in dev (webpack's HMR/source-map
    // eval); production builds don't use eval and stay strict.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  // Run on everything except static assets / images / Next internals,
  // where a CSP header serves no purpose.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|woff2?)$).*)",
  ],
};
