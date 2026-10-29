import { CalendarCheck } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "./icons";

type Variant = "solid" | "outline" | "light";

const base =
  "inline-flex max-w-full shrink-0 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-center text-[0.75rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 sm:whitespace-nowrap";

const styles: Record<Variant, string> = {
  solid: "bg-ink text-cream hover:bg-gold",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-cream",
  light: "bg-cream text-ink hover:bg-gold hover:text-cream",
};

type Props = {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Tratamiento (para el texto accesible). */
  treatment?: string;
};

// Reserva principal: Booksy, que es donde gestionan la agenda.
export default function BookButton({ children = "Reservar en Booksy", variant = "solid", className = "", treatment }: Props) {
  return (
    <a
      href={site.booksy}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Reservar ${treatment ? treatment + " " : ""}en Booksy (se abre en una pestaña nueva)`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <CalendarCheck className="size-4" strokeWidth={1.5} aria-hidden />
      <span>{children}</span>
    </a>
  );
}

// Secundario: WhatsApp con el mensaje ya escrito.
export function WhatsAppButton({
  children = "WhatsApp",
  variant = "outline",
  className = "",
  topic,
}: Omit<Props, "treatment"> & { topic?: string }) {
  return (
    <a
      href={whatsappUrl(topic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Preguntar por WhatsApp${topic ? " sobre " + topic : ""} (se abre en una pestaña nueva)`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-4" />
      <span>{children}</span>
    </a>
  );
}
