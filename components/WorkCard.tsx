import Image from "next/image";
import Link from "next/link";
import WorkPlaceholder from "@/components/WorkPlaceholder";

type WorkItem = {
  slug: string;
  title: string;
  category: string;
  filterCategory: string;
  description: string;
  image?: string | null;
};

export default function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Link
      href={`/projects/${item.slug}`}
      className="
        group flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-ink/10 bg-white
        transition-shadow duration-500
        hover:shadow-xl
      "
    >
      <div className="aspect-[16/10] w-full shrink-0 overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            width={800}
            height={500}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <WorkPlaceholder seed={index * 7 + 3} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow text-forest">{item.category}</p>

        <h3 className="mt-2 line-clamp-2 min-h-[3.5rem] text-xl font-medium text-ink">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-graphite">
          {item.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest transition-transform duration-300 group-hover:translate-x-1">
          Voir le projet →
        </span>
      </div>
    </Link>
  );
}