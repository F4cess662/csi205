import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Carts = ({ carts, setCarts }) => {
  return (
    <div className="mb-3 mt-3">
      <div className="d-flex flex-wrap gap-3 justify-content-start overflow-auto ms-5">
        {carts.map((cart) => {
          return (
            <Card key={cart.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body className="text-center">
                <Card.Title>{cart.title}</Card.Title>

                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) => c.id !== cart.id));
                  }}
                >
                  Remove From Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <h4>
          Item :{" "}
          <button type="button" className="btn btn-danger">
            {carts.length}&nbsp;items
          </button>{" "}
          Total Price :{" "}
          <button type="button" className="btn btn-success">
            $
            {carts
              .reduce((prev, cart) => {
                return prev + cart.price;
              }, 0)
              .toFixed(2)}
          </button>
        </h4>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-warning">
          Checkout&nbsp;<i class="bi bi-credit-card"></i>
        </button>
      </div>
    </div>
  );
};

export default Carts;
