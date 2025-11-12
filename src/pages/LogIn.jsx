import { useRef } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { verifyUser } from "../data/users";

const Login = ({ setToken, setRole }) => {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Card className="p-4 shadow-lg rounded-3" style={{ width: "350px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4 text-success">
            Login
          </Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="text-muted">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="user"
                ref={userRef}
                className="text-center"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-muted">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="pass"
                ref={passRef}
                className="text-center"
                required
              />
            </Form.Group>

            <Button
              variant="success"
              className="w-100 py-2 mt-3"
              onClick={() => {
                const user = userRef.current.value.trim();
                const pass = passRef.current.value.trim();
                userRef.current.value = "";
                passRef.current.value = "";

                const userInfo = verifyUser(user, pass);
                if (!userInfo) {
                  alert("Wrong username or password");
                  userRef.current.focus();
                } else {
                  setToken(userInfo.token);
                  setRole(userInfo.role);
                }
              }}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
