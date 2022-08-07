import Home from './components/pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FilterCategory from 'components/pages/FilterCategory';
import DetailMeal from 'components/pages/DetailMeal';
import UnderDevelopment from 'components/pages/UnderDevelopment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/category/:categoryName" element={<FilterCategory />} />
      <Route path="/meal/:mealId" element={<DetailMeal />} />
      <Route path="/food" element={<UnderDevelopment />} />
      <Route path="/ingredients" element={<UnderDevelopment />} />
      <Route path="/local-culinary" element={<UnderDevelopment />} />
    </Routes>
  );
}

export default App;
