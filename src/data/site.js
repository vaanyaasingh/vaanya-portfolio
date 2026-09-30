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

// Intro under the headline. `word` gets the hover polaroid (RevealWord) with `caption`.
export const aboutIntro = [
  { text: 'I’ve always loved building: the small thrill of code that finally runs. But I’ve loved the part after just as much: shaping a product until it feels good in someone’s hands, so that using it leaves them a little happier than before.' },
  { text: 'So I stopped choosing. If products exist for the people who use them, then how they’re built and how they feel are the same question. I work in the', word: 'mid-way', caption: 'Where I live', after: ', where both get to matter.' },
];

// Put the PDF at public/Vaanya-Singh-CV.pdf.
export const cv = '/Vaanya-Singh-CV.pdf';

// Off the clock: a page reached from About only (not in the nav).
// Flip to true once src/pages/OffTheClock.jsx exists and the /off-the-clock route is added.
export const offTheClock = { ready: false, to: '/off-the-clock' };

export const experience = {
  note: 'Four internships, mostly AI. The thread: making systems people can actually trust.',
  items: [
    { when: 'Jun 2026 to now', where: 'Bengaluru · On-site', current: true, role: 'AI Intern', org: 'Grid (Pragyaam Data Technologies)',
      body: 'Built an evaluation framework for a LangGraph agent system in LangFuse: test cases, custom metrics, iteration on reliability. Added two new widget types to a dashboard-builder agent and a synthetic-data simulator for testing.' },
    { when: 'Aug to Oct 2025', where: 'Bengaluru', role: 'AI Intern', org: 'SKF India',
      body: 'Designed and built a chatbot’s backend logic and UI on Azure, and cleaned and annotated the data behind it. Sat in on a lot of leadership calls and worked closely with my manager on where the tool should go.' },
    { when: 'Jul to Sep 2025', where: 'Remote · Tallinn', role: 'Junior Developer', org: 'Avalanche Laboratory',
      body: 'Co-developed an iPad-first app in React Native, tuning responsiveness across screen sizes and testing end to end on Xcode Simulator and TestFlight before launch. Also designed the logo.' },
    { when: '2023', where: 'India', role: 'Tech Intern', org: 'Healthians',
      body: 'Prompt engineering with LangChain, back in 2023, before it had a job title.' },
  ],
};

export const goGirl = {
  note: 'I walked in as a volunteer teaching kids to code. I’ve stayed for every job the organisation has needed since.',
  org: {
    meta: 'Go Girl Organisation · 2021 to now',
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
    meta: 'Go Girl Community · Co-founder · 2024 to now',
    title: ['A room for Gen Z women ', 'in tech'],
    body: 'A women in tech community I co-founded with Japnit and Aqsa at the end of 2024. We host meetups and workshops, and I built the brand from nothing: name, voice, visuals and every channel.',
    photo: '', // e.g. '/about/ggc.jpg' in public/
    stats: [{ v: '1000+', k: 'Women in the community' }, { v: '30+', k: 'Channels' }],
  },
};

export const study = {
  school: 'RV College of Engineering',
  degree: 'BE, Computer Science & Engineering',
  when: '2023 to 2027',
  where: 'Bengaluru',
  courses: ['Design thinking', 'Web frameworks', 'AI & ML', 'Deep learning', 'NLP', 'Probability & stats', 'DBMS'],
  extras: [
    { k: 'Certificate', title: 'Google UX Design', note: 'Research, wireframes, usability testing: the vocabulary to go with the instinct.' },
    { k: 'On campus', title: 'Design & content lead, GDG RVCE', note: 'Core team, Google Developer Group.' },
    { k: 'On campus', title: 'Senior associate, E-Cell', note: 'Design & tech team. Built the E-Cell website.' },
  ],
};

/* ---- About: the shelf + currently (from "Off the Clock.dc.html", 1b + 1d) ---- */

// Photos: transparent cut-outs in public/about/shelf/ (WebP, ~640px tall), `src` per item.
export const shelf = [
  { name: 'Squash racquet', tone: 'peach', src: '/about/shelf/squash-racquet.webp', story: 'I played squash nationally. It taught me to play the next shot, not the last one.' },
  { name: 'Matcha', tone: 'mint', src: '/about/shelf/matcha.webp', story: 'Matcha, every day. The whisking is half the point.' },
  { name: 'Crochet yarn', tone: 'rose', src: '/about/shelf/crochet.webp', story: 'Crochet is how I think with my hands.' },
  { name: 'Current read', tone: 'mint', src: '/about/shelf/book.webp', story: 'Always mid-book. Sometimes three.' },
  { name: 'Passport', tone: 'sky', src: '/about/shelf/passport.webp', story: '[One line about travel]' }, // TODO(Vaanya): the story
  { name: 'Earphones', tone: 'lilac', src: '/about/shelf/earphones.webp', story: 'Always in. All kinds of music, honestly.' },
  { name: 'Concert tickets', tone: 'lilac', src: '/about/shelf/concert-tickets.webp', story: 'Any genre, any city. I’ll be near the front.' },
  { name: 'Calligraphy', tone: 'butter', src: '/about/shelf/calligraphy.webp', story: 'Calligraphy taught me that spacing is a design decision.' },
  { name: 'Wordle', tone: 'mint', src: '/about/shelf/wordle.webp', story: 'Wordle religiously, sudoku daily. There’s one of those further down.' },
  { name: 'Pinterest board', tone: 'rose', src: '/about/shelf/pinterest.webp', story: 'I scroll, I pin, I post. My moodboards have moodboards.' },
  { name: 'Rajma chawal', tone: 'peach', src: '/about/shelf/rajma-chawal.webp', story: 'Favourite food, no contest. Still, take me somewhere new.' },
];

// TODO(Vaanya): fill the [brackets].
export const currently = {
  updated: 'Sep 2026',
  items: [
    { k: 'Reading', v: '[Book title]', note: '[Author]', tone: 'paper-0' },
    { k: 'On repeat', v: '[Song]', note: '[Artist]. All kinds of music, honestly.', tone: 'lilac' },
    { k: 'Drinking', v: 'Matcha, obviously', note: '[Current favourite café]', tone: 'mint' },
    { k: 'Watching', v: '[Film]', note: '[One-line verdict]', tone: 'paper-0' },
    { k: 'Making', v: '[Crochet project]', note: 'Hobby maxxing, week [n]', tone: 'butter' },
    { k: 'Next concert', v: '[Artist, city]', note: '[Date]', tone: 'peach' },
  ],
};

/* ---- About: the mini game (from "Off the Clock.dc.html", 1c) ---- */
export const puzzle = {
  note: 'I play sudoku daily and Wordle religiously, so here’s a small one. Every row, column and square gets each of four things I love, once.',
  symbols: [
    { name: 'piano', glyph: '♪', tone: 'lilac', line: 'trained pianist.' },
    { name: 'matcha', glyph: '◐', tone: 'mint', line: 'daily, non-negotiable.' },
    { name: 'squash', glyph: '●', tone: 'peach', line: 'played it nationally.' },
    { name: 'crochet', glyph: '∞', tone: 'rose', line: 'how I think with my hands.' },
  ],
  solution: [0, 1, 2, 3, 2, 3, 0, 1, 1, 0, 3, 2, 3, 2, 1, 0],
  given: [1, 3, 4, 6, 11, 14],
};

export const offClockTeaser = 'Squash, piano, crochet, too much matcha, and strong opinions about menus.';
