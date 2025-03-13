import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CommonQuestions from './components/CommonQuestions';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {loading ? (
        <Splash /> // Show splash screen first
      ) : (
        <>
          <Header />
          <AboutUs />
          <Services />
          <CommonQuestions />
          <Projects />
          <Footer />
          <footer className="bg-blue-800 text-white text-center p-3">
            &copy; 2025 منصة مشارق - جميع الحقوق محفوظة
          </footer>
        </>
      )}
    </div>
  );
}

export default App;