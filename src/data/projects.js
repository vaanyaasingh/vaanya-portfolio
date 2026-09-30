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
    id: 'go-girl',
    title: 'Go Girl',
    kind: 'Designed',
    year: '2021',
    tone: 'lilac',
    gradient: 'dusk',
    role: 'Website, community and brand · 2021 to now',
    stack: 'Figma · React · Razorpay · Brand identity',
    summary: 'Five years of designing how people find, join and fund a nonprofit for girls in tech.',
    hook: 'two front doors',
    placeholder: true,
    sections: [
      { type: 'facts', items: [
        { k: 'Since', v: '2021' },
        { k: 'Roles', v: '5, so far' },
        { k: 'Community', v: '~700 readers' },
        { k: 'Per session', v: '15 to 25 people' },
      ] },
      { type: 'text', label: 'The start', heading: 'I walked in as a volunteer teaching kids to code.', body: [
        'Go Girl Organisation teaches coding and AI literacy to girls aged 7 to 20 across India and Canada. I started in 2021 as a volunteer teacher in Ranchi, then ran programmes in Haryana and Punjab, then became the first donor acquisitions manager.',
        'Five years in, the thread through every role is the same: making it easy for the right people to walk in. For donors and partners, that meant the website. For young women already in tech, it meant a community of our own.',
      ] },
      { type: 'text', label: 'The tension', heading: 'A nonprofit lives or dies by how easy it is to say yes.', body: [
        'Every volunteer, donor and partner first meets Go Girl through a screen: a website, a donation page, a sign-up form, a WhatsApp link. If that moment is confusing, they leave, and a girl does not get a tutor.',
      ] },
      { type: 'image', alt: 'gogirlorganisation.com homepage', caption: 'Door one: the website, designed in Figma and built in React, with donations through Razorpay.' },
      { type: 'text', label: 'Door one', heading: 'The website, and a sign-up flow that stopped losing people.', body: [
        'I designed and built gogirlorganisation.com, with a donation flow for Indian and international donors. Then I rebuilt the sign-up flows, and completion rose 40%.',
      ] },
      { type: 'text', label: 'Door two', heading: 'A room for Gen Z women in tech.', body: [
        'At the end of 2024, Japnit, Aqsa and I started the community we wished we had. We floated it at our booth at the Grace Hopper Celebration India and soft launched it there. I built the brand from nothing: name, voice, visuals and every channel it lives on.',
      ] },
      { type: 'fork', label: 'The fork', options: [
        { title: 'Paid membership', body: 'Signals value and funds events. But it shut out exactly the students with the least access.' },
        { title: 'Free community, paid events', body: 'No barrier at the door. Money comes from in-person events and merch instead.', chosen: true },
      ] },
      { type: 'text', label: 'The structure', heading: 'Themed channels from day one, on apps people already open.', body: [
        'One group chat turns into noise, and quiet members leave. So we split it: tech, AI, opportunities, support, fitness. We started with 5 channels and now run 15, because members kept asking for more. And we built on WhatsApp and a newsletter, not a custom app. Adoption mattered more than owning the product.',
      ] },
      { type: 'pair', images: [
        { alt: 'Community brand system', caption: 'Lavender and yellow, like an aura. A serif for the old and the new.' },
        { alt: 'Workshop posters', caption: 'The brand at its loudest.' },
      ] },
      { type: 'text', label: 'Now', heading: 'Two looks, becoming one organisation.', body: [
        'I am leading the restructure of the whole Go Girl brand: new guidelines, a new voice, one organisation.',
      ] },
      { type: 'text', label: 'What it became', heading: 'A community that keeps showing up.', body: [
        'Around 700 read the newsletter and 300 are on WhatsApp. Workshops get 100+ registrations and 15 to 25 people come to every session. Members have landed internships and speaking slots. The part I am proudest of is the support circle, where members help each other as if they were one of our own.',
      ] },
      { type: 'text', label: 'What it taught me', heading: 'The front door is the product.', body: [
        'Whether it is a donor on a phone or a student opening a WhatsApp link, the first minute decides everything. I learned to design that minute, and to measure what happens after it.',
      ] },
    ],
  },
  {
    id: 'raseed',
    title: 'Raseed',
    kind: ['Research', 'Designed', 'Coded'],
    year: '2026',
    tone: 'mint',
    gradient: 'meadow',
    role: 'Team lead of 4 · product, frontend and AI architecture',
    stack: 'Next.js · FastAPI · Gemini on Vertex AI · Cloud Run',
    summary: 'A five-agent compliance copilot that five interviews moved from small businesses to their CAs.',
    hook: 'built for the wrong customer',
    thumb: '/work/raseed/thumb.webp', // the card on Work; `cover` is the case study hero
    cover: '/work/raseed/dashboard.webp',
    coverRatio: '16/10',
    coverAlt: 'Raseed dashboard: cash flow, urgent notices, documents and the next GST deadline',
    sections: [
      { type: 'summary', items: [
        { k: 'The problem', v: 'Most of a CA’s week is paperwork. When they run out of hours, the small business pays the penalty.' },
        { k: 'What we built', v: 'A five-agent copilot that reads GST notices, invoices and bank statements, and drafts what to do next.' },
        { k: 'The turn', v: 'Five interviews moved it from small businesses to their CAs. A practising CA is testing it now.' },
      ] },
      { type: 'stat', v: '1 : 3,600', k: 'CAs to people in India: about 4 lakh for 145 crore.', note: 'ICAI says the country will need 50 lakh by 2050.' },
      { type: 'text', label: 'The tension', heading: 'The work that fills a CA’s week isn’t the hard part.', body: [
        'Every client sends data in a different format, reminders go out by phone, and invoices get re-typed by hand.',
      ] },
      { type: 'media', label: 'What it does', heading: 'A notice most owners can’t read, turned into a deadline and dated actions.', body: [
        'Upload a GST notice and Raseed explains it, lists the documents to gather and counts down to the reply.',
      ], image: { src: '/work/raseed/compliance.webp', alt: 'GST notice explainer with the response deadline and an action checklist', caption: 'An ASMT-10 notice, explained.' } },
      { type: 'text', label: 'The research', heading: 'I thought a CA would never want AI. The first interview proved me wrong.', body: [
        'A practising CA put it plainly: a business won’t replace its CA, but a CA buried in routine work would pay to serve more clients. The second, Suhani Jain, wanted AI to do a lot but didn’t trust today’s tools with client data.',
      ] },
      { type: 'fork', label: 'The fork', options: [
        { title: 'Build for the business owner', body: 'Clear pain and a big market. But they trust their CA, and they won’t switch.' },
        { title: 'Build for their CA', body: 'One CA serves many businesses, and the pain is daily. It needs multi-client workspaces and a higher bar for trust.', chosen: true },
      ] },
      { type: 'media', flip: true, label: 'How it works', heading: 'Five agents with one job each, because tax work fails on small mistakes.', items: [
        { title: 'GST and tax' },
        { title: 'Invoices', body: 'Reads uploaded invoices and generates GST-compliant ones.' },
        { title: 'Cash flow', body: 'Scores cash flow health and flags anomalies.' },
        { title: 'Compliance', body: 'Explains notices, builds checklists, tracks deadlines.' },
        { title: 'Communication', body: 'Writes drafts. Nothing is sent until a person confirms.' },
        { title: 'An orchestrator', body: 'Links a GST notice to the missing invoice and the bank entry behind it.' },
      ], image: { src: '/work/raseed/finance.webp', alt: 'Cash flow health score with inflow, outflow and anomalies', caption: 'Cash flow, scored and explained in plain language.' } },
      { type: 'fork', label: 'The trade-off', options: [
        { title: 'Keep retrieval, fight the deploy', body: 'Answers grounded in real GST circulars, but no build anyone could test.' },
        { title: 'Strip it and ship', body: 'A live build people can use. Retrieval comes back first on the roadmap.', chosen: true },
      ] },
      { type: 'media', label: 'The rule', heading: 'The AI drafts. A person decides.', body: [
        'Raseed never acts on a client’s money or taxes by itself. One wrong email to a client is a trust problem a CA can’t take back.',
      ], image: { src: '/work/raseed/invoices.webp', alt: 'Invoices read from uploaded PDFs, each with a Send to client button', caption: 'Sending is always a button a person presses.' } },
      { type: 'phones', images: [
        { src: '/work/raseed/mobile-calendar.webp', alt: 'Filing calendar on mobile: GSTR-2B due, 14 days left', caption: 'Deadlines on a calendar, with days left.' },
        { src: '/work/raseed/mobile-compliance.webp', alt: 'GST notices on mobile, each with action items and a confidence score', caption: 'Every notice explained, with its action items.' },
        { src: '/work/raseed/mobile-upload.webp', alt: 'Upload flow on mobile: GST notice, invoice or bank statement', caption: 'Three kinds of document, one upload.' },
      ] },
      { type: 'text', label: 'What broke', heading: 'The deploy, and then the user.', body: [
        'Five agents and OCR on Cloud Run meant weeks of startup crashes; today’s build came from removing things. And the pivot came late, so it’s still shaped around one business, not a CA with many clients.',
      ] },
      { type: 'text', label: 'Next time', heading: 'I’d talk to a CA before writing a single agent.', body: [
        'I designed for a user I had imagined. The real one needed the same engine behind a different product.',
      ] },
    ],
  },
  {
    id: 'smart-market-watchlist',
    size: 'pill',
    title: 'Smart Market Watchlist',
    kind: 'Coded',
    year: '2026',
    tone: 'butter',
    gradient: 'dawn',
    role: 'Solo · Groww CODE 2026',
    stack: 'Next.js · FastAPI · Postgres + pgvector · Gemini on Vertex AI',
    summary: 'A watchlist that tells you what changed since you last looked, and stays quiet otherwise.',
    hook: 'only what changed',
    cover: '/work/smart-market-watchlist/cover.webp',
    coverRatio: '16/10',
    coverAlt: 'Three screens: the attention feed, a stock with its “since you last checked” reason, and the watchlist',
    // TODO(Vaanya): after the user sessions, add the research, the turn, proof and the reflection.
    placeholder: true,
    sections: [
      { type: 'summary', items: [
        { k: 'The problem', v: 'Most investors open the app after days away. A list of every red number can push a nervous one to sell.' },
        { k: 'What I built', v: 'A watchlist that shows only what changed since you last looked, ranked by rules that can explain themselves.' },
        { k: 'Where it is', v: 'Submitted to Groww CODE 2026, built solo. Sessions with real investors are next.' },
      ] },
      { type: 'text', label: 'The brief', heading: 'Groww asked for a watchlist that shows what changed. My answer: rules decide, AI only writes.', body: [
        'Significance comes from explainable rules, so you can always ask “why am I seeing this?” and get an answer. The AI only turns that decision into a sentence.',
      ] },
      { type: 'stat', v: '25.7 crore', k: 'Demat accounts in India, June 2026.', note: 'About 1 in 24 traded in May.' },
      { type: 'text', label: 'The tension', heading: 'Most investors check in occasionally, and seeing too much makes them worse at it.', body: [
        'People who check their portfolio more often take less risk and earn less (Benartzi and Thaler, 1995). A watchlist that shows every red number is not neutral.',
      ] },
      { type: 'fork', label: 'The first fork', options: [
        { title: 'Flat 5% alerts', body: 'Easy to explain, and what Groww does. But 5% is noise for a small-cap and an alarm for an index fund.' },
        { title: 'Sized to each stock', body: 'A move counts when it’s unusual for that stock. Harder to explain in one line.', chosen: true },
      ], verdict: '“Unusual for this stock” is what people mean by “something happened”. The reason line on every alert does the explaining.' },
      { type: 'media', label: 'The trust call', heading: 'Rules rank. The AI only writes the sentence.', body: [
        'In money, an alert you can’t explain is one you can’t trust. If the AI fails, times out or drifts toward advice, a plain template sentence takes its place.',
      ], image: { src: '/work/smart-market-watchlist/detail.webp', ratio: '676/1456', phone: true, alt: 'Reliance detail screen: “Since you last checked: moved up 1.9%, driven by a statistically unusual price move”', caption: 'Since you last checked, with its reason.' } },
      { type: 'fork', label: 'The fake crash', options: [
        { title: 'Show the raw price change', body: 'Simple. But a 1:10 split looks like a 90% crash.' },
        { title: 'Detect splits and bonuses', body: 'No false alarms, at the cost of more data and more edge cases.', chosen: true },
      ], verdict: 'For a nervous new investor, a fake crash is the worst possible alert.' },
      { type: 'media', flip: true, label: 'The build', heading: 'Built for the investor who’s already nervous.', items: [
        { title: 'Since you last checked', body: 'Compared with what you last saw, not yesterday’s close.' },
        { title: 'A ranked attention feed', body: 'Only the top few changes. The rest stay quiet.' },
        { title: 'Honest staleness', body: '“Market closed” looks different from “data feed stuck”.' },
        { title: 'Subscription-window tracker', body: 'Warns when overseas funds pause new investment under RBI limits.' },
        { title: 'Hard limits', body: 'No advice, no order execution, no copy trading.' },
      ], image: { src: '/work/smart-market-watchlist/watchlist.webp', ratio: '676/1456', phone: true, alt: 'Watchlist of nine: closed markets marked “Market closed · 24d ago”, live funds “Live · just now”', caption: 'Closed says closed. Live says just now.' } },
      { type: 'text', label: 'Still open', heading: 'Raw score, or high, medium and low?', body: [
        'The question I left open is still the most interesting one in the project. It’s exactly what the sessions should answer.',
      ] },
    ],
  },
  {
    id: 'jobready',
    size: 'pill',
    title: 'JobReady',
    kind: 'Coded',
    year: '2026',
    tone: 'peach',
    gradient: 'dawn',
    role: 'Team project · multilingual learning platform',
    stack: 'React · LLaMA 3.1 · English, Hindi, Kannada',
    summary: 'Job skills taught in English, Hindi, Kannada and Hinglish, ending in a resume you can send.',
    hook: 'in your own language',
    placeholder: true,
    sections: [
      { type: 'text', label: 'The tension', body: ['Case study coming soon.'] },
      { type: 'pair', images: [{ alt: 'The same screen in three languages' }, { alt: 'AI tutor answering in Hinglish' }] },
    ],
  },
  {
    id: 'kaamkar',
    title: 'KaamKar',
    kind: 'Coded',
    year: '2024',
    tone: 'sky',
    gradient: 'dusk',
    size: 'pill',
    role: 'Solo · one-week build',
    stack: 'React · FastAPI · Python',
    summary: 'A freelance job-matching prototype, built solo over New Year 2024.',
    hook: 'a week-long build',
    placeholder: true,
    sections: [{ type: 'text', label: 'The idea', body: ['A freelance platform that matches people to projects by skills, rate and experience, trained on public job listings. Built solo in a week, from 27 December 2024 to 2 January 2025.'] }],
  },
  // TODO(Vaanya): an open pill for a smaller thing: a side quest, hackathon or experiment.
  ...[
    { id: 'side-quest-two', title: 'Side quest two', kind: 'Designed', year: '2025', tone: 'lilac', gradient: 'dusk' },
  ].map((p) => ({
    ...p,
    size: 'pill',
    role: 'One line on what it is',
    stack: 'Tools used',
    summary: 'Placeholder for a smaller project.',
    hook: 'a smaller project',
    placeholder: true,
    sections: [{ type: 'text', label: 'The tension', body: ['Case study coming soon.'] }],
  })),

  /*
    Room for more. Copy this block, fill it in, and it appears on the site.
    Big card: leave out `size`. Small pill: size: 'pill'.

  {
    id: 'new-project',
    title: 'New project',
    kind: 'Designed',            // Coded | Designed | Research
    year: '2026',
    tone: 'peach',               // peach | mint | lilac | rose | butter | sky
    gradient: 'dawn',            // dawn | dusk | meadow | night
    role: 'Solo · self-initiated',
    stack: 'Figma',
    summary: 'One line on what it is and who it is for.',
    hook: 'two or three words',
    placeholder: true,
    sections: [{ type: 'text', label: 'The tension', body: ['Coming soon.'] }],
  },
  */
];

export const categories = ['All', 'Coded', 'Designed', 'Research'];

export const getProject = (id) => projects.find((p) => p.id === id);

// `kind` can be one type or a list, e.g. ['Research', 'Designed', 'Coded'].
export const kindsOf = (p) => [].concat(p.kind || []);
