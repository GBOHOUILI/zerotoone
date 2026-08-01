import Link from "next/link";
import { contactInfo, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-white/10 
        bg-ink 
        px-6 pb-10 pt-20 
        text-pearl 
        md:px-10
      "
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center
        "
        style={{
          backgroundImage: "url('/images/footer.jpg')",
        }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">
            Zero To One
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-pearl/55">
            Venture studio technologique. Nous concevons, développons et
            faisons grandir des produits numériques qui deviennent des
            entreprises.
          </p>
          <p className="mt-6 eyebrow text-green">
            De l&apos;idée à l&apos;impact
          </p>
        </div>

        <div>
          <p className="eyebrow text-pearl/40">Navigation</p>
          <ul className="mt-5 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-pearl/70 transition-colors hover:text-pearl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-pearl/40">Contact</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-pearl/70">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-pearl"
              >
                {contactInfo.email}
              </a>
            </li>

            {contactInfo.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-pearl"
                >
                  {phone}
                </a>
              </li>
            ))}

            <li>{contactInfo.locality}, {contactInfo.country}</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-pearl/35 md:flex-row">
        <p>
          © {new Date().getFullYear()} Zero To One. Tous droits réservés.
        </p>
        <p>Building What Matters</p>
      </div>
    </footer>
  );
}