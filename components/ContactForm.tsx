"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const next: Errors = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) {
      next.name = "Merci d'indiquer votre nom.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Cette adresse email ne semble pas valide.";
    }

    if (message.length < 10) {
      next.message =
        "Dites-nous en un peu plus (10 caractères minimum).";
    }

    return next;
  }

  function buildMailtoUrl(data: FormData): string {
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Nouveau projet — ${name}`;

    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      company ? `Entreprise : ${company}` : null,
      "",
      "Message :",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const foundErrors = validate(data);

    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      window.location.href = buildMailtoUrl(data);

      setTimeout(() => {
        setStatus("success");
      }, 400);
    } catch {
      setStatus("error");
    }
  }

  const fieldBase =
    "w-full border-b bg-transparent py-3 text-lg text-ink placeholder:text-graphite/50 focus:outline-none";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-forest/20 bg-forest/5 p-10"
      >
        <p className="text-2xl font-medium text-forest">
          Votre client email s&apos;est ouvert.
        </p>

        <p className="mt-3 leading-relaxed text-graphite">
          Il ne vous reste plus qu&apos;à cliquer sur « Envoyer » dans votre
          messagerie pour nous transmettre votre message.
        </p>

        <p className="mt-4 leading-relaxed text-graphite">
          Si rien ne s&apos;est ouvert, vous pouvez nous écrire directement à{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-medium text-forest underline underline-offset-4 hover:no-underline"
          >
            {contactInfo.email}
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => {
            setErrors({});
            setStatus("idle");
          }}
          className="mt-6 text-sm font-medium text-graphite underline transition-colors hover:text-forest"
        >
          Revenir au formulaire
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-graphite"
        >
          Nom complet
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Votre nom"
          className={`${fieldBase} ${
            errors.name
              ? "border-red-400"
              : "border-ink/15 focus:border-forest"
          }`}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-graphite"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          className={`${fieldBase} ${
            errors.email
              ? "border-red-400"
              : "border-ink/15 focus:border-forest"
          }`}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="text-sm font-medium text-graphite"
        >
          Entreprise / organisation{" "}
          <span className="text-graphite/50">(optionnel)</span>
        </label>

        <input
          id="company"
          name="company"
          type="text"
          placeholder="Nom de votre structure"
          className={`${fieldBase} border-ink/15 focus:border-forest`}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-graphite"
        >
          Votre projet
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Parlez-nous de votre idée ou de votre besoin…"
          className={`${fieldBase} resize-none ${
            errors.message
              ? "border-red-400"
              : "border-ink/15 focus:border-forest"
          }`}
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative mt-2 inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-forest px-8 py-4 text-sm font-medium text-pearl transition-colors hover:bg-green disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Ouverture…" : "Envoyer le message"}

        {status !== "submitting" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Une erreur est survenue. Merci de réessayer dans un instant.
        </p>
      )}
    </form>
  );
}