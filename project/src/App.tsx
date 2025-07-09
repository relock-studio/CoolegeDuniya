import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';

// Page imports
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Universities from './pages/Universities';
import Courses from './pages/Courses';
import Exams from './pages/Exams';
import StudyAbroad from './pages/StudyAbroad';
import Scholarships from './pages/Scholarships';
import Reviews from './pages/Reviews';
import News from './pages/News';
import CollegePredictor from './pages/CollegePredictor';
import Login from './pages/Login';
import WriteReview from './pages/WriteReview';
import About from './pages/About';

// Category pages
import Engineering from './pages/categories/Engineering';
import MBA from './pages/categories/MBA';
import Medical from './pages/categories/Medical';
import Science from './pages/categories/Science';
import Commerce from './pages/categories/Commerce';
import Arts from './pages/categories/Arts';
import Law from './pages/categories/Law';
import Agriculture from './pages/categories/Agriculture';
import Design from './pages/categories/Design';
import Education from './pages/categories/Education';

// Location pages
import BangaloreColleges from './pages/locations/BangaloreColleges';
import DelhiColleges from './pages/locations/DelhiColleges';

// Individual college page
import CollegeDetails from './pages/CollegeDetails';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colleges" element={<Colleges />} />
          <Route path="college/:id" element={<CollegeDetails />} />
          <Route path="universities" element={<Universities />} />
          <Route path="courses" element={<Courses />} />
          <Route path="exams" element={<Exams />} />
          <Route path="study-abroad" element={<StudyAbroad />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="news" element={<News />} />
          <Route path="college-predictor" element={<CollegePredictor />} />
          <Route path="login" element={<Login />} />
          <Route path="write-review" element={<WriteReview />} />
          <Route path="about" element={<About />} />
          
          {/* Category pages */}
          <Route path="engineering" element={<Engineering />} />
          <Route path="mba" element={<MBA />} />
          <Route path="medical" element={<Medical />} />
          <Route path="science" element={<Science />} />
          <Route path="commerce" element={<Commerce />} />
          <Route path="arts" element={<Arts />} />
          <Route path="law" element={<Law />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="design" element={<Design />} />
          <Route path="education" element={<Education />} />
          
          {/* Location pages */}
          <Route path="bangalore-colleges" element={<BangaloreColleges />} />
          <Route path="delhi-colleges" element={<DelhiColleges />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;