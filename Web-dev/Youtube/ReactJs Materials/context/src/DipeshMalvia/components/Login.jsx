import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="g-btn">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    </>
  );
};
export default Login;
