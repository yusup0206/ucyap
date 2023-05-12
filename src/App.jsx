import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/home'} />} />
        <Route path={'/home'} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
