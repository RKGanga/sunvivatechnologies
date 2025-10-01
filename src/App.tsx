import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

type Route = '/' | '/courses' | '/about' | '/contact' | '/404' | string;

export default function App() {
  const [currentPath, setCurrentPath] = useState<Route>('/');

  // Parse initial path from hash
  useEffect(() => {
    const hash = window.location.hash.slice(1) || '/';
    setCurrentPath(hash);

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || '/';
      setCurrentPath(newHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the appropriate page based on current path
  const renderPage = () => {
    // Course detail route (e.g., /course/docker)
    if (currentPath.startsWith('/course/')) {
      const slug = currentPath.replace('/course/', '');
      return <CourseDetail slug={slug} onNavigate={navigate} />;
    }

    // Static routes
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/courses':
        return <Courses onNavigate={navigate} />;
      case '/about':
        return <About onNavigate={navigate} />;
      case '/contact':
        return <Contact onNavigate={navigate} />;
      case '/404':
        return <NotFound onNavigate={navigate} />;
      default:
        return <NotFound onNavigate={navigate} />;
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-surface-bg)' }}
    >
      <Navigation currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}