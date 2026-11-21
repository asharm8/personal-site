// All site content lives here. Edit this file to update the site.

export const person = {
  name: 'Abhi Sharma',
  email: 'asharm8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/asharma87/',
  github: 'https://github.com/asharm8',
  location: 'Chicago area',
  description:
    'Abhi Sharma — Senior Drupal engineer and solutions lead with 15+ years building web platforms, and licensed P&C producer leading operations and technology at Insurance World Agency.',
};

export const agency = {
  name: 'Insurance World Agency',
  url: 'https://www.iwainsurance.com',
  phone: '(630) 654-6067',
  phoneHref: 'tel:+16306546067',
};

// The two "practices" a visitor can pick in the hero.
export const practices = {
  technology: {
    label: 'Technology',
    lead: 'I architect and ship web platforms.',
    body:
      'Fifteen years of Drupal, composable commerce, and API integration work for brands like Wilson Sporting Goods, Enlyte, and Colorado Parks & Wildlife. I take projects from discovery and estimation through architecture and delivery, and I lead the teams that build them.',
    cta: { label: 'Email me about a project', href: 'mailto:asharm8@gmail.com?subject=Project%20inquiry' },
    secondary: { label: 'See my work', href: '#work' },
  },
  insurance: {
    label: 'Insurance',
    lead: 'I can help you get covered.',
    body:
      "I'm a licensed Property & Casualty producer and part of the leadership team at Insurance World Agency in Downers Grove. We compare 50+ carriers for auto, home, business, and life coverage, for clients in Illinois and 25+ states.",
    cta: { label: 'Get a free quote', href: 'https://www.iwainsurance.com' },
    secondary: { label: 'Call (630) 654-6067', href: 'tel:+16306546067' },
  },
} as const;

export const about = [
  'I started out writing PHP for a Chicago real estate brokerage and grew into a technical lead, then a solutions lead, at Bounteous. Along the way I delivered Drupal intranets, public-sector sites, and composable eCommerce stacks (Drupal + Magento + Akeneo) — and shaped enterprise proposals that influenced $10MM+ in contracted work.',
  "Today I bring that engineering mindset to an independent insurance agency. I run day-to-day operations and own the technology: the website, quoting and intake, carrier integrations, and the automations that let a small team serve clients like a much larger one.",
];

export const skills = [
  { group: 'Platforms', items: ['Drupal 7–10', 'Acquia Site Studio', 'Magento', 'Akeneo PIM', 'WordPress', 'Symfony', 'React', 'Gatsby'] },
  { group: 'Languages', items: ['PHP', 'JavaScript / Node.js', 'Python', 'Bash', 'SQL', 'Twig', 'SASS'] },
  { group: 'Infrastructure', items: ['Docker', 'Linux', 'Apache / Nginx', 'AWS', 'Varnish', 'Akamai', 'CI/CD'] },
  { group: 'Automation & data', items: ['n8n', 'REST APIs', 'GA / GTM', 'Adobe Analytics', 'Algolia', 'Salesforce'] },
  { group: 'Leadership', items: ['Architecture', 'Estimation', 'Delivery leadership', 'Stakeholder & vendor management', 'Mentoring'] },
];

export const experience = [
  {
    role: 'Head of Operations & Technology',
    company: 'Insurance World Agency',
    url: 'https://www.iwainsurance.com',
    dates: 'May 2023 – Present',
    end: 'Now',
    summary:
      'Leadership team of an independent P&C agency in Downers Grove, IL, founded in 1998, quoting 50+ carriers for clients in Illinois and 25+ states. Licensed Property & Casualty producer.',
    points: [
      'Co-lead day-to-day agency operations: staffing and hiring, HR policy, team workflows, and service standards across Auto, Home, Life, and Commercial lines.',
      "Own the agency's technology strategy and stack, from the agency management system and carrier portals to the website, phones, and messaging.",
      'Rebuilt iwainsurance.com as a modern React site, replacing WordPress, with guided quote intake routed straight to the team.',
      "Built n8n and API-driven automations that remove manual work, including commission statement processing and routing client texts into the team's Slack.",
      'Built campaigns and measurement to improve inbound lead quality and grow the agency beyond referrals.',
    ],
  },
  {
    role: 'Lead Solution Architect',
    company: 'Whereoware',
    url: 'https://www.whereoware.com',
    dates: 'Oct 2024 – Jun 2025',
    end: '2025',
    points: [
      'Delivered Drupal and Spring Boot/Play Framework enhancements for public-sector and non-profit properties, including Colorado Parks & Wildlife and Vote411 (League of Women Voters).',
      'Implemented API integrations, performance tuning, and release hardening across multi-environment pipelines; coordinated with client stakeholders and vendor teams.',
      'Authored runbooks and SOPs to stabilize deployments, testing, and ongoing maintenance.',
    ],
  },
  {
    role: 'Senior Solutions Lead',
    company: 'Bounteous',
    url: 'https://www.bounteous.com',
    dates: 'Jul 2021 – Apr 2023',
    end: '2023',
    points: [
      'Led solutioning for enterprise RFPs and SOWs across DXP, CDP, DAM, and PIM; partnered with SMEs in UX, Analytics, and Media.',
      'Converted ~40% of vetted opportunities into revenue, influencing $10MM+ in contracted work over 12 months.',
      'Modeled distributed delivery teams and aligned scope, budget, and capability for complex programs.',
    ],
  },
  {
    role: 'Senior Drupal Developer',
    company: 'Bounteous',
    url: 'https://www.bounteous.com',
    dates: 'Jul 2015 – Jul 2021',
    end: '2021',
    points: [
      'Technical lead for large eCommerce builds (e.g., Wilson Sporting Goods brands) on a composable stack: Drupal, Magento, and Akeneo PIM.',
      'Built custom modules, integration middleware, and component libraries; mentored junior developers on standards and agile delivery.',
      'Translated business requirements into realistic release plans aligned to budget and timelines.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'First Industrial Realty Trust',
    url: 'https://www.firstindustrial.com',
    dates: 'Jul 2013 – Jul 2015',
    end: '2015',
    points: [
      'Launched a Drupal 7 intranet with BI reporting (WebFOCUS) to inform executive decision-making; integrated news and communications workflows.',
      'Built features with PHP, MySQL, jQuery, HTML5/CSS3, ColdFusion, and Oracle; partnered with PR/Marketing on automated campaigns.',
    ],
  },
  {
    role: 'Web Administrator & PHP Programmer',
    company: '@properties',
    url: 'https://www.atproperties.com',
    dates: 'Jul 2011 – Jul 2013',
    end: '2013',
    points: [
      'Developed custom PHP tooling to promote listings and drive lead-to-sale conversion; served as database admin for compliant third-party data feeds.',
      'Resolved advanced production issues; managed the support backlog and vendor escalations.',
    ],
  },
];

export const projects = [
  {
    title: 'Insurance World Agency',
    context: 'Agency website and automation',
    image: '/images/projects/iwa.jpg',
    url: 'https://www.iwainsurance.com',
    linkLabel: 'iwainsurance.com',
    text: "Rebuilt the agency's site from WordPress into a fast React app with guided quote intake for auto, home, business, and life, routed straight to the team. Backed by n8n automations for messaging and back-office work.",
    tags: ['React', 'n8n', 'Automation'],
  },
  {
    title: 'Wilson Sporting Goods',
    context: 'With Bounteous, 2 years',
    image: '/images/projects/wilson.jpg',
    url: 'https://www.wilson.com',
    linkLabel: 'wilson.com',
    text: 'The first blended multi-site eCommerce stack (Drupal + Magento + Akeneo) across wilson.com, slugger.com, demarini.com, wilsonteamshop.com, and atecsports.com — editorial control with PIM-driven automation.',
    tags: ['Drupal', 'Magento', 'Akeneo PIM'],
  },
  {
    title: 'Enlyte',
    context: '8 months',
    image: '/images/projects/enlyte.jpg',
    url: 'https://www.enlyte.com',
    linkLabel: 'enlyte.com',
    text: 'Led a global team to deliver an Acquia Site Studio Drupal 9 multisite with custom modules and REST integrations across enlyte.com, mitchell.com, and genexservices.com.',
    tags: ['Drupal 9', 'Acquia Site Studio', 'Multisite'],
  },
  {
    title: 'Colorado Parks & Wildlife',
    context: 'Whereoware engagement',
    image: '/images/projects/cpw.jpg',
    url: 'https://cpw.state.co.us',
    linkLabel: 'cpw.state.co.us',
    text: 'Enhancements, performance tuning, and deployment hardening on Drupal; coordinated cross-team releases and documentation.',
    tags: ['Drupal', 'Performance', 'Public sector'],
  },
  {
    title: 'Vote411',
    context: 'League of Women Voters, Whereoware engagement',
    image: '/images/projects/vote411.jpg',
    url: 'https://www.vote411.org',
    linkLabel: 'vote411.org',
    text: 'Platform updates and API integrations across Drupal and Java services to improve reliability and maintainability.',
    tags: ['Drupal', 'Spring Boot', 'APIs'],
  },
  {
    title: 'First Industrial intranet',
    context: '3 months',
    image: '/images/projects/first-industrial.jpg',
    url: 'https://www.firstindustrial.com',
    linkLabel: 'firstindustrial.com',
    text: 'Post-tenure contract to re-platform the Drupal 7 intranet to Drupal 10; modernized the LAMP stack and remediated security findings.',
    tags: ['Drupal 10', 'Migration', 'Security'],
  },
  {
    title: 'U.S. District Court, W.D. Oklahoma',
    context: '2 months',
    image: '/images/projects/okwd.jpg',
    url: 'https://www.okwd.uscourts.gov',
    linkLabel: 'okwd.uscourts.gov',
    text: 'WordPress security updates and server configuration hardening.',
    tags: ['WordPress', 'Security', 'Linux'],
  },
];

export const education = [
  { school: 'Loyola University Chicago', program: 'B.S. in Biology', dates: '2005 – 2009' },
  { school: 'DePaul University', program: 'Continuing education in Biology and Computer Science', dates: '2009 – 2010' },
  { school: 'College of DuPage', program: 'Continuing education in Computer Science', dates: '2010' },
];

export const certifications = [
  { name: 'Insurance Producer License, Property & Casualty', issuer: 'Insurance World Agency' },
  { name: 'Acquia Certified Developer, Drupal 9', issuer: 'Acquia' },
  { name: 'Acquia Certified Developer, Drupal 8', issuer: 'Acquia' },
  { name: 'Acquia Certified Developer, Drupal 7', issuer: 'Acquia' },
  { name: 'Acquia Certified Front End Developer, Drupal 7', issuer: 'Acquia' },
];
