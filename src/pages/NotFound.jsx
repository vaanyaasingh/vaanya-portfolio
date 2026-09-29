import { MixedHeadline } from '../components/MixedHeadline.jsx';
import { Button } from '../components/Button.jsx';
import { useTitle } from '../lib/useTitle.js';

export default function NotFound() {
  useTitle('Not found');
  return (
    <section className="notfound wrap">
      <span className="label rise">404</span>
      <MixedHeadline size="var(--type-display)" parts={['Lost the', { text: 'thread', style: 'italic' }, { text: '.', style: 'accent' }]} />
      <p className="lead rise" style={{ '--d': '300ms' }}>This page doesn’t exist — or it hasn’t been written yet.</p>
      <div className="rise" style={{ '--d': '400ms' }}><Button to="/" arrow>Back to the work</Button></div>
    </section>
  );
}
