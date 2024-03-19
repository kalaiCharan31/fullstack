import React from 'react'
import Navbar from '../Components/Navbar';
import '../assets/css/Home.css';
import logo from '../assets/images/logo.png'; 
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
    <Navbar />
    <div className='header'>
        <img className='logo' src={logo} alt="Logo" />
       
      </div>
      <img className='pano-img' src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Course" />
    <div className='container'>
      <div className='header'>
      <img className='kalai' src={logo} alt="Logo" />
      
        <div className='title'>Sample Courses</div>
      </div>
      <div className='course-list'>
        <div className='course'>
          <img src="https://images.pexels.com/photos/161366/book-book-pages-book-cover-font-161366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="AI Course"  />
          <div className='course-title'>General English Course</div>
        </div>
        <div className='course'>
          <img src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ML Course" />
          <div className='course-title'>IELTS Preparation Course</div>
        </div>
        <div className='course'>
          <img src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Robotics Course" />
          <div className='course-title'>Business English Course</div>
        </div>
        <div className='course'>
          <img src="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tamil Course" />
          <div className='course-title'>Academic English Course</div>
        </div>
        <div className='course'>
          <img src="https://images.pexels.com/photos/16137815/pexels-photo-16137815/free-photo-of-golden-crab-shape-key-ring-on-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="English Course" />
          <div className='course-title'>Conversation Classe</div>
        </div>
        <div className='course'>
          <img src="https://images.pexels.com/photos/3945529/pexels-photo-3945529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="English Course" />
          <div className='course-title'>Conversation Classe</div>
        </div>
      </div>
      
    </div>
    <Footer />
  </div>
);
};

export default Home;