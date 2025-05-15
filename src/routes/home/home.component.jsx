import { Outlet } from 'react-router-dom';
import HomePage from '../../components/home-page/home-page.component';
import Services from '../../components/services/services.component';

const Home = ()=> {
    return (
        <div>
        <Outlet />
        <HomePage />      
        <Services /> 
        </div>
    ) 
  };
  

  export default Home;