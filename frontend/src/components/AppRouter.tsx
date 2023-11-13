// src/components/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Initial from './Initial';
import Home from './Home';
import WorkoutsUI from './workoutsUi/WorkoutsUI';
import About from './About';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/dateme" element={<Home />} />
        <Route path="/workouts" element={<WorkoutsUI />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
