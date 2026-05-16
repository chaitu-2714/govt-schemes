import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchemesPage from './pages/SchemesPage';
import EligibilityChecker from './pages/EligibilityChecker';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes/student" element={<SchemesPage category="Student" />} />
            <Route path="/schemes/women" element={<SchemesPage category="Women" />} />
            <Route path="/schemes/senior-citizen" element={<SchemesPage category="Senior Citizen" />} />
            <Route path="/schemes/farmer" element={<SchemesPage category="Farmer" />} />
            <Route path="/schemes/health-welfare" element={<SchemesPage category="Health & Welfare" />} />
            <Route path="/schemes/employment-skill" element={<SchemesPage category="Employment & Skill Development" />} />
            <Route path="/schemes/financial-banking" element={<SchemesPage category="Financial & Banking" />} />
            <Route path="/schemes/housing" element={<SchemesPage category="Housing" />} />
            <Route path="/schemes/insurance-pension" element={<SchemesPage category="Insurance & Pension" />} />
            <Route path="/schemes/child-welfare" element={<SchemesPage category="Child Welfare" />} />
            <Route path="/schemes/disability" element={<SchemesPage category="Disability Support" />} />
            <Route path="/eligibility" element={<EligibilityChecker />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
