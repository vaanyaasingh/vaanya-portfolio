/*
  Projects + case studies.

  Every project is one object. The case study page renders `sections` in order,
  so writing a case study = filling this array. Section types:

    { type: 'text',   label: 'The tension', heading?: '…', body: ['para', 'para'] }
    { type: 'image',  src?: '/work/raseed/hero.jpg', alt: '…', caption?: '…', ratio?: '16/9' }
    { type: 'pair',   images: [{ src, alt, caption }, { src, alt, caption }] }
    { type: 'quote',  text: '…', by?: 'Participant 04' }
    { type: 'facts',  items: [{ k: 'Interviews', v: '12 shopkeepers' }, …] }
    { type: 'fork',   label: 'The fork', options: [{ title, body, chosen?: true }, …] }

  Images go in /public/work/<id>/… and are referenced as '/work/<id>/file.jpg'.
  Omit `src` and a hatched placeholder in the project's tone is drawn instead.
  `placeholder: true` shows a small "draft" note on the case study page.
  `size: 'pill'` shows the project as a compact pill under the big cards
  (for smaller / side projects). Everything else is a big card.
*/

export const projects = [
  {
    id: 'raseed',
    title: 'Raseed',
    kind: 'Coded',
    year: '2025',
    tone: 'mint',
    gradient: 'meadow',
    role: 'Receipts, reimagined — research, design & build',
    stack: 'React Native · Supabase · Figma',
    summary: 'A receipt-keeping app for small shopkeepers who run their accounts on paper.',
    hook: 'receipts that stay',
    placeholder: true,
    sections: [
      { type: 'text', label: 'The tension', body: ['A receipt-keeping app for small shopkeepers who run their accounts on paper. Case study copy goes here — the decision, the fork, and what it cost.'] },
      { type: 'pair', images: [{ alt: 'Raseed screen' }, { alt: 'Raseed screen' }] },
    ],
  },
  {
    id: 'jobready',
    title: 'JobReady',
    kind: 'Designed',
    year: '2024',
    tone: 'peach',
    gradient: 'dawn',
    role: 'Career readiness for first-generation graduates',
    stack: 'Figma · Usability testing',
    summary: 'Turning a confusing job portal into a guided, confidence-building path.',
    hook: 'a guided path',
    placeholder: true,
    sections: [
      { type: 'text', label: 'The tension', body: ['Turning a confusing job portal into a guided, confidence-building path. Case study copy goes here — the decision, the fork, and what it cost.'] },
      { type: 'pair', images: [{ alt: 'JobReady screen' }, { alt: 'JobReady screen' }] },
    ],
  },
  {
    id: 'go-girl-community',
    title: 'Go Girl Community',
    kind: 'Research',
    year: '2024',
    tone: 'lilac',
    gradient: 'dusk',
    role: 'Community design for women in tech',
    stack: 'Interviews · Service design',
    summary: 'Mapping how an online community becomes an in-person one.',
    hook: 'online to in-person',
    placeholder: true,
    sections: [
      { type: 'text', label: 'The tension', body: ['Mapping how an online community becomes an in-person one. Case study copy goes here — the decision, the fork, and what it cost.'] },
      { type: 'pair', images: [{ alt: 'Go Girl Community' }, { alt: 'Go Girl Community' }] },
    ],
  },
  {
    id: 'small-machines',
    title: 'Small Machines',
    kind: 'Coded',
    year: '2023',
    tone: 'butter',
    gradient: 'meadow',
    role: 'Creative-coding experiments',
    stack: 'p5.js · Three.js',
    summary: 'Tiny interactive toys about touch, sound and delay.',
    hook: 'toys about touch',
    placeholder: true,
    sections: [
      { type: 'text', label: 'The tension', body: ['Tiny interactive toys about touch, sound and delay. Case study copy goes here — the decision, the fork, and what it cost.'] },
      { type: 'pair', images: [{ alt: 'Small Machines' }, { alt: 'Small Machines' }] },
    ],
  },
  // TODO(Vaanya): replace these two pill placeholders with real side projects.
  {
    id: 'side-project-one',
    title: 'Side project one',
    kind: 'Designed',
    year: '2023',
    tone: 'sky',
    gradient: 'dusk',
    size: 'pill',
    role: 'One-line description',
    stack: 'Tools used',
    summary: 'Placeholder — a smaller project.',
    hook: 'a smaller project',
    placeholder: true,
    sections: [{ type: 'text', label: 'The tension', body: ['Placeholder — a smaller project.'] }],
  },
  {
    id: 'side-project-two',
    title: 'Side project two',
    kind: 'Research',
    year: '2023',
    tone: 'rose',
    gradient: 'dawn',
    size: 'pill',
    role: 'One-line description',
    stack: 'Tools used',
    summary: 'Placeholder — a smaller project.',
    hook: 'a smaller project',
    placeholder: true,
    sections: [{ type: 'text', label: 'The tension', body: ['Placeholder — a smaller project.'] }],
  },
];

export const categories = ['All', 'Coded', 'Designed', 'Research'];

export const getProject = (id) => projects.find((p) => p.id === id);
