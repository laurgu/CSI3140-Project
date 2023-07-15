import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formType = document.getElementById("formType").value;
    if (formType === "intake") {
      navigate("/intake");
    } else if (formType === "order") {
      navigate("/order");
    }
  };
  return (
    <div style={{ margin: "2vw 2vw 2vw 2vw" }}>
      <h1>HOME</h1>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h4>Create New Form</h4>

          <form onSubmit={handleFormSubmit}>
            <select id="formType">
              <option value="" disabled selected hidden>
                ---
              </option>
              <option value="intake">Intake</option>
              <option value="order">Order</option>
            </select>
            <input
              type="submit"
              value="create"
              style={{ marginLeft: "1vw" }}
            ></input>
          </form>
        </div>
        <div className="col-6">
          <h4>Past Forms</h4>
        </div>
      </div>
    </div>
  );
}
export default Home;
