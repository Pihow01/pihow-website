import { comparisonRows } from "@/content/services";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-hairline bg-surface">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-hairline bg-paper">
            <th className="w-1/4 px-5 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wide text-ink/50">
              &nbsp;
            </th>
            <th className="px-5 py-4 text-left font-display text-base font-semibold text-teal">
              Premium Subscription
            </th>
            <th className="px-5 py-4 text-left font-display text-base font-semibold text-ink">
              One-Time Development
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "" : "bg-paper/50"}>
              <td className="border-t border-hairline px-5 py-4 font-medium text-ink/70">
                {row.label}
              </td>
              <td className="border-t border-hairline px-5 py-4 text-ink">{row.subscription}</td>
              <td className="border-t border-hairline px-5 py-4 text-ink">{row.oneTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
