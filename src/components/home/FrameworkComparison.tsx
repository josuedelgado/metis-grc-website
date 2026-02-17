const frameworks = [
  { name: 'NIS2 Directive', metis: true, spreadsheets: false, legacy: true },
  { name: 'ISO 27001', metis: true, spreadsheets: false, legacy: true },
  { name: 'NIST CSF 2.0', metis: true, spreadsheets: false, legacy: true },
  { name: 'CIS Controls v8', metis: true, spreadsheets: false, legacy: false },
  { name: 'Custom Frameworks', metis: true, spreadsheets: true, legacy: false },
  { name: 'Cross-Framework Mapping', metis: true, spreadsheets: false, legacy: false },
  { name: 'AI-Powered Copilots', metis: true, spreadsheets: false, legacy: false },
  { name: 'Real-Time Dashboards', metis: true, spreadsheets: false, legacy: true },
  { name: 'Vendor Risk Management', metis: true, spreadsheets: false, legacy: true },
  { name: 'Evidence Auto-Classification', metis: true, spreadsheets: false, legacy: false },
  { name: 'Multi-Tenant SaaS', metis: true, spreadsheets: false, legacy: false },
  { name: 'EU Data Residency', metis: true, spreadsheets: false, legacy: false },
];

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

export default function FrameworkComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-text-muted">Capability</th>
            <th className="py-3 px-4 font-semibold text-primary">Metis GRC</th>
            <th className="py-3 px-4 font-medium text-text-muted">Spreadsheets</th>
            <th className="py-3 px-4 font-medium text-text-muted">Legacy GRC</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((f, i) => (
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
