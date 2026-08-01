import Image from "next/image";

export type Partner = {
  name: string;
  logo: string;
  url?: string;
};

export default function Partners({ items }: { items: Partner[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
  {items.map((partner, i) => (
    <a
      key={`${partner.name}-${i}`}
      href={partner.url ?? "#"}
      target={partner.url ? "_blank" : undefined}
      rel={partner.url ? "noopener noreferrer" : undefined}
      className="
        group
        relative
        h-32
        overflow-hidden
        rounded-2xl
        bg-pearl/5
      "
    >
      <Image
        src={partner.logo}
        alt={`Logo du partenaire ${partner.name}`}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </a>
  ))}

  {/* Carte CTA */}
  <div
    className="
      flex h-32 flex-col items-center justify-center
      rounded-2xl
      border border-primary/30
      bg-primary/10
      text-center
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-primary
      hover:bg-primary/15
    "
  >
    <span className="text-lg font-semibold text-pearl">
      Votre logo ici
    </span>

    <p className="mt-2 px-4 text-sm text-pearl/70">
      Construisons ensemble des projets qui ont de l&apos;impact.
    </p>
  </div>
</div>
  );
}