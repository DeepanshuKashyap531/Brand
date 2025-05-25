import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import AboutUs from './routes/aboutUs/aboutUs.component';
import Youtube from './routes/Youtube/youtube.component';
import LoginPage from './routes/login-page/login-page.component';
import SignupPage from './routes/signup-page/signup.component';

import ProtectedRoute from './protectedRoute';
import AdminPage from './routes/admin-page/adminPage.component';

const App = () => {
return(
 <Routes>
  <Route path='/' element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path='signup'  element={<SignupPage />} />
  </Route>
   <Route path='about' element={<AboutUs />} />
   <Route path='youtube' element={<Youtube />} />
   <Route path="login" element={<LoginPage />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
 </Routes>
  );
}
export default App;