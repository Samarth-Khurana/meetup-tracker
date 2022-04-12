import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AllMeetupPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';


function App() {
  return (
<Router>
        <MainNavigation />
    <Layout>
        
            <Routes>
              <Route path="/" element={<AllMeetupPage />} />
              <Route path="/new-meetup" element={<NewMeetupPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
            </Layout>
        </Router>
      
      
    
    
  );
}

export default App;
