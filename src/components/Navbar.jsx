import { useState } from 'react';
import { Navbar, Nav, Badge, Container, Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

export default function CustomNavbar({ cartCount, cart, removeFromCart, updateQuantity }) {
  const [showCart, setShowCart] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleIncrement = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecrement = (productId) => {
    updateQuantity(productId, -1);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">
            <span className="brand-name">
              <span className="kessouri-blue">Kessouri</span>
              <span className="tech-white">Tech</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link 
                onClick={() => setShowCart(true)} 
                className="d-flex align-items-center cart-link"
              >
                <FaShoppingCart className="me-1" />
                {cartCount > 0 && (
                  <Badge bg="danger" className="ms-1">
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="kessouri-blue">Kessouri</span>
            <span className="tech-white">Tech</span> Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <div className="text-center py-4">
              <p>Your cart is empty</p>
              <Button variant="primary" onClick={() => setShowCart(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <ListGroup className="mb-3">
                {cart.map(item => (
                  <ListGroup.Item key={item.id} className="cart-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="cart-item-info">
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted">${item.price.toFixed(2)} each</small>
                      </div>
                      <div className="cart-item-quantity">
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleDecrement(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleIncrement(item.id)}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                      <div className="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                        <Button 
                          variant="outline-danger" 
                          size="sm" 
                          className="ms-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="cart-summary border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <span>FREE</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button variant="success" className="w-100 mt-3 py-2">
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline-secondary" 
                  className="w-100 mt-2"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}