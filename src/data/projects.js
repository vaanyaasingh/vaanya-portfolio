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
    id: 'jobready',
    // Resume contact details are blurred in the shots.
    title: 'JobReady',
    kind: ['Research', 'Designed', 'Coded'],
    year: '2025',
    tone: 'peach',
    gradient: 'dawn',
    role: 'Team of 3 with Manya Sharma and Aryaki',
    stack: 'Figma · React · Node.js · MongoDB · LLaMA 3.1',
    summary: 'Job skills taught in English, Hindi and Kannada, ending in a resume you can send.',
    hook: 'in your own language',
    thumb: '/work/jobready/learning.webp',
    cover: '/work/jobready/landing.webp',
    coverLaptop: true,   // drawn inside a MacBook
    coverRatio: '1800/900',
    coverAlt: 'JobReady landing page: “Learn Skills. Get Jobs.”, available in English, Hindi and Kannada',
    sections: [
      { type: 'summary', items: [
        { k: 'The problem', v: 'Job skill tutorials exist, but most are in English and nobody checks if you understood them.' },
        { k: 'What we built', v: 'A learning app in English, Hindi and Kannada, with an AI tutor and a resume builder at the end.' },
        { k: 'For', v: 'First-time job seekers who aren’t comfortable learning in English.' },
      ] },
      { type: 'stat', v: '54.81%', k: 'of final-year graduates were found employable in the India Skills Report 2025.', note: 'For women, it dropped to 47.5%.',
        source: [{ label: 'India Skills Report 2025', href: 'https://taggd.in/industry-reports/isr/india-skills-report-2025/' }] },
      { type: 'text', label: 'The problem', heading: 'The tutorials exist. Most of them are in English.', body: [
        'Millions of young people in India want their first job but don’t have the skills employers ask for. Learning online is hard if you’re not comfortable in English, and nobody checks whether you understood.',
      ] },
      { type: 'stat', v: '57%', k: 'of urban internet users in India prefer content in Indian languages.', note: '98% access some content in an Indian language.',
        source: [{ label: 'IAMAI and Kantar, Internet in India 2024', href: 'https://www.businesstoday.in/technology/news/story/indias-internet-revolution-key-insights-from-kantar-and-iamai-report-461043-2025-01-16' }] },
      { type: 'list', label: 'Competitor analysis', heading: 'Nobody combined learning in your language with something to show an employer.', items: [
        { title: 'Government schemes', body: 'PMKVY and Skill India have structured courses, but the same course for everyone and little follow-up.' },
        { title: 'YouTube', body: 'Free and huge, but no structure, no tests, and mostly English.' },
        { title: 'Local training centres', body: 'Hands-on, but hard to reach and fixed timings.' },
        { title: 'Job portals', body: 'Naukri, Apna and Indeed list jobs, but don’t teach skills or check what you know.' },
      ] },
      { type: 'list', label: 'Personas', heading: 'Two people we designed for.', items: [
        { title: 'Ravi, 19, Ranchi', body: 'Finished school, helps at his father’s shop, low-end Android phone, limited English. Wants a billing job at a supermarket. Can’t follow English tutorials.' },
        { title: 'Meena, 32, Kolkata', body: '10th pass, homemaker for ten years. Wants a back-office job to pay for her children’s education. Wants to learn Word and email in simple Hindi. Worried about online scams.' },
      ] },
      { type: 'list', label: 'Key insights', heading: 'Three things shaped the design.', items: [
        { title: 'The content exists, the language doesn’t', body: 'Ravi can find an Excel tutorial in seconds. He just can’t follow it.' },
        { title: 'Learning needs an outcome', body: 'People want to know what a course gets them. A resume line matters more than another video.' },
        { title: 'One path, not a catalogue', body: 'A long list of courses is overwhelming if you don’t know where to start.' },
      ] },
      { type: 'text', label: 'How might we', heading: 'Help a first-time job seeker learn a skill in their own language, and leave with something to show an employer?', body: [] },
      { type: 'media', label: 'Decision 1', heading: 'We ask for language first.', body: [
        'It’s the first step of onboarding. Every screen after it depends on the answer, so it made no sense to ask later.',
      ], image: { src: '/work/jobready/onboarding-language.webp', laptop: true, ratio: '1800/1130', alt: 'Onboarding step one of four: Preferred language, “Select the language you’re most comfortable learning in”', caption: 'Language is step one of four, before location, education and interests.' } },
      { type: 'media', flip: true, label: 'Decision 2', heading: 'Three languages, plus Hinglish for the tutor.', body: [
        'The interface is in English, Hindi and Kannada. The tutor can also answer in Hinglish, because a lot of young people type Hindi in English letters, and formal Hindi can feel like a textbook.',
      ], image: { src: '/work/jobready/tutor-languages.webp', ratio: '1800/1130', alt: 'The AI tutor’s language menu: English, Hindi, Kannada and Hinglish', caption: 'The tutor’s language menu: English, Hindi, Kannada and Hinglish.' } },
      { type: 'fork', label: 'Decision 3', options: [
        { title: 'Google Translate on every screen', body: 'The original plan. Fast, but button labels often come out wrong, and you can’t fix them.' },
        { title: 'Translation files for the interface', body: 'All interface text in Hindi and Kannada files that can be checked and corrected. Only the tutor’s answers are written live.', chosen: true },
      ], verdict: 'Text that never changes should be checked by a person. The model only writes what can’t be written in advance.' },
      { type: 'fork', label: 'Decision 4', options: [
        { title: 'Job matching first', body: 'In our proposal. But it needs a real job database, which we didn’t have.' },
        { title: 'Learning first, resume at the end', body: 'Courses, a tutor, and a resume built from finished courses. Useful right away.', chosen: true },
      ], verdict: 'A resume is something a learner can use this week. Job matching comes once there’s real job data.' },
      { type: 'media', flip: true, label: 'Self-assessment', heading: 'Eight questions before the first course.', body: [
        'Right after onboarding, a short self-assessment asks how comfortable you are with computers and communication, to suggest where to start.',
      ], image: { src: '/work/jobready/self-assessment.webp', ratio: '1800/1130', alt: 'Skill assessment, question 1 of 8: how comfortable are you using a computer?', caption: 'Question one: how comfortable are you on a computer?' } },
      { type: 'media', label: 'Courses', heading: 'Every course on one page.', body: [
        'Microsoft Excel, Word and PowerPoint, email, English speaking and customer service, and data entry. Your progress across all of them sits at the top.',
      ], image: { src: '/work/jobready/learning.webp', laptop: true, ratio: '1800/1130', alt: 'Learning modules: Microsoft skills, email, English speaking and customer service, and data entry, with course progress', caption: 'Five modules to start with, and more that unlock as you go.' } },
      { type: 'media', flip: true, label: 'Inside a course', heading: 'Three levels, and a tutor on every video.', body: [
        'Each course splits into beginner, intermediate and advanced. Every video has an AI summary, an Ask Tutor button and a box to tick when you’re done.',
      ], image: { src: '/work/jobready/course-levels.webp', ratio: '1800/1130', alt: 'Microsoft Skills course with beginner, intermediate and advanced levels, and videos for Excel, Word and PowerPoint', caption: 'Microsoft skills at the beginner level.' } },
      { type: 'media', label: 'AI tutor', heading: 'Pick a mode, and the tutor stays on the course.', body: [
        'Learners choose to be tested, get short notes, or ask a doubt. The tutor answers about the course they picked, instead of turning into an open chatbot.',
      ], items: [
        { title: 'Quiz, notes or doubt', body: 'Three modes, so you say what kind of help you want.' },
        { title: 'The course', body: 'Answers stay inside what you’re learning.' },
        { title: 'The topic', body: 'Narrow it down to one thing, like keyboard shortcuts.' },
        { title: 'The language', body: 'English, Hindi, Kannada or Hinglish, picked per question.' },
        { title: 'Five questions', body: 'Each quiz comes with explanations to review.' },
      ], image: { src: '/work/jobready/tutor-quiz.webp', ratio: '1800/1130', alt: 'AI tutor in quiz mode: five questions on keyboard shortcuts for the Microsoft Skills course', caption: 'Quiz mode on keyboard shortcuts.', pins: [
        { x: 30, y: 15.4 }, { x: 30, y: 34.7 }, { x: 30, y: 43.5 }, { x: 32, y: 52.6 }, { x: 80, y: 30.8 },
      ] } },
      { type: 'media', flip: true, label: 'Resume builder', heading: 'Leave with a resume.', body: [
        'Skills from finished courses are added automatically. Three templates: modern, minimal and creative.',
      ], image: { src: '/work/jobready/resume-modern.webp', laptop: true, ratio: '1800/1029', alt: 'Resume builder, modern template: Priya Sharma, data entry and office assistant, with skill bars for Excel, email, typing and Word', caption: 'Priya, a demo learner close to Ravi: 12th pass, looking for her first office job.' } },
      // Usability testing section goes here once the sessions are done.
      { type: 'list', label: 'What’s next', heading: 'Where it goes from here.', items: [
        { title: 'Job matching', body: 'Once there’s a job database to match against.' },
        { title: 'A real skills test', body: 'To replace the self-assessment.' },
        { title: 'More languages', body: 'Starting with Bengali.' },
      ] },
      { type: 'text', label: 'Reflection', heading: 'Language turned out to be the whole product.', body: [
        'If I did it again, I’d talk to learners before writing personas, and test the tutor’s Hindi and Kannada answers with native speakers from day one.',
      ] },
    ],
  },
  {
    id: 'go-girl-community',
    size: 'pill',
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
      { type: 'text', label: 'The problem', heading: 'The work that fills a CA’s week isn’t the hard part.', body: [
        'Every client sends data in a different format, reminders go out by phone, and invoices get re-typed by hand.',
      ] },
      { type: 'text', label: 'The research', heading: 'I thought a CA would never want AI. The first interview proved me wrong.', body: [
        'A practising CA put it plainly: a business won’t replace its CA, but a CA buried in routine work would pay to serve more clients. The second, Suhani Jain, wanted AI to do a lot but didn’t trust today’s tools with client data.',
      ] },
      { type: 'fork', label: 'The fork', options: [
        { title: 'Build for the business owner', body: 'Clear pain and a big market. But they trust their CA, and they won’t switch.' },
        { title: 'Build for their CA', body: 'One CA serves many businesses, and the pain is daily. It needs multi-client workspaces and a higher bar for trust.', chosen: true },
      ], verdict: 'One CA serves many businesses, so winning one CA reaches all of them. The cost: what we built is still shaped around a single business.' },
      { type: 'media', flip: true, label: 'How it works', heading: 'Five agents with one job each, because tax work fails on small mistakes.', items: [
        { title: 'GST and tax' },
        { title: 'Invoices', body: 'Reads uploaded invoices and generates GST-compliant ones.' },
        { title: 'Cash flow', body: 'Scores cash flow health and flags anomalies.' },
        { title: 'Compliance', body: 'Explains notices, builds checklists, tracks deadlines.' },
        { title: 'Communication', body: 'Writes drafts. Nothing is sent until a person confirms.' },
        { title: 'An orchestrator', body: 'Links a GST notice to the missing invoice and the bank entry behind it.' },
      ], image: { src: '/work/raseed/finance.webp', alt: 'Cash flow health score with inflow, outflow and anomalies', caption: 'Cash flow, scored and explained in plain language.' } },
      { type: 'media', label: 'What it does', heading: 'A notice most owners can’t read, turned into a deadline and dated actions.', body: [
        'Upload a GST notice and Raseed explains it, lists the documents to gather and counts down to the reply.',
      ], items: [
        { title: 'Plain Hindi first', body: 'The notice retold in everyday Hindi, with the tax terms left in English.' },
        { title: 'A confidence score', body: 'Every analysis says how sure it is, so nobody takes it on faith.' },
        { title: 'What it’s about', body: 'The section, the mismatch and the rupee amount, in one sentence.' },
        { title: 'The deadline, at full size', body: 'Days left, or days overdue, is the largest thing on the screen.' },
        { title: 'A dated checklist', body: 'Each action has a priority and its own countdown, ticked off one at a time.' },
        { title: 'Documents to gather', body: 'The exact returns and months to pull.' },
      ], image: { src: '/work/raseed/compliance.webp', alt: 'GST notice explainer with the response deadline and an action checklist', caption: 'An ASMT-10 scrutiny notice, broken into what it says, when it’s due and what to do.', pins: [
        { x: 91, y: 22 }, { x: 46.5, y: 30.7 }, { x: 68.5, y: 40.5 }, { x: 47, y: 64 }, { x: 90, y: 42.5 }, { x: 27, y: 86 },
      ] } },
      { type: 'media', flip: true, label: 'The rule', heading: 'The AI drafts. A person decides.', body: [
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
      { type: 'fork', label: 'The trade-off', options: [
        { title: 'Keep retrieval, fight the deploy', body: 'Answers grounded in real GST circulars, but no build anyone could test.' },
        { title: 'Strip it and ship', body: 'A live build people can use. Retrieval comes back first on the roadmap.', chosen: true },
      ], verdict: 'Nobody can test a build that won’t start. We gave up grounded answers for now, and retrieval is first on the roadmap.' },
      { type: 'list', label: 'Round two', heading: 'Two articleship associates and a CA: what landed, and what didn’t.', items: [
        { title: 'What landed', body: 'The compliance checklist, the deadline reminders and invoice parsing.' },
        { title: 'What didn’t', body: 'Bank statement analysis. It wasn’t useful to any of them.' },
        { title: 'Sorting client data', body: 'Every client sends data in a different shape. Sorting it is the most tedious part of the job.' },
        { title: 'Questions during audits', body: 'Asking intricate questions of a client’s records takes hours. An AI that did the first pass would help.' },
        { title: 'The back and forth', body: 'Filing means chasing clients for documents and reminders, and none of it is automated. Many clients don’t use Tally at all.' },
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
    kind: ['Designed', 'Coded'],
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
      { type: 'stat', v: '25.7 crore', k: 'Demat accounts in India, June 2026.', note: 'About 1 in 24 traded in May.' },
      { type: 'text', label: 'The problem', heading: 'Most investors check in occasionally, and seeing too much makes them worse at it.', body: [
        'People who check their portfolio more often take less risk and earn less (Thaler, Tversky, Kahneman and Schwartz, 1997). A watchlist that shows every red number is not neutral.',
      ] },
      { type: 'text', label: 'The brief', heading: 'Groww asked for a watchlist that shows what changed. My answer: rules decide, AI only writes.', body: [
        'Significance comes from explainable rules, so you can always ask “why am I seeing this?” and get an answer. The AI only turns that decision into a sentence.',
      ] },
      { type: 'fork', label: 'The first fork', options: [
        { title: 'Flat 5% alerts', body: 'Easy to explain, and what Groww does. But 5% is noise for a small-cap and an alarm for an index fund.' },
        { title: 'Sized to each stock', body: 'A move counts when it’s unusual for that stock. Harder to explain in one line.', chosen: true },
      ], verdict: '“Unusual for this stock” is what people mean by “something happened”. The reason line on every alert does the explaining.' },
      { type: 'media', label: 'The trust call', heading: 'Rules rank. The AI only writes the sentence.', body: [
        'In money, an alert you can’t explain is one you can’t trust. If the AI fails, times out or drifts toward advice, a plain template sentence takes its place.',
      ], image: { src: '/work/smart-market-watchlist/detail.webp', ratio: '676/1456', phone: true, alt: 'Reliance detail screen: “Since you last checked: moved up 1.9%, driven by a statistically unusual price move”', caption: 'Since you last checked, with its reason.' },
        // The next decision sits beside the tall screen instead of below it
        then: { type: 'fork', label: 'The fake crash', options: [
          { title: 'Show the raw price change', body: 'Simple. But a 1:10 split looks like a 90% crash.' },
          { title: 'Detect splits and bonuses', body: 'No false alarms, at the cost of more data and more edge cases.', chosen: true },
        ], verdict: 'For a nervous new investor, a fake crash is the worst possible alert.' } },
      { type: 'media', flip: true, label: 'The build', heading: 'Built for the investor who’s already nervous.', items: [
        { title: 'Ranked, then quiet', body: 'Ordered by how unusual each move is, not by name. Only the top few changes make the feed.' },
        { title: 'Colour means attention', body: 'Medium is amber and low is olive. Nothing else on the card gets a colour.' },
        { title: 'Every alert carries its reason', body: '“Statistical deviation” or “within normal range”, never just a red number.' },
        { title: 'Honest staleness', body: '“Market closed · 24d ago” gets a grey dot and “Live · just now” a green one, so a stuck feed never passes for a quiet market.' },
        { title: 'Inform, never advise', body: 'No buy or sell language, no order execution, no copy trading. The disclaimer sits under the feed.' },
        { title: 'Subscription-window tracker', body: 'Warns when overseas funds pause new investment under RBI limits.' },
      ], image: { src: '/work/smart-market-watchlist/feed-light.webp', ratio: '676/1456', phone: true, alt: 'The attention feed: Reliance and TCS marked medium, ICICI Bank low, each with its reason and a market-closed dot', caption: 'After 24 days away: two moves worth a look, and one flagged as normal.', pins: [
        { x: 88, y: 16.5 }, { x: 74, y: 23 }, { x: 67, y: 31 }, { x: 65.5, y: 39.3 }, { x: 50, y: 90.5 }, { x: 80.5, y: 11.4 },
      ] } },
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
    kind: ['Research', 'Designed', 'Coded'],
    year: '2026',
    tone: 'rose',
    gradient: 'dawn',
    role: 'Content strategy, information architecture and build lead · with Japnit Ahuja, Jessica Singh and Shaniya Khan',
    stack: 'Next.js · TypeScript · Tailwind CSS · Framer Motion · Netlify · Claude Code',
    summary: 'A nonprofit’s website, rebuilt for the people who decide in one scroll whether a girl gets a tutor.',
    hook: 'a front door for one scroll',
    cover: '/work/go-girl-organisation/home.webp',
    coverLaptop: true,
    coverRatio: '1800/1148',
    coverAlt: 'The Go Girl Organisation homepage: “The AI future needs every girl in it”, with Donate now and Partner with us, and partner logos under the hero',
    sections: [
      { type: 'summary', items: [
        { k: 'The problem', v: 'The old Wix site broke on phones, sent two nav links back to the homepage and hid the donate button.' },
        { k: 'What I did', v: 'Rebuilt it over four months, from the information architecture up, in code, for CSR teams, donors and volunteers.' },
        { k: 'Where it is', v: 'Live at gogirlorganisation.com. What I can prove so far is structural, not behavioural. A second phase is under way.' },
      ] },
      { type: 'facts', items: [
        { k: 'Timeline', v: 'May to Sep 2026' },
        { k: 'Students since 2018', v: '2,426' },
        { k: 'Programmes', v: '85' },
        { k: 'Hours taught', v: '1,745' },
      ] },
      { type: 'text', label: 'The stakes', heading: 'A nonprofit website is the moment a yes turns into a no.', body: [
        'Go Girl teaches free coding, AI literacy and English to girls aged 7 to 20 across India and Canada. It runs on donors, volunteers and corporate partners, and almost every one of them meets it first on a screen.',
      ] },
      { type: 'media', label: 'The audit', heading: 'The villain wasn’t ugliness. It was a trust gap.', items: [
        { title: 'It broke on phones', body: 'The layout fell apart below 480px, on the phones most Indian donors find us on through Instagram and WhatsApp forwards.' },
        { title: 'The nav went nowhere', body: '“Our Work” and “Our Founder” both pointed back to the homepage.' },
        { title: 'Giving was hidden', body: 'No donate page, no 80G tax benefit callout and no registration details in the footer.' },
        { title: 'It apologised for itself', body: '“Join Us” had no roles behind it, partners were logos with no context, and the stats headline said “Small numbers, big swings.”' },
        { title: 'AI search couldn’t see it', body: 'People ask ChatGPT and Perplexity which NGOs teach girls to code. A Wix site with no plain-language answers never came up.' },
      ], image: { src: '/work/go-girl-organisation/old-home.webp', laptop: true, ratio: '1800/1058', alt: 'The old Wix homepage: “Every Girl Deserves Quality Education” over a classroom photo, with Join Us and Donate buttons', caption: 'The old Wix homepage. Same organisation, same seven years of work.' } },
      { type: 'list', label: 'Three visitors', heading: 'Three visitors, three different one-minute decisions.', items: [
        { title: 'The CSR manager', body: 'Has a mandate to fund measurable impact. Needs registrations, named partners, an annual report and a contact, fast.' },
        { title: 'The individual donor', body: 'Urban India, 22 to 40, arriving from Instagram or WhatsApp. Needs one proof point, one trust signal and a two-click payment.' },
        { title: 'The volunteer', body: 'Usually 18 to 30. Needs to know what the role is, how many hours it takes and what she gets out of it.' },
        { title: 'No interviews, said plainly', body: 'These come from the team’s experience with each audience, the founder’s partnership conversations and a review of 12 nonprofits.' },
      ] },
      { type: 'list', label: 'Research', heading: 'Twelve nonprofit sites taught me the visitor has to be the hero.', aside: [
        { src: '/work/go-girl-organisation/peer-cry.webp', alt: 'CRY India homepage', caption: 'CRY' },
        { src: '/work/go-girl-organisation/peer-roomtoread.webp', alt: 'Room to Read homepage, with the donation form over the hero', caption: 'Room to Read' },
        { src: '/work/go-girl-organisation/peer-codeorg.webp', alt: 'Code.org homepage, now CodeAI: students already use AI, they should understand it too', caption: 'Code.org' },
        { alt: 'Educate Girls homepage', caption: 'Educate Girls' },
        { src: '/work/go-girl-organisation/peer-shesthefirst.webp', alt: 'She’s the First homepage: building a world where every girl chooses her own future', caption: 'She’s the First' },
      ], items: [
        { title: 'CRY reports outcomes, not reach', body: 'Percentages against national averages read as proof. Raw counts read as activity.' },
        { title: 'Room to Read frames numbers by year', body: '“In 2025 alone” makes impact feel current, not historical.' },
        { title: 'Code.org calls partners co-architects', body: 'Not funders. It changes how a CSR manager sees herself on the page.' },
        { title: 'Educate Girls leads with awards', body: 'Credibility arrives before the ask.' },
        { title: 'She’s the First names every story', body: 'A name and a region make a quote feel real in five words.' },
      ] },
      { type: 'text', label: 'The turn', heading: 'I went in to make it look professional. I came out with one argument.', body: [
        'The best sites said “you help a girl”. Ours said “we teach, we deliver, we reach”, and mentioned AI once. The site’s job became one argument: the AI future needs every girl in it, and the visitor is part of delivering it.',
        'The audience order turned too. Our strategy ranked individual donors first. By the time we wrote the homepage, CSR partners came first, donors second and volunteers third.',
      ] },
      { type: 'fork', label: 'Fork 1 · The build', options: [
        { title: 'Webflow', body: 'The original plan. Free nonprofit plan and a CMS, but no write API, so every change was still made by hand.' },
        { title: 'A Lovable prototype', body: 'The fastest route to a working homepage, but a prototype, not a codebase to extend page by page.' },
        { title: 'Next.js in Claude Code', body: 'Full control, every change reviewable in git, live in minutes. No CMS, so teammates can’t edit copy themselves.', chosen: true },
      ], verdict: 'The bottleneck wasn’t design tooling. It was how fast a confirmed decision became a live page. Every line of copy sits in one typed file, so a CMS can come later without touching components.' },
      { type: 'media', label: 'Fork 2 · The homepage', heading: 'The homepage is a menu, not a brochure.', body: [
        'The first draft explained everything. Now each section gets a headline, a line or two and one call to action to its own page. The cost: less detail for anyone who never clicks.',
      ], image: { src: '/work/go-girl-organisation/programmes.webp', ratio: '1800/1369', alt: 'Four programmes, one mission: Digital and AI literacy, STEM tutoring, Project EmpowerED and English classes', caption: 'Four programmes, each a signpost to its own page.' } },
      { type: 'media', flip: true, label: 'Fork 3 · The first scroll', heading: 'CSR partners get the first scroll.', body: [
        'UN, TEDx, Times of India, Logitech, Z Zurich and She The People sit right under the hero buttons. The CSR pitch names Logitech and Z Zurich instead of saying “your CSR budget can fund…”.',
      ], image: { src: '/work/go-girl-organisation/csr.webp', ratio: '1800/996', alt: 'Work with us: two corporate partners are already running Go Girl programmes, and here’s what they get', caption: 'Named partners and what a partner gets, before any ask.' } },
      { type: 'fork', label: 'Who comes first', options: [
        { title: 'Individual donors', body: 'The most people, and story-led copy works. But gifts are small, and trust signals get pushed down.' },
        { title: 'CSR partners', body: 'Named partners and reports up front. One partnership funds a year-long programme.', chosen: true },
      ], verdict: 'Trust signals moved above the fold for everyone, and the donor path stays one click away in the nav and the hero.' },
      { type: 'list', label: 'Fork 4 · The headline', heading: 'Four headlines died so one could live.', items: [
        { title: '“Every girl deserves a seat at the digital table.”', body: 'The old site. Passive: “deserves” asks for something that hasn’t happened.' },
        { title: '“Girls shouldn’t just use the future. They should build it.”', body: 'Strong, but it didn’t name AI, the thing that sets us apart.' },
        { title: '“The AI era is already here. Most girls in India won’t be part of it. We’re changing that.”', body: 'Best for donors, but three sentences is too long for a typographic hero.' },
        { title: '“Started by a girl who was the only one in the room.”', body: 'Great for press, weakest for funders who want proof fast.' },
        { title: '“The AI future needs every girl in it.” Live.', body: 'Names AI, includes every girl, and makes the visitor’s role obvious without saying donate.' },
      ] },
      { type: 'fork', label: 'Fork 5 · The number', options: [
        { title: '“Girls reached”', body: 'Bigger and more on-brand, but about 70 to 80% of our students are girls, so it overcounts.' },
        { title: '“Students reached”', body: 'Accurate, for every cumulative total on the Impact page.', chosen: true },
      ], verdict: 'A slightly less emotional label for a number that survives a funder’s question.' },
      { type: 'quote', text: 'Growing fast. Bigger mission.', by: 'The new stats headline, replacing “Small numbers, big swings”' },
      { type: 'media', label: 'The win wall', heading: 'Proof pinned, not listed.', body: [
        'Wins pinned like a scrapbook: Japnit at the UN, a new smart classroom, a She’s the First cohort in Nairobi. The milestones end in “the next win could be hers”, which links to donate.',
      ], image: { src: '/work/go-girl-organisation/win-wall.webp', ratio: '1800/1440', alt: 'Wins worth pinning: photos, press mentions, 3 countries and a milestone timeline pinned like a scrapbook', caption: 'A win wall instead of a logo grid.' } },
      { type: 'media', flip: true, label: 'Two doors', heading: 'Two ways to give, both one click from the hero.', body: [
        'Indian donors go to Razorpay, with the 80G tax benefit next to the button. International donors get a Zeffy link through the Canadian entity, right under the hero instead of in an FAQ.',
      ], image: { src: '/work/go-girl-organisation/donate.webp', ratio: '1800/785', alt: 'Your support opens the AI world for a girl: ₹500 funds 3 months of tutoring, 80G tax deductible, Donate now', caption: 'The donate band, with the route for donors outside India under the button.' } },
      { type: 'media', label: 'Transparency', heading: 'Every annual report, one click away.', body: [
        'Reports from 2018 to 2025 download from the homepage and the Impact page, with 2022 marked coming soon instead of linking to nothing. Four legal pages were written for India’s DPDPA 2023 and Alberta’s PIPA.',
      ], items: [
        { title: 'Content as data', body: 'Every line of copy and every number sits in one typed file, so a copy edit is one line.' },
        { title: 'Built for AI search', body: 'Keyword-led titles, FAQs written as direct answers, and Impact data in a real table with a last-updated date.' },
      ], image: { src: '/work/go-girl-organisation/reports.webp', ratio: '1800/1645', alt: 'Go Girl through the years: annual reports from 2018 to 2025, each with a download link, 2022 marked coming soon', caption: 'Seven years of reports, and an honest gap for 2022.' } },
      { type: 'media', flip: true, label: 'A second brand', heading: 'One site, two voices.', body: [
        'The Community page is its own sub-brand: its own logo, a lowercase voice, a Luma events calendar and a join form. The site holds both audiences without forcing one voice on both.',
      ], image: { src: '/work/go-girl-organisation/community.webp', ratio: '1800/1175', alt: 'The Go Girl Community page: women building in tech, together', caption: 'Go Girl Community, under the same roof.' } },
      { type: 'media', label: 'What broke', heading: 'The site shipped faster than the facts behind it.', body: [
        'Most trust signals depend on facts only the founder can confirm. I flagged each one and sent it to Japnit, so pages kept moving instead of waiting line by line. It worked for speed, and some of the site went live before every fact was settled.',
      ], items: [
        { title: 'Numbers drifted', body: 'The homepage says 3,000+ girls, the Impact page 2,251 students, the mastersheet 2,426. Each came from a real source at a different moment.' },
        { title: 'A placeholder quote went live', body: 'The tutor quote on the homepage was a stand-in for a real one.' },
        { title: 'Fewer pages shipped', body: 'Home, Impact, Community and the legal pages are live. About and Collabs are homepage sections, and Donate goes straight to Razorpay.' },
        { title: 'Tooling walls', body: 'Drive permissions blocked the report PDFs for weeks, so we hosted them on the site.' },
      ], image: { src: '/work/go-girl-organisation/stats.webp', ratio: '1800/1605', alt: 'Growing fast, bigger mission: 3,000+ girls reached, 1,372 classes delivered, 60K community followers, 7 years running', caption: 'The homepage counter still says “girls reached”.' } },
      { type: 'media', flip: true, label: 'Proof', heading: 'What I can prove today is structural, not behavioural.', body: [
        'These are changes anyone can check by opening the old site and the new one. I don’t have before-and-after behavioural data yet, and I won’t imply that I do.',
      ], items: [
        { title: 'Works on a phone', body: 'The old site broke below 480px.' },
        { title: 'The nav goes where it says', body: 'Home, Impact and Community are real pages. About and Collabs are section anchors.' },
        { title: 'Donating is one click', body: 'From the hero and the nav, with routes for India and abroad.' },
        { title: 'Trust is on the page', body: 'Section 8 and Alberta NPO status in the footer, partner logos under the hero.' },
        { title: 'Volunteering has roles', body: 'Two role cards with hours and what you get, instead of one vague “Join Us”.' },
      ], image: { src: '/work/go-girl-organisation/phone-home.webp', ratio: '780/1688', phone: true, alt: 'The Go Girl homepage on a phone: The AI future needs every girl in it, with Donate now', caption: 'The live homepage at 390px wide.' } },
      { type: 'list', label: 'What’s next', heading: 'One source of truth, then measure.', items: [
        { title: 'Lock the numbers', body: 'The mastersheet becomes the only source for every stat on the site.' },
        { title: 'Ship the missing pages', body: 'Donate, Join Us with its role finder, Collabs, About and AI Days.' },
        { title: 'Get found by AI tools', body: 'Wikidata first, then Crunchbase and GiveIndia.' },
      ] },
      { type: 'text', label: 'Next time', heading: 'I’d install analytics before touching anything.', body: [
        'Two weeks of data on the old site would have given the redesign a baseline to beat. I’d also lock the stats before the first headline, and talk to three CSR managers and five past donors before reordering the homepage around them.',
      ] },
      { type: 'text', label: 'What it taught me', heading: 'A nonprofit website is a trust problem with a design surface.', body: [
        'The decisions that mattered most weren’t visual: which audience sees the first scroll, which number we’ll defend and which headline we’ll kill.',
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
