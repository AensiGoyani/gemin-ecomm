import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import  AboutUsPage from './pages/AboutUsPage';
import WishlistPage from './pages/WishlistPage';
import ProtectedRoute from './components/ProtectedRoute';
import Alert from './components/Alert';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Policy from './pages/Policy';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route element={<ProtectedRoute />}>
             <Route path="/wishlist" element={<WishlistPage />} /> 
          </Route>
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/terms" element={<Terms />} /> 
          <Route path="/policy" element={<Policy />} /> 
        </Routes>
      </main>
      <Alert />
      <Footer />
    </div>
  );
}

export default App;
