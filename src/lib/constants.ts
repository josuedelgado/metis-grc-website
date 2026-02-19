export const SITE = {
  name: 'Metis GRC',
  description: 'Unified Cybersecurity GRC Platform — NIS2, ISO 27001, NIST CSF 2.0, CIS Controls. AI-powered governance, risk and compliance.',
  url: 'https://metis-grc.com',
  appUrl: 'https://app.metis-grc.com',
  contactEmail: 'sales@metis-grc.com',
} as const;

export const NAV_LINKS = [
  {
    labelKey: 'nav.product',
    href: '/product',
    children: [
      { labelKey: 'nav.productOverview', href: '/product' },
      { labelKey: 'nav.productAi', href: '/product/ai' },
      { labelKey: 'nav.productNis2', href: '/product/nis2' },
      { labelKey: 'nav.productFrameworks', href: '/product/frameworks' },
      { labelKey: 'nav.productVendorRisk', href: '/product/vendor-risk' },
    ],
  },
  { labelKey: 'nav.about', href: '/about' },
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.contact', href: '/contact' },
] as const;
