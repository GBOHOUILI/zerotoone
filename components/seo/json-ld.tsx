/**
 * Injects a Schema.org JSON-LD block. Kept as a tiny server component so
 * every page can drop in structured data without repeating the
 * `<script type="application/ld+json">` boilerplate.
 *
 * IMPORTANT: only describe what's actually visible on the page it sits on
 * — mismatched structured data (markup claiming things the page doesn't
 * say) is treated as spam by Google's structured data guidelines.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes user-controlled content; every field fed in
      // here comes from our own `lib/content.ts`, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
