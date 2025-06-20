import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Discover from './pages/Discover.jsx';
import Pricing from './pages/Pricing.jsx';
import Privacy from './pages/Privacy.jsx';
import Support from './pages/Support.jsx';
import Header from './components/ui/Header.jsx';
import Footer from './components/ui/Footer.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AppPage from './pages/AppPage.jsx';
import HomeSection from "./app/HomeSection";
import ChallengesSection from "./app/ChallengesSection";
import LeaderboardSection from "./app/LeaderboardSection";
import ProfileSection from "./app/ProfileSection";
import SettingsSection from "./app/SettingsSection";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const hideNavigationBarAndFooter = location.pathname.startsWith("/app");
  return (
    <>
      {!hideNavigationBarAndFooter && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<AppPage />}>
            <Route index element={<HomeSection />} />
            <Route path="home" element={<HomeSection />} />
            <Route path="challenges" element={<ChallengesSection />} />
            <Route path="leaderboard" element={<LeaderboardSection />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>
        </Routes>
      </main>
      {!hideNavigationBarAndFooter && <Footer />}
    </>
  );
}
export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}