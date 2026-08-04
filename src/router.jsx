import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;