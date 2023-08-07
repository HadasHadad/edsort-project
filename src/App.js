
import './App.css';
import Accordion from './components/Accordion';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import TeacherAbout from './components/TeacherAbout';
import AboutCourse from './components/AboutCourse'
// import AboutCourse from './components/AboutCourse';
// import StarRating from './components/StarRating';
// import StarsShow from './components/StarsShow';

function App() {
  return (
    <>
   <Navbar/>
   <Accordion/>
 <TeacherAbout/>
 <AboutCourse/>
   <ContactForm/>
    </>
  );
}

export default App;
