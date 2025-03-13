import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/Logo.png';
import Button from './ui/Button.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="Header" id='header'>
        <nav className="Navbar">
          <img className="Navimg" src={Logo} alt="Logo" />

          <ul className={`navlinks ${isOpen ? 'open' : ''}`}>
            <li><a href="#header" onClick={closeMenu}>الرئيسية</a></li>
            <li><a href="#aboutus" onClick={closeMenu}>من نحن</a></li>
            <li><a href="#services" onClick={closeMenu}>خدماتنا</a></li>
            <li><a href="#common" onClick={closeMenu}>الاسئلة الشائعة</a></li>
            <li><a href="#projects" onClick={closeMenu}>المشاريع</a></li>
            <li><a href="#contact" onClick={closeMenu}>تواصل معنا</a></li>
          </ul>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <a href="https://wa.me/9660509094365" target="_blank" className="contact">تواصل معنا</a>
        </nav>

        <div className={`sidebar ${isOpen ? 'show' : ''}`} onClick={closeMenu}>
          <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeMenu}>&times;</span>
            <ul className="sidebar-links">
            <li><a href="#header" onClick={closeMenu}>الرئيسية</a></li>
            <li><a href="#aboutus" onClick={closeMenu}>من نحن</a></li>
            <li><a href="#services" onClick={closeMenu}>خدماتنا</a></li>
            <li><a href="#common" onClick={closeMenu}>الاسئلة الشائعة</a></li>
            <li><a href="#projects" onClick={closeMenu}>المشاريع</a></li>
            <li><a href="#contact" onClick={closeMenu}>تواصل معنا</a></li>
            </ul>

            <a href="https://wa.me/9660509094365" target="_blank" className="contact">تواصل معنا</a>
          </div>
        </div>

        <div className="HeaderContent">
          <h2 className="HeaderTitle">مكتب مشارق للخدمات الطلابية والبحثية</h2>
          <p className='headerdetail'>كتب مشارق هو مكتب متخصص في تقديم الخدمات الأكاديمية والبحثية للطلاب والباحثين في مختلف التخصصات العلمية والهندسية والاجتماعية. نعمل على تقديم حلول متكاملة لدعم الطلاب في إعداد الأبحاث والشروحات العلمية، التحليل الإحصائي، وتنفيذ مشاريع التخرج والدراسات العليا (الماجستير والدكتوراه)، بالإضافة إلى المساعدة في نشر الأبحاث العلمية في مجلات محكمة.</p>
          <a href="https://wa.me/9660509094365" target="_blank" className="contact">تواصل معنا</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
