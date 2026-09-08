import { comparisonRows } from "@/content/services";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-hairline bg-surface shadow-xs">
      <table className="w-full min-w-[680px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-hairline bg-paper">
            <th className="w-1/4 px-5 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wide text-ink/50">
              Dimension
            </th>
            <th className="px-5 py-4 text-left font-display text-base font-semibold text-teal">
              Premium Subscription
            </th>
            <th className="px-5 py-4 text-left font-display text-base font-semibold text-ink">
              One-Time Development
            </th>
            <th className="px-5 py-4 text-left font-display text-base font-semibold text-teal-dark">
              Data Engineering
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "" : "bg-paper/40"}>
              <td className="border-t border-hairline px-5 py-4 font-semibold text-ink">
                {row.label}
              </td>
              <td className="border-t border-hairline px-5 py-4 text-ink/80">{row.subscription}</td>
              <td className="border-t border-hairline px-5 py-4 text-ink/80">{row.oneTime}</td>
              <td className="border-t border-hairline px-5 py-4 text-ink/80">{row.dataEngineering}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
