import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import AgentDetail from './pages/AgentDetail';
import MeetOurAgents from './pages/MeetOurAgents';
import BrooklynExplorer from './pages/BrooklynExplorer';
import MiamiExplorer from './pages/MiamiExplorer';
import AlaskaExplorer from './pages/AlaskaExplorer';
import LosAngelesExplorer from './pages/LosAngelesExplorer';
import CaliforniaExplorer from './pages/CaliforniaExplorer';
import TexasExplorer from './pages/TexasExplorer';
import PropertyDetail from './pages/PropertyDetail';
import PropertyListings from './pages/PropertyListings';
import PropertyListingsGrid from './pages/PropertyListingsGrid';
import RealEstateServices from './pages/RealEstateServices';
import SpecializedServices from './pages/SpecializedServices';
import UsRegions from './pages/UsRegions';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents/:id" element={<AgentDetail />} />
          <Route path="/agents" element={<MeetOurAgents />} />
          <Route path="/neighborhoods/brooklyn" element={<BrooklynExplorer />} />
          <Route path="/neighborhoods/miami" element={<MiamiExplorer />} />
          <Route path="/neighborhoods/alaska" element={<AlaskaExplorer />} />
          <Route path="/neighborhoods/los-angeles" element={<LosAngelesExplorer />} />
          <Route path="/neighborhoods/california" element={<CaliforniaExplorer />} />
          <Route path="/neighborhoods/texas" element={<TexasExplorer />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/properties" element={<PropertyListings />} />
          <Route path="/properties-grid" element={<PropertyListingsGrid />} />
          <Route path="/services" element={<RealEstateServices />} />
          <Route path="/specialized-services" element={<SpecializedServices />} />
          <Route path="/regions" element={<UsRegions />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
