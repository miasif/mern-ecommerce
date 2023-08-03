import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Loader;
