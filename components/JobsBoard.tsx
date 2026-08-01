"use client";

import { useMemo, useState } from "react";
import { GlyphOrbit } from "@/components/Glyphs";
import {
  careersEmail,
  departments,
  jobMailto,
  jobs,
  type Job,
} from "@/lib/careers-content";

export default function JobsBoard() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return jobs;
    return jobs.filter((job) => job.department === active);
  }, [active]);

  const activeDept = departments.find((d) => d.id === active);

  return (
    <div>
      {/* Filtres — toujours visibles, même sans poste ouvert, pour que
          les visiteurs voient les départements dans lesquels on recrute */}
      <div className="flex flex-wrap gap-2.5">
        <FilterPill
          label="Tous"
          active={active === "all"}
          onClick={() => setActive("all")}
        />
        {departments.map((dept) => (
          <FilterPill
            key={dept.id}
            label={dept.label}
            active={active === dept.id}
            onClick={() => setActive(dept.id)}
          />
        ))}
      </div>

      {/* Liste des postes */}
      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:mt-10 sm:rounded-3xl">
        {filtered.length === 0 ? (
          <EmptyState
            title={
              active === "all"
                ? "Aucun poste ouvert pour le moment."
                : `Aucun poste ouvert en ce moment en ${activeDept?.label}.`
            }
            description="Nous recrutons par vagues, en fonction des besoins de nos filiales. Revenez bientôt, ou laissez-nous une candidature spontanée : nous vous recontacterons dès qu'un poste correspondant à votre profil s'ouvrira."
            showReset={active !== "all"}
            onReset={() => setActive("all")}
            mailSubject={
              active === "all"
                ? "Candidature spontanée"
                : `Candidature spontanée - ${activeDept?.label}`
            }
          />
        ) : (
          filtered.map((job) => <JobRow key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}

function EmptyState({
  title,
  description,
  showReset,
  onReset,
  mailSubject,
}: {
  title: string;
  description: string;
  showReset: boolean;
  onReset: () => void;
  mailSubject: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 bg-paper px-6 py-14 text-center sm:py-16">
      <GlyphOrbit className="h-7 w-7 text-forest" />
      <div>
        <p className="font-medium text-ink">{title}</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-graphite">
          {description}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {showReset && (
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-ink/15 px-4 py-2 text-xs font-medium text-graphite transition hover:bg-ink/5 sm:text-sm"
          >
            Voir tous les départements
          </button>
        )}
        <a
          href={`mailto:${careersEmail}?subject=${encodeURIComponent(mailSubject)}`}
          className="rounded-full bg-forest px-4 py-2 text-xs font-medium text-pearl transition hover:opacity-90 sm:text-sm"
        >
          Candidature spontanée
        </a>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${
        active
          ? "border-forest bg-forest text-pearl"
          : "border-ink/15 text-graphite hover:bg-ink/5"
      }`}
    >
      {label}
    </button>
  );
}

function JobRow({ job }: { job: Job }) {
  const deptLabel =
    departments.find((d) => d.id === job.department)?.label ?? job.department;

  return (
    <div className="grid gap-3 bg-paper p-5 transition hover:bg-ink/[0.03] sm:grid-cols-[1.4fr_auto_auto] sm:items-center sm:gap-6 sm:p-7">
      <div>
        <p className="font-medium text-ink">{job.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-graphite">
          {job.location} · {job.type}
          {job.filiale && (
            <>
              {" "}
              ·{" "}
              <span className="text-forest">{job.filiale}</span>
            </>
          )}
        </p>
        {job.summary && (
          <p className="mt-1 text-sm text-graphite/70">{job.summary}</p>
        )}
      </div>

      <span className="w-fit whitespace-nowrap rounded-full border border-ink/15 px-3 py-1.5 text-xs uppercase tracking-wide text-graphite">
        {deptLabel}
      </span>

      <a
        href={jobMailto(job)}
        className="w-fit text-sm font-medium text-forest transition hover:opacity-70"
      >
        Postuler →
      </a>
    </div>
  );
}