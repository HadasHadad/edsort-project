
import './App.css';
import Accordion from './components/Accordion';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import RatingDisplay from './components/RatingDisplay';
import TeacherRating from './components/TeacherRating';
import TeacherAbout from './components/TeacherAbout';
import AboutCourse from './components/AboutCourse';
import CourseMain from './components/CourseMain';






function App() {
  return (
    <>
   <Navbar/>
   <CourseMain/>
   <Accordion title={"פירוט דירוג"} content={<RatingDisplay/>}/>
   <Accordion title={"פרטים יבשים על הקורס"} content={<AboutCourse/>}/>
   <Accordion title={"הכירו את המרצה"} content={<TeacherAbout/>}/>
   <Accordion title={"סילבוס"} content={"אין עדיין"}/>
   <Accordion title={"ביקורות"} content={<TeacherRating/>}/>

 
 
 
   <ContactForm/>
    </>
  );
}

export default App;
