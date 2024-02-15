import Navbar from './components/Navbar';
import Homes from './pages/Homes';
import Lots from './pages/Lots';
import Landing from './pages/Landing';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/lots" element={<Lots />} />
      </Routes>
    </div>
  );
}
