import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: "Acer Aspire 3",
    description: "17.3-Inch Full HD Laptop (Intel Core i3-N305, 8GB RAM, 512GB SSD)",
    price: 499,
    rating: 4.5,
    image: "/images/1.jpg",
    category: "Laptops",
    stock: 12,
    specs: ["17.3\" FHD Display", "Intel Core i3", "8GB RAM", "512GB SSD"]
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro",
    description: "Titanium design with advanced camera system",
    price: 999,
    rating: 4.8,
    image: "/images/2.jpg",
    category: "Phones",
    stock: 8,
    specs: ["6.1\" Super Retina XDR", "A17 Pro Chip", "48MP Camera"]
  },
  {
    id: 3,
    name: "ASUS Gaming Monitor",
    description: "23.8 FHD (1920 x 1080), IPS, 120Hz (OC), SmoothMotion, 1ms (MPRT)",
    price: 299,
    rating: 4.7,
    image: "/images/3.jpg",
    category: "Monitors",
    stock: 5,
    specs: ["23.8\" FHD", "120Hz Refresh", "1ms Response"]
  },
  {
    id: 4,
    name: "HUAWEI FreeBuds SE 2",
    description: "Wireless Bluetooth Earbuds, Up to 40 Hours of Battery Life",
    price: 79,
    rating: 4.3,
    image: "/images/4.jpg",
    category: "Audio",
    stock: 20,
    specs: ["Bluetooth 5.2", "40hrs Battery", "IP54 Waterproof"]
  },
  {
    id: 5,
    name: "Gaming PC (RTX 3080)",
    description: "RTX 3080, Ryzen 9 5900X, 32GB DDR4, 1TB SSD",
    price: 2499,
    rating: 4.9,
    image: "/images/5.jpg",
    category: "Desktops",
    stock: 3,
    specs: ["RTX 3080", "Ryzen 9", "32GB RAM", "1TB SSD"]
  },
  {
    id: 6,
    name: "Lenovo IdeaPad Slim 3",
    description: "14 Inch FHD Laptop (MediaTek Kompanio 520, 4GB RAM, 64GB)",
    price: 299,
    rating: 4.2,
    image: "/images/6.jpg",
    category: "Laptops",
    stock: 7,
    specs: ["14\" FHD", "MediaTek CPU", "4GB RAM"]
  },
  {
    id: 7,
    name: "Google Pixel Watch 3",
    description: "Champagne Gold Case — Sage Green Strap — Wi-FI",
    price: 349,
    rating: 4.4,
    image: "/images/7.jpg",
    category: "Wearables",
    stock: 15,
    specs: ["Wear OS", "24hr Battery", "Fitbit Integration"]
  },
  {
    id: 8,
    name: "SanDisk Extreme Portable SSD",
    description: "1TB External Solid State Drive (Portable NVMe SSD)",
    price: 129,
    rating: 4.6,
    image: "/images/8.jpg",
    category: "Storage",
    stock: 25,
    specs: ["1TB NVMe", "1050MB/s", "IP65 Waterproof"]
  },
  {
    id: 9,
    name: "ASUS ROG Swift Monitor",
    description: "Full HD (1920x1080), 180Hz, Fast IPS, Extreme Low Motion Blur™",
    price: 399,
    rating: 4.7,
    image: "/images/9.jpg",
    category: "Monitors",
    stock: 6,
    specs: ["27\" FHD", "180Hz", "1ms Response"]
  }
];

export default function TechProducts({ addToCart }) {
  return (
    <div>
      <h2 className="mb-4">Our Products</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="h-100 product-card">
              <div className="product-image-container">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  className="product-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://via.placeholder.com/300?text=${product.name.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted small">{product.description}</Card.Text>
                <div className="mb-2">
                  <Badge bg="info" className="me-1">{product.category}</Badge>
                  <Badge bg="warning" text="dark">
                    {product.rating} ★
                  </Badge>
                </div>
                <ul className="small mb-3">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <h5 className="text-primary">${product.price.toFixed(2)}</h5>
                  <small className={`stock-status ${product.stock < 5 ? 'text-warning' : 'text-muted'}`}>
                    {product.stock < 5 ? `Only ${product.stock} left!` : `In stock: ${product.stock}`}
                  </small>
                  <Button 
                    variant="primary" 
                    className="w-100 mt-2"
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}