import { ListGroup, Badge, Button, Alert } from 'react-bootstrap'

export default function AddToCart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <Alert variant="info">Your cart is empty</Alert>
      ) : (
        <>
          <ListGroup>
            {cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.name}</div>
                  <small className="text-muted">{item.category}</small>
                  <div>
                    <small>${item.price.toFixed(2)} × {item.quantity}</small>
                  </div>
                </div>
                <div>
                  <Badge bg="primary" className="me-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Badge>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3 border-top pt-3">
            <h4 className="d-flex justify-content-between">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </h4>
            <Button variant="success" className="w-100 mt-2">Proceed to Checkout</Button>
            <Button variant="outline-secondary" className="w-100 mt-2">Continue Shopping</Button>
          </div>
        </>
      )}
    </div>
  )
}