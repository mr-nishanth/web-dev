import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = () => {
  return (
    <ToastContainer className="p-3" position={position}>
      <Toast>
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default ToastMessage;
