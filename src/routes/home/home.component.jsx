import HomePage from '../../components/home-page/home-page.component';
import Services from '../../components/services/services.component';
import WorkShow from '../../components/workShowCase/workShowCase.component';
import Contact from '../../components/contact/contact.component';
import Testi from '../../components/tesimonial/testimonial.component';
import Footer from '../../components/footer/footer.component';



const Home = ()=> {
    return (
        <div>
        <HomePage />  
        <Services /> 
        <WorkShow />     
        <Testi />     
        <Contact />     
        <Footer />
        </div>
    ) 
  };
  

  export default Home;