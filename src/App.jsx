import { Route, Routes } from 'react-router-dom';
import Home_01 from './pages/home/Home_01';
import About from './pages/common/About';
import Contact from './pages/common/Contact';
import Error_404 from './pages/common/Error_404';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Projects from './pages/common/Projects';

function App() {
  // Init JOS Animation
  useJOSAnimation();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home_01 />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='projects' element={<Projects />} />
          <Route path='*' element={<Error_404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
