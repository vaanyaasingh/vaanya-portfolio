/*
  Projects + case studies.

  Every project is one object. The case study page renders `sections` in order,
  so writing a case study = filling this array. Section types:

    { type: 'text',   label: 'The tension', heading?: '…', body: ['para', 'para'] }
    { type: 'image',  src?: '/work/raseed/hero.jpg', alt: '…', caption?: '…', ratio?: '16/9' }
    { type: 'pair',   small?: true, images: [{ src, alt, caption }, { src, alt, caption }] }
    { type: 'quote',  text: '…', by?: 'Participant 04' }
    { type: 'facts',  items: [{ k: 'Interviews', v: '12 shopkeepers' }, …] }
    { type: 'fork',   label: 'The fork', options: [{ title, body, chosen?: true }, …] }
    { type: 'gallery', label, heading?, images: [{ src, alt, ratio, caption, wide?: true }, …] }  (4 across)
    { type: 'shelf',   label, heading?, items: [{ src, name, note }, …] }  (posters on a dock, like About's shelf)
    { type: 'scatter', label, heading?, items: [{ src, alt, caption, x, y, w, r }] }  // % positions, r in deg

  Images go in /public/work/<id>/… and are referenced as '/work/<id>/file.jpg'.
  Omit `src` and a hatched placeholder in the project's tone is drawn instead.
  `placeholder: true` shows a small "draft" note on the case study page.
  `size: 'pill'` shows the project as a compact pill under the big cards
  (for smaller / side projects). Everything else is a big card.
*/

export const projects = [
  {
    id: 'go-girl-community',
    title: 'Go Girl Community',
    kind: ['Research', 'Designed'],
    year: '2024',
    tone: 'lilac',
    gradient: 'dusk',
    role: 'Co-founder · research, brand, events and its web page · 2024 to now',
    stack: 'Canva · Figma · WhatsApp · Luma · Newsletter · Instagram',
    summary: 'A women in tech community of 1000+, with meetups, workshops and 30+ channels.',
    hook: 'a women in tech community',
    thumb: '/work/go-girl-community/logo-aura.webp',
    cover: '/work/go-girl-community/site-hero.webp',
    coverRatio: '2940/1912',
    problemFirst: true,   // summary + facts sit above the photo
    coverAlt: 'The Go Girl Community page: “women building in tech, together”, framed by photos from our meetups',
    sections: [
      { type: 'summary', items: [
        { k: 'What it is', v: 'A community for women in tech. We host meetups and workshops, and members help each other with jobs, interviews and staying on track.' },
        { k: 'What I did', v: 'Co-founded it. I ran the member research, built the brand and every channel, and designed the community’s page on the Go Girl website.' },
        { k: 'Where it is', v: '1000+ women across WhatsApp, our newsletter, Luma and Instagram, in 30+ channels. Events in Bengaluru, Calgary and online.' },
      ] },
      { type: 'facts', items: [
        { k: 'Started', v: 'End of 2024' },
        { k: 'Role', v: 'Co-founder' },
        { k: 'Reach', v: '1000+ across channels' },
        { k: 'Channels', v: '30+' },
      ] },
      { type: 'text', label: 'The start', heading: 'We launched it at the Grace Hopper Celebration India.', body: [
        'Japnit, Aqsa and I started Go Girl Community at the end of 2024, and soft launched it at our booth there.',
      ] },

      // The member interviews
      { type: 'media', label: 'The interviews', heading: 'We didn’t hand members a survey. We got on calls and just talked.', body: [
        'No list of direct questions. We asked people how they used the community and let them tell stories. Then we put every quote on a board and grouped them until themes showed up.',
      ], image: { src: '/work/go-girl-community/research-board.webp', alt: 'A whiteboard of member quotes on sticky notes, grouped into themes', ratio: '2940/1912', caption: 'Every quote from the calls, grouped by theme.' } },
      { type: 'list', label: 'What we heard', heading: 'Six things members kept coming back to.', items: [
        { title: 'A peer, not a professor', body: 'It is easier to text a senior than a mentor who feels like a teacher.' },
        { title: 'One place to ask', body: 'Instead of messaging friends one by one, they post once and get different minds.' },
        { title: 'Answers before the interview', body: 'One member was nervous about an Amazon online test. Another member told her what to expect.' },
        { title: 'Accountability', body: 'Our 7-day wellness challenge worked because everyone could see each other’s streaks.' },
        { title: 'Upskilling, even with a job', body: 'Members with jobs still worried about being easy to replace.' },
        { title: 'People who actually reply', body: 'What made it feel real was that people answered, and didn’t just join and leave.' },
      ] },
      { type: 'quote', text: 'I could let myself down, but I did not want to let myself down in front of everybody.', by: 'A member, on the 7-day wellness challenge' },
      { type: 'media', flip: true, label: 'The pattern', heading: 'Accountability came up in almost every call.', body: [
        'Members kept a streak going in the 7-day challenge so they wouldn’t let the group down. Doing it together was easier than doing it alone at home.',
      ], image: { src: '/work/go-girl-community/research-accountability.webp', alt: 'Sticky notes on accountability, upskilling and a network that replies', ratio: '1822/1524', caption: 'The accountability notes from the calls.' } },
      { type: 'list', label: 'What we built', heading: 'Each theme turned into something members can use.', items: [
        { title: 'Themed channels', body: 'Tech, AI, opportunities, support, fitness and more. We started with 5 and now run 30+, because members kept asking.' },
        { title: 'Mentor sessions', body: 'One-on-one calls with women working in tech, with a prep guide for each side.' },
        { title: 'Lock In & Latte and study with me', body: 'Coworking sessions, in person and online, for the accountability members asked for.' },
        { title: 'Workshops', body: 'Hands-on sessions on AI and building, for members upskilling next to a job or degree.' },
      ] },
      { type: 'pair', small: true, images: [
        { src: '/work/go-girl-community/mentor-guide.webp', alt: 'Mentor’s guide: understand the participant, listen first, share guidance, stay connected', ratio: '910/1287', caption: 'The mentor’s guide says listen first, because members wanted a senior, not a professor.' },
        { src: '/work/go-girl-community/mentee-guide.webp', alt: 'Mentee prep guide: set 2 to 3 clear goals, know your mentor, bring your materials, 48-hour cancellation policy', ratio: '910/1287', caption: 'The mentee’s guide asks for two or three questions and 48 hours’ notice, so a volunteer’s hour isn’t wasted.' },
      ] },
      { type: 'pair', small: true, images: [
        { src: '/work/go-girl-community/testimonial-amazon.webp', alt: 'Member spotlight: “It didn’t even feel like talking to a mentor, just a supportive senior who genuinely had my back.”', ratio: '4/5', caption: 'The Amazon story from the calls, later shared as a member spotlight.' },
        { src: '/work/go-girl-community/testimonial-study.webp', alt: 'Study with Me spotlight: three members on staying focused together', ratio: '4/5', caption: 'Study with Me, in members’ own words.' },
      ] },

      // The design decisions
      { type: 'media', flip: true, label: 'Design · type', heading: 'A serif for the old and the new, and a script for the warmth.', body: [
        'I explored type first: Didot, Playfair, Corsiva and a handful of scripts, then paired a serif with a handwritten “community”.',
      ], image: { src: '/work/go-girl-community/logo-explore.webp', alt: 'Wordmark explorations for go girl community, with the original and pastel colours', ratio: '2124/1518', caption: 'Wordmark explorations, and the colour question.' } },
      { type: 'fork', label: 'Design · colour', options: [
        { title: 'Keep Go Girl’s colours', body: 'Hot pink, purple and lime. Instantly linked to the organisation, but loud for a space that should feel calm.' },
        { title: 'Pastel versions of them', body: 'Lavender and yellow, like an aura. Still connected to the brand, and softer to spend time in.', chosen: true },
      ] },
      { type: 'pair', images: [
        { src: '/work/go-girl-community/moodboard.webp', alt: 'Mood board: brand colours, networking, one-on-one mentor sessions, speaker sessions', ratio: '2506/1296', caption: 'The mood board: networking, mentors, small informal chats.' },
        { src: '/work/go-girl-community/logo-colours.webp', alt: 'The wordmark tested on lavender, pink, blue and dark backgrounds', ratio: '2212/996', caption: 'The wordmark on every background we might need.' },
      ] },
      { type: 'media', label: 'Design · the page', heading: 'One page, built around our photos and events.', body: [
        'I designed and built the community’s page on gogirlorganisation.com, with photos from our meetups and our Luma events built in.',
      ], image: { src: '/work/go-girl-community/site-events.webp', alt: 'The events section: “pick a saturday, we’ll save you a seat”, with upcoming coworking sessions', ratio: '2940/1912', caption: 'Upcoming events, straight from our Luma calendar.' } },

      { type: 'shelf', label: 'The poster shelf', heading: 'Every event gets its own poster, in the same voice.', items: [
        { src: '/work/go-girl-community/posters/launch.webp', name: 'Introducing Go Girl Community', note: 'The launch post: sisterhood, a safe space, networking and mentorship.' },
        { src: '/work/go-girl-community/posters/vibe-coding.webp', name: 'Vibe Coding 2.0', note: 'Build your portfolio website. Free, virtual and hands-on.' },
        { src: '/work/go-girl-community/posters/ai-agent.webp', name: 'Build Your First AI Agent', note: 'No-code tools, with Japnit. 100+ registered, our biggest workshop.' },
        { src: '/work/go-girl-community/posters/ai-got-me-the-job.webp', name: 'AI Got Me the Job', note: 'LinkedIn and resumes with AI, with Shivangi Dua, a technical writer.' },
        { src: '/work/go-girl-community/posters/claude-code.webp', name: 'Intro to Claude Code', note: 'A discussion workshop. 50+ registered.' },
        { src: '/work/go-girl-community/posters/claude-masterclass.webp', name: 'The Claude Masterclass', note: 'Timed at 8:30 PM IST and 11 AM EST, so India and Canada can both join.' },
        { src: '/work/go-girl-community/posters/ai-buzzwords.webp', name: 'AI Buzzwords Demystified', note: 'RAG, MCP and agents, explained by Harini Anand from IBM watsonx.' },
        { src: '/work/go-girl-community/posters/glow-up.webp', name: '2026 Glow Up', note: 'Reflection and goal setting to open the year.' },
        { src: '/work/go-girl-community/posters/creator-pass.webp', name: 'Creator Pass', note: 'Three months free for creators: workshops, mentors and opportunities.' },
        { src: '/work/go-girl-community/posters/day-off.webp', name: 'Tech Girlies’ Day Off', note: 'No laptops: bracelets, paint and sip, and one free drink.' },
      ] },

      // The events and what came of it
      { type: 'stat', v: '100+', k: 'women registered for Build Your First AI Agent, our biggest online workshop.', note: 'The vibe coding workshop drew 80+ and the Claude Code workshop 50+.' },
      { type: 'media', label: 'The events', heading: 'Workshops online, meetups in person.', body: [
        'Online: vibe coding, building an AI agent, Claude Code, and “AI got me the job” with a guest speaker. In person: Tech Girlies’ Day Off in Bengaluru, pickleball, and Lock In & Latte coworking in Calgary.',
      ], image: { src: '/work/go-girl-community/newsletter.webp', alt: 'Newsletter header: What’s in my Basket? Vibe Coding Workshop Edition', ratio: '3/1', caption: 'Every workshop goes out in the newsletter too.' } },
      { type: 'text', label: 'What it became', heading: '1000+ women, and members who help each other.', body: [
        'Members have landed internships and speaking slots through the community. The part I am proudest of is the support channel, where members answer each other’s questions.',
      ] },
      { type: 'text', label: 'What it taught me', heading: 'People stay for someone who replies.', body: [
        'The calls told us more than any survey would have. Nobody asked for more content. They asked for peers who answer, and for someone to notice if they skipped a day.',
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
      { type: 'stat', v: '39', k: 'GST-registered businesses for every CA in India: 1.65 crore businesses, about 4.26 lakh CAs.', note: 'ICAI’s president says India will need 30 lakh CAs by 2047.', source: [
        { label: 'PIB, May 2026', href: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc202671908001.pdf' },
        { label: 'ICAI, Dec 2024', href: 'https://icai.org/post/prc-icai-successfully-concludes-26th-council-and-25th-regional-councils-elections' },
        { label: 'ICAI, 30 lakh by 2047', href: 'https://ai.icai.org/articles_details.php?id=253' },
      ] },
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
      ], verdict: 'One CA serves many businesses, so winning one CA reaches all of them. The cost: what we built is still shaped around a single business.' },
      { type: 'list', label: 'Round two', heading: 'Two articleship associates and a CA: what landed, and what didn’t.', items: [
        { title: 'What landed', body: 'The compliance checklist, the deadline reminders and invoice parsing.' },
        { title: 'What didn’t', body: 'Bank statement analysis. It wasn’t useful to any of them.' },
        { title: 'Sorting client data', body: 'Every client sends data in a different shape. Sorting it is the most tedious part of the job.' },
        { title: 'Questions during audits', body: 'Asking intricate questions of a client’s records takes hours. An AI that did the first pass would help.' },
        { title: 'The back and forth', body: 'Filing means chasing clients for documents and reminders, and none of it is automated. Many clients don’t use Tally at all.' },
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
      ], verdict: 'Nobody can test a build that won’t start. We gave up grounded answers for now, and retrieval is first on the roadmap.' },
      { type: 'media', label: 'The rule', heading: 'The AI drafts. A person decides.', body: [
        'Raseed never acts on a client’s money or taxes by itself. One wrong email to a client is a trust problem a CA can’t take back.',
      ], image: { src: '/work/raseed/invoices.webp', alt: 'Invoices read from uploaded PDFs, each with a Send to client button', caption: 'Sending is always a button a person presses.' } },
      { type: 'phones', images: [
        { src: '/work/raseed/mobile-calendar.webp', alt: 'Filing calendar on mobile: GSTR-2B due, 14 days left', caption: 'Deadlines on a calendar, with days left.' },
        { src: '/work/raseed/mobile-compliance.webp', alt: 'GST notices on mobile, each with action items and a confidence score', caption: 'Every notice explained, with its action items.' },
        { src: '/work/raseed/mobile-upload.webp', alt: 'Upload flow on mobile: GST notice, invoice or bank statement', caption: 'Three kinds of document, one upload.' },
      ] },
      { type: 'brand', label: 'The brand', heading: 'Calm enough to trust with a tax notice.', body: [
        'Warm paper like a ledger, not a bank’s clinical white, and one blue for anything you can act on. Every other colour is a status.',
      ], brand: {
        fonts: 'family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Hind:wght@500&family=JetBrains+Mono:wght@400',
        logo: { mark: '₹', markBg: '#3D4FB8', markFg: '#FCFAF4', name: 'Raseed', sub: 'रसीद · receipt', bg: '#FAF8F3', fg: '#1A1D29', font: "'Plus Jakarta Sans', 'Hind', sans-serif",
          note: 'Raseed is Hindi for receipt. The rupee tile says what it’s for before you read a word.' },
        colours: [
          { name: 'Indigo', hex: '#3D4FB8', role: 'Actions, the active page, today' },
          { name: 'Saffron', hex: '#E08B3C', role: 'Urgent and due soon' },
          { name: 'Green', hex: '#3F8A5C', role: 'On track, healthy cash flow' },
          { name: 'Red', hex: '#B5443A', role: 'Overdue, anomalies' },
          { name: 'Paper', hex: '#F5F0E8', role: 'The page' },
          { name: 'Surface', hex: '#FAF8F3', role: 'Cards and the sidebar' },
          { name: 'Ink', hex: '#1A1D29', role: 'Text' },
        ],
        type: [
          { name: 'Plus Jakarta Sans', font: "'Plus Jakarta Sans', sans-serif", weights: '400 to 800', use: 'The whole interface', sample: 'All filings are on track.' },
          { name: 'Hind', font: "'Hind', sans-serif", weights: '500', use: 'Devanagari beside the English', sample: 'रसीद · receipt' },
          { name: 'JetBrains Mono', font: "'JetBrains Mono', monospace", weights: '400', use: 'GSTINs, invoice numbers, chart axes', sample: 'INV-2026-0142' },
        ],
        rules: [
          { title: 'One blue, and it means act.', body: 'Buttons, links, the active page and today’s date. Nothing decorative is indigo.' },
          { title: 'Colour is a status.', body: 'Saffron for soon, green for on track, red for overdue. Never used for decoration.' },
          { title: 'Money in tabular figures.', body: 'Every amount lines up, so a column of rupees reads like a ledger.' },
          { title: 'Plain words over tax words.', body: '“Nothing critical” and “11 days left”, not a compliance score.' },
          { title: 'Soft edges, faint shadows.', body: '8 to 16px corners on warm paper. A well-kept file, not a bank.' },
          { title: 'Sending is a button.', body: 'Anything that reaches a client waits for a person to press it.' },
        ],
      } },
      { type: 'text', label: 'What broke', heading: 'The deploy, and then the user.', body: [
        'Five agents and OCR on Cloud Run meant weeks of startup crashes; today’s build came from removing things. And the pivot came late, so it’s still shaped around one business, not a CA with many clients.',
      ] },
      { type: 'text', label: 'Next time', heading: 'I’d talk to a CA before writing a single agent.', body: [
        'I designed for a user I had imagined. The real one needed the same engine behind a different product.',
      ] },
      { type: 'text', label: 'What’s next', heading: 'Sort a CA’s client data first, then a strict auditor agent.', body: [
        'Both came straight from round two. Neither is built yet.',
      ] },
    ],
  },
  {
    id: 'smart-market-watchlist',
    title: 'watch-me-Groww',
    kind: 'Coded',
    year: '2026',
    tone: 'butter',
    gradient: 'dawn',
    role: 'Solo · Groww CODE 2026',
    stack: 'Next.js · FastAPI · Postgres + pgvector · Gemini on Vertex AI',
    summary: 'A watchlist that tells you what changed since you last looked, and stays quiet otherwise.',
    hook: 'a smart market watchlist',
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
        'People who check their portfolio more often take less risk and earn less (Thaler, Tversky, Kahneman and Schwartz, 1997). A watchlist that shows every red number is not neutral.',
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
      { type: 'brand', label: 'The brand', heading: 'Warm paper, and colour that only means how much it matters.', body: [
        'Cream and ink instead of a trading terminal’s neon, one typeface, and three colours kept for attention.',
      ], brand: {
        fonts: 'family=Sora:wght@400;600;700;800',
        logo: { name: 'watch-me-Groww', bg: '#1F1B16', fg: '#FFFFFF', font: "'Sora', sans-serif", weight: 800,
          tabs: ['Feed', 'Watchlist', 'Alerts'], tabOn: '#F5A623', tabOnFg: '#1F1B16', tabOff: '#2E2A22', tabOffFg: '#D8D2C4',
          note: 'A lowercase wordmark on a dark bar that stays dark in both themes. The active tab is the only amber on it.' },
        colours: [
          { name: 'Amber', hex: '#F5A623', role: 'Active tab, medium attention' },
          { name: 'Terracotta', hex: '#C4442E', role: 'High attention, price down' },
          { name: 'Olive', hex: '#5B7A3A', role: 'Low attention, price up, live' },
          { name: 'Muted', hex: '#8A8270', role: 'Market closed, stale data' },
          { name: 'Cream', hex: '#F3EEE2', role: 'The page' },
          { name: 'Ink', hex: '#1F1B16', role: 'Text and the top bar' },
        ],
        type: [
          { name: 'Sora', font: "'Sora', sans-serif", weights: '400 to 800', use: 'Everything, one family', sample: 'Ranked by significance, not alphabetically' },
          { name: 'Sora · price', font: "'Sora', sans-serif", weights: '800 · 32px', weight: 800, use: 'The one number you came for', sample: '₹2509.56' },
        ],
        rules: [
          { title: 'Colour means attention.', body: 'High is terracotta, medium amber, low olive. Nothing else gets a colour.' },
          { title: 'Every alert carries its reason.', body: '“Up 1.5%, within normal range”, never just a red number.' },
          { title: 'Stale looks stale.', body: 'A grey dot for “Market closed · 24d ago”, a green one for “Live · just now”.' },
          { title: 'Inform, never advise.', body: 'No buy or sell language anywhere, and the disclaimer sits under the feed.' },
          { title: 'Cards, not glass.', body: 'Solid white cards on cream with a soft shadow, so it reads like paper.' },
          { title: 'Dark is the same family.', body: 'The warm palette turned over, with the accents brightened for contrast.' },
        ],
      } },
      { type: 'phones', images: [
        { src: '/work/smart-market-watchlist/feed-light.webp', ratio: '676/1456', alt: 'The attention feed in light mode: Reliance and TCS marked medium, ICICI Bank low', caption: 'Colour only where something needs your attention.' },
        { src: '/work/smart-market-watchlist/feed-dark.webp', ratio: '676/1456', alt: 'The feed in dark mode: NIFTY 50, Sensex and USD/INR above the attention list', caption: 'Dark keeps the same three attention colours, brightened for contrast.' },
      ] },
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
  {
    id: 'go-girl-organisation',
    size: 'pill',
    title: 'Go Girl Organisation',
    kind: ['Designed', 'Coded'],
    year: '2021',
    tone: 'rose',
    gradient: 'dawn',
    role: 'Website, designed and built · volunteer since 2021',
    stack: 'Figma · React · Razorpay',
    summary: 'The website for a nonprofit teaching girls to code, and sign-up flows that stopped losing people.',
    hook: 'making it easy to say yes',
    // TODO(Vaanya): homepage and donation flow screenshots.
    placeholder: true,
    sections: [
      { type: 'summary', items: [
        { k: 'The problem', v: 'Volunteers, donors and partners first meet Go Girl on a screen. If that moment is confusing, they leave, and a girl does not get a tutor.' },
        { k: 'What I built', v: 'gogirlorganisation.com, from Figma to React, with a Razorpay donation flow for Indian and international donors.' },
        { k: 'Where it is', v: 'Live. After I rebuilt the sign-up flows, completion rose 40%.' },
      ] },
      { type: 'stat', v: '40%', k: 'more people finished signing up after the rebuild' },
      { type: 'text', label: 'The start', heading: 'I walked in as a volunteer teaching kids to code.', body: [
        'Go Girl teaches coding and AI literacy to girls aged 7 to 20 across India and Canada. I started in 2021 teaching in Ranchi, ran programmes in Haryana and Punjab, then became the first donor acquisitions manager.',
      ] },
      { type: 'image', alt: 'gogirlorganisation.com homepage', caption: 'Designed in Figma, built in React, with donations through Razorpay.' },
      { type: 'text', label: 'Now', heading: 'Leading the restructure of the whole brand.', body: [
        'New guidelines, a new voice, one organisation.',
      ] },
      { type: 'text', label: 'What it taught me', heading: 'The front door is the product.', body: [
        'For a donor on a phone, the first minute decides everything. I learned to design that minute, and to measure what happens after it.',
      ] },
    ],
  },

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
