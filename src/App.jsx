import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRoutes />

      <Footer />

      <ToastContainer
        position="bottom-right"
        theme="colored"
        toastClassName="!font-body !text-sm"
      />
    </BrowserRouter>
  );
}

export default App;