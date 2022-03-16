import React from "react";
import { Modal } from "react-bootstrap";
import ApplyForm from "../Form/ApplyForm";

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
        <ApplyForm />
      </Modal.Body>
    </Modal>
  );
}
function ApplyNow() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="p-0">
      <button
        onClick={() => setModalShow(true)}
        className="p-2 px-4 fw-bold "
        style={{
          background: "#E63732",
          color: "#fff",
          border: "none",
        }}
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

export default ApplyNow;
