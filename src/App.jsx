import { useState } from 'react';
import CustomNavbar from './components/Navbar';
import TechProducts from './components/TechProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    if (product.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + amount;
        if (newQuantity < 1) return item; // Prevent going below 1
        return {...item, quantity: newQuantity};
      }
      return item;
    }));
  };

  return (
    <div className="App">
      <CustomNavbar 
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <div className="container mt-4">
        <div className="welcome-banner text-center mb-5 py-4">
          <h1>Welcome to <span className="kessouri-blue">Kessouri</span><span className="tech-white">Tech</span></h1>
          <p className="lead">Your destination for the latest tech products</p>
        </div>
        <TechProducts addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;