interface Row {
  name: string;
  metis: boolean;
  spreadsheets: boolean;
  legacy: boolean;
}

interface Labels {
  capability: string;
  metisGrc: string;
  spreadsheets: string;
  legacyGrc: string;
}

interface Props {
  labels: Labels;
  rows: Row[];
}

function Check() {
  return (
    <svg className="w-5 h-5 text-success mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-critical/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function FrameworkComparison({ labels, rows }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-text-muted">{labels.capability}</th>
            <th className="py-3 px-4 font-semibold text-primary">{labels.metisGrc}</th>
            <th className="py-3 px-4 font-medium text-text-muted">{labels.spreadsheets}</th>
            <th className="py-3 px-4 font-medium text-text-muted">{labels.legacyGrc}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((f, i) => (
            <tr key={f.name} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-primary-50/30' : ''}`}>
              <td className="py-3 px-4 text-text-primary font-medium">{f.name}</td>
              <td className="py-3 px-4 text-center">{f.metis ? <Check /> : <Cross />}</td>
              <td className="py-3 px-4 text-center">{f.spreadsheets ? <Check /> : <Cross />}</td>
              <td className="py-3 px-4 text-center">{f.legacy ? <Check /> : <Cross />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
