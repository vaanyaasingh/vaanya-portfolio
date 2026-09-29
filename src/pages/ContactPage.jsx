import { Contact } from '../components/Contact.jsx';
import { useTitle } from '../lib/useTitle.js';

export default function ContactPage() {
  useTitle('Contact');
  return <div className="contact-page"><Contact asHero /></div>;
}
