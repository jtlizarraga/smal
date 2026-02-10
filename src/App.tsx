import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { AuthProvider } from './context/AuthContext';

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<div className="p-8 text-center text-red-400">Página no encontrada</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider >
  );
}


export default App;
