"use client";
export function DataTable({ title, data, columns, isLoading, emptyText }) {
  if (isLoading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
        Loading...
      </div>
    );
  }

  const rows = Array.isArray(data) ? data : [];

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="whitespace-nowrap px-6 py-3 font-medium"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-8 text-center text-slate-500"
                >
                  {emptyText}
                </td>
              </tr>
            )}

            {rows.map((row) => (
              <tr key={row.id || row.reference} className="hover:bg-slate-50/50">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="whitespace-nowrap px-6 py-4 text-slate-700"
                  >
                    {col.render
                      ? col.render(row)
                      : row[col.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
