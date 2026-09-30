import { useState } from 'react';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';
import { Reveal, SplitHeading } from './Reveal.jsx';
import { site } from '../data/site.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
  Night panel with the contact form.
  Sends to VITE_FORM_ENDPOINT (e.g. Formspree) when set; otherwise opens a
  pre-filled email to VITE_CONTACT_EMAIL; otherwise points to LinkedIn.
*/
export function Contact({ asHero = false }) {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); setErrors((er) => ({ ...er, [k]: undefined })); };

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'A name, so I know who to write back to.';
    if (!EMAIL_RE.test(form.email.trim())) er.email = 'That email doesn’t look quite right.';
    if (form.message.trim().length < 2) er.message = 'Say a little something.';
    setErrors(er);
    if (Object.keys(er).length) return;
    if (form.company) return setStatus('sent'); // honeypot

    if (site.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        });
        setStatus(res.ok ? 'sent' : 'error');
      } catch { setStatus('error'); }
    } else if (site.email) {
      const body = encodeURIComponent(`${form.message}\n\nFrom ${form.name} (${form.email})`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Hello from ' + form.name)}&body=${body}`;
      setStatus('sent');
    } else setStatus('error');
  };

  const linkedin = site.socials.find((s) => s.label === 'LinkedIn')?.href;
  return (
    <section id="contact" className={'contact' + (asHero ? ' contact--hero' : '')} aria-label="Say hello">
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__inner">
        <div className="contact__lede">
          <SplitHeading as={asHero ? 'h1' : 'h2'} className="contact__title" parts={['Say', { text: 'hello', style: 'italic' }, { text: '.', style: 'dot', glue: true }]} />
          <Reveal as="p" delay={150} className="contact__note">
            Admissions committees, collaborators, curious people. I read everything, and I write back.
          </Reveal>
          <Reveal delay={250} className="contact__links">
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} <span aria-hidden="true">↗</span></a>)}
          </Reveal>
        </div>

        <Reveal delay={120} className="contact__card">
          {status === 'sent' ? (
            <div className="contact__thanks" role="status">
              <span className="contact__thanks-mark" aria-hidden="true">✳</span>
              <p>Thank you{form.name ? ', ' + form.name.split(' ')[0] : ''}. I’ll write back soon.</p>
              <Button variant="ghost" onClick={() => { setForm({ name: '', email: '', message: '', company: '' }); setStatus('idle'); }}>Send another</Button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit} noValidate>
              <Input label="Your name" placeholder="Ada Lovelace" autoComplete="name" value={form.name} onChange={set('name')} error={errors.name} />
              <Input label="Email" type="email" placeholder="ada@engine.org" autoComplete="email" value={form.email} onChange={set('email')} error={errors.email} />
              <Input label="Message" multiline placeholder="Say hello…" value={form.message} onChange={set('message')} error={errors.message} />
              <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.company} onChange={set('company')} name="company" />
              <div className="contact__actions">
                <Button type="submit" arrow disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</Button>
                {status === 'error' && (
                  <span className="contact__error" role="alert">
                    That didn’t go through. {linkedin && <>Try me on <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.</>}
                  </span>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
