import { useState } from 'react'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import CommonQuestions from './components/CommonQuestions'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
       <div className="font-sans">
      
      <Header/>
      {/* About Us Section */}
     <AboutUs/>
      
      {/* Services Section */}
      <Services/>
      
      {/* FAQ Section */}
     <CommonQuestions/>
      
      {/* Projects Section */}
     <Projects/>
      
      {/* Contact Us Section */}
      <Footer/>
      
      {/* Footer Section */}
      <footer className="bg-blue-800 text-white text-center p-3 ">
        &copy; 2025 مكتب مشارق - جميع الحقوق محفوظة
      </footer>
    </div>
  )
}

export default App
