import type { ServiceGroup } from "@/data/treatments";

// Lista de servicios con precio y duración.
export default function ServiceList({ groups }: { groups: ServiceGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((g, i) => (
        <div key={g.title ?? i}>
          {g.title && <h3 className="eyebrow mb-2 text-gold">{g.title}</h3>}
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {g.services.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between gap-4 py-3.5">
                <div className="min-w-0">
                  <p className="text-[0.9375rem] text-ink">{s.name}</p>
                  {(s.note || s.duration) && (
                    <p className="mt-0.5 text-xs leading-relaxed text-taupe">
                      {s.duration}
                      {s.note && s.duration && " · "}
                      {s.note}
                    </p>
                  )}
                </div>
                <p className="shrink-0 font-display text-2xl leading-none text-ink">{s.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
