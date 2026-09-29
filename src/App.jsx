import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionProvider } from './lib/transition.jsx';
import { Background } from './components/Background.jsx';
import { Curtain } from './components/Curtain.jsx';
import { Cursor } from './components/Cursor.jsx';
import { SiteNav } from './components/SiteNav.jsx';
import { Footer } from './components/Footer.jsx';
import { getProject } from './data/projects.js';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';

function variantFor(path) {
  if (path === '/') return 'dawn';
  if (path.startsWith('/about')) return 'dusk';
  if (path.startsWith('/contact')) return 'dawn';
  if (path.startsWith('/work/')) return getProject(path.split('/')[2])?.gradient || 'meadow';
  return 'dusk';
}

function Shell() {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Background variant={variantFor(pathname)} />
      <SiteNav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Curtain />
      <Cursor />
    </>
  );
}

export default function App() {
  return (
    <TransitionProvider>
      <Shell />
    </TransitionProvider>
  );
}
