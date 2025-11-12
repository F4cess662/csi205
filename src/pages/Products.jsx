import {Button,Card} from "react-bootstrap";

const Products = ({ products, carts, setCarts }) => {
  return (
    <div className="mt-3 mb-3">
      <div
        className="d-flex flex-wrap gap-3 justify-content-start overflow-auto ms-5"
        style={{ height: "560px" }}
      >
        {products.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.thumbnailUrl} />
            <Card.Body className="text-center">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="text-center">
                ${product.price.toFixed(2)}
              </Card.Text>
              {carts.find((cart) => cart.id === product.id) ? (
                <span className="badge bg-danger">Added to Carts</span>
              ) : (
                <Button
                  variant="outline-primary"
                  onClick={() => setCarts([...carts, product])}
                >
                  Add to carts
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
