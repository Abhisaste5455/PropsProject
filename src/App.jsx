import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  const navbarLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Courses', link: '#courses' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
  ];

  const sectionTwoBoxes = [
    {
      title: "Learn From The Experts",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      logo: "public/img/profile-icon-png-919.png",
    },
    {
      title: "Book Library & Store",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      logo: "public/img/pngwing.com.png",
    },
    {
      title: "Best Course Online",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      logo: "public/img/book.png",
    },
    {
      title: "Best Industry Leaders",
      description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      logo: "public/img/internet.png",
    },
  ];

  const sectionThreeCourses = [
    {
      image: "public/img/1.jpg",
      title: "The Complete Android Developer Course",
      instructor: "Ms. Lara Croft",
      date: "July 21, 2018",
      price: "Free",
      rating: 4,
    },
    {
      image: "public/img/2.jpg",
      title: "Introduction to Data Science",
      instructor: "Mr. John Doe",
      date: "August 15, 2020",
      price: "Free",
      rating: 5,
    },
  ];

  const logoUrls = [
    "public/img/logo-1.png",
    "public/img/logo-2.png",
    "public/img/logo-3.png",
    "public/img/logo-4.png",
    "public/img/logo-5.png",
  ];

  return (
    <div id="home">
      <Navbar logo="public/img/foot-logo.png" links={navbarLinks} />
      <HeroSection
        backgroundImage="public/img/hero-bg.jpg"
        heading="Best online <br /> Learning system"
        subheading="Get started with online courses"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        buttonText="Read More"
      />

      {/* Section Two */}
      <section id="about" className="section-two">
        <div className="boxes-container">
          {sectionTwoBoxes.map((box, index) => (
            <div key={index} className="box">
              <img src={box.logo} alt="Profile Logo" className="profile-logo" />
              <h2>{box.title}</h2>
              <p>{box.description}</p>
              <button className="btn-read-more">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section Three */}
      <section id="courses" className="section-three">
        <div className="section-three-header">
          <h2>Featured Courses</h2>
          <button className="btn-view-all">View All</button>
        </div>
        <div className="featured-courses-container">
          {sectionThreeCourses.map((course, index) => (
            <div key={index} className="course-box">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-details">
                <div className="star-rating">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </div>
                <h3>{course.title}</h3>
                <p className="instructor">{course.instructor}</p>
                <p className="course-date">{course.date}</p>
                <p className="price">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Four */}
      <section id="blog" className="section-four">
        <div className="section-four-content">
          <div className="section-four-text">
            <h2>About Ezuca</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium.
            </p>
            <div className="metrics-container">
              <div className="metric-box">
                <h3><span className="big-number">50</span><span className="small-text">M+</span></h3>
                <h4>STUDENTS LEARNING</h4>
              </div>
              <div className="metric-box">
                <h3><span className="big-number">30</span><span className="small-text">K+</span></h3>
                <h4>ACTIVE COURSES</h4>
              </div>
              <div className="metric-box">
                <h3><span className="big-number">340</span><span className="small-text">M+</span></h3>
                <h4>INSTRUCTORS ONLINE</h4>
              </div>
              <div className="metric-box">
                <h3><span className="big-number">20</span><span className="small-text">+</span></h3>
                <h4>Country Reached</h4>
              </div>
            </div>
          </div>
          <div className="section-four-image">
            <img src="public/img/video-screenshot.png" alt="About Ezuca" className="main-image" />
            <img src="public/img/video-icon.png" alt="Play Button" className="play-button" />
          </div>
        </div>
      </section>

      {/* Section Five - Logo Section */}
      <section id="contact" className="section-five">
        <div className="logo-container">
          {logoUrls.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <img src="public/img/foot-logo.png" alt="Footer Logo" className="footer-logo" />
            <p>Excepteur sint occaecat cupidatat non proident...</p>
            <p>Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: info.deertcreative@gmail.com</p>
            <p>Phone: (+88) 111 555 666</p>
            <p>Address: 40 Baria Street 133/2 NewYork City, US</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="public/img/facebook.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="public/img/instagram-icon.png" alt="Instagram" />
              </a>
              <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                <img src="public/img/google-plus-icon.png" alt="Google+" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="public/img/twitter-icon.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
