export const site = {
  name: 'Vaanya Singh',
  location: 'Bengaluru, India',
  status: 'Open to HCI collaborations',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaanyasingh' },
    { label: 'GitHub', href: 'https://github.com/vaanyaasingh' },
    { label: 'Instagram', href: 'https://www.instagram.com/vaanyaa27' },
  ],
  nav: [
    { to: '/', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
};

/* ---- About page ---- */

// Put the PDF at public/Vaanya-Singh-CV.pdf.
export const cv = '/Vaanya-Singh-CV.pdf';

// Off the clock: a page reached from About only (not in the nav).
// Flip to true once src/pages/OffTheClock.jsx exists and the /off-the-clock route is added.
export const offTheClock = { ready: false, to: '/off-the-clock' };

export const experience = {
  note: 'Four internships, mostly AI. The thread: making systems people can actually trust.',
  items: [
    { when: 'Jun 2026 — now', where: 'Bengaluru · On-site', current: true, role: 'AI Intern', org: 'Grid (Pragyaam Data Technologies)',
      body: 'Built an evaluation framework for a LangGraph agent system in LangFuse — test cases, custom metrics, iteration on reliability. Added two new widget types to a dashboard-builder agent and a synthetic-data simulator for testing.' },
    { when: 'Aug — Oct 2025', where: 'Bengaluru', role: 'AI Intern', org: 'SKF India',
      body: 'Designed and built a chatbot’s backend logic and UI on Azure, and cleaned and annotated the data behind it. Sat in on a lot of leadership calls and worked closely with my manager on where the tool should go.' },
    { when: 'Jul — Sep 2025', where: 'Remote · Tallinn', role: 'Junior Developer', org: 'Avalanche Laboratory',
      body: 'Co-developed an iPad-first app in React Native, tuning responsiveness across screen sizes and testing end to end on Xcode Simulator and TestFlight before launch. Also designed the logo.' },
    { when: '2023', where: 'India', role: 'Tech Intern', org: 'Healthians',
      body: 'Prompt engineering with LangChain — back in 2023, before it had a job title.' },
  ],
};

export const goGirl = {
  note: 'I walked in as a volunteer teaching kids to code. I’ve stayed for every job the organisation has needed since.',
  org: {
    meta: 'Go Girl Organisation · 2021 — now',
    title: ['Girls’ digital education, ', 'India & Canada'],
    hats: [
      { n: '01', title: 'Volunteer teacher', note: 'Taught kids to code in Ranchi.' },
      { n: '02', title: 'Programme manager', note: 'Ran programmes in Haryana and Punjab.' },
      { n: '03', title: 'First donor acquisitions manager', note: 'Created the role; ran Friendsgiving.' },
      { n: '04', title: 'Website, designed & built', note: 'Figma to React, with Razorpay donations. Rebuilt sign-up flows; completion rose 40%.' },
      { n: 'Now', title: 'Leading the brand restructure', note: 'New guidelines, a new voice, one organisation.' },
    ],
  },
  community: {
    meta: 'Go Girl Community · Co-founder · 2024 — now',
    title: ['A room for Gen Z women ', 'in tech'],
    body: 'At the end of 2024, Japnit, Aqsa and I started the community we wished we’d had. I built the brand from nothing: name, voice, visuals and every channel it lives on.',
    photo: '', // e.g. '/about/ggc.jpg' in public/
    stats: [{ v: '~700', k: 'Newsletter readers' }, { v: '~300', k: 'On WhatsApp' }],
  },
};

export const study = {
  school: 'RV College of Engineering',
  degree: 'BE, Computer Science & Engineering',
  when: '2023 — 2027',
  where: 'Bengaluru',
  courses: ['Design thinking', 'Web frameworks', 'AI & ML', 'Deep learning', 'NLP', 'Probability & stats', 'DBMS'],
  extras: [
    { k: 'Certificate', title: 'Google UX Design', note: 'Research, wireframes, usability testing — the vocabulary to go with the instinct.' },
    { k: 'On campus', title: 'Design & content lead, GDG RVCE', note: 'Core team, Google Developer Group.' },
    { k: 'On campus', title: 'Senior associate, E-Cell', note: 'Design & tech team — built the E-Cell website.' },
  ],
};

export const offClockTeaser = 'Squash, piano, crochet, too much matcha, and strong opinions about menus.';
