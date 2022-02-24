import React from "react";
import { Modal, Button } from "react-bootstrap";
import FromTwo from "./FromTwo";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FromTwo />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
function CalltoAction() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="py-sm-0 py-md-5">
      <button
        onClick={() => setModalShow(true)}
        className="p-3  me-2 m-3 fw-bold"
        style={{ background: "#E63732", color: "#fff", border: "none" }}
      >
        Apply now
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default CalltoAction;
