export const SITE = {
  name: 'Metis GRC',
  description: 'Unified Cybersecurity GRC Platform — NIS2, ISO 27001, NIST CSF 2.0, CIS Controls. AI-powered governance, risk and compliance.',
  url: 'https://metis-grc.com',
  appUrl: 'https://app.metis-grc.com',
  contactEmail: 'sales@metis-grc.com',
} as const;

export const NAV_LINKS = [
  {
    label: 'Product',
    href: '/product',
    children: [
      { label: 'Overview', href: '/product' },
      { label: 'AI Copilots', href: '/product/ai' },
      { label: 'NIS2 Compliance', href: '/product/nis2' },
      { label: 'Frameworks', href: '/product/frameworks' },
      { label: 'Vendor Risk', href: '/product/vendor-risk' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;
