import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import AboutUs from './routes/aboutUs/aboutUs.component';
import Youtube from './routes/Youtube/youtube.component';


const App = () => {
return(
 <Routes>
  <Route path='/' element={<Navigation />}>
    <Route index element={<Home />} />
  </Route>
   <Route path='/about' element={<AboutUs />} />
   <Route path='/youtube' element={<Youtube />} />
 </Routes>
  );
}
export default App;