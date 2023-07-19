import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/General.css";

function Order() {
  const navigate = useNavigate();

  const handleHomeButton = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="form">
      <div style={{ position: "relative" }}>
        <button
          onClick={handleHomeButton}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            fontSize: "2vw",
          }}
        >
          Home
        </button>
      </div>
      <h1>ORDER FORM</h1>
      <br></br>
      <form>
        <div className="row">
          <div className="col-3">
            <h4>Order Number:</h4>
          </div>
          <div className="col-9">
            <h4>Date:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <input
              id="order-no"
              type="number"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-1">
            <p>Day:</p>
          </div>
          <div className="col-2">
            <input
              id="day"
              type="number"
              style={{ width: "100%", display: "inline" }}
            ></input>
          </div>
          <div className="col-1">
            <p>Month:</p>
          </div>
          <div className="col-2">
            <select id="month" style={{ marginLeft: "1vw" }}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="col-1">
            <p>Year:</p>
          </div>
          <div className="col-2">
            <input id="year" type="number" style={{ width: "100%" }}></input>
          </div>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-2">
            <h4>Home Phone:</h4>
          </div>
          <div className="col-4">
            <input id="home-phone" type="number"></input>
          </div>

          <div className="col-2">
            <h4>Street Address:</h4>
          </div>
          <div className="col-4">
            <input id="street-address" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <h4>Work Phone:</h4>
          </div>
          <div className="col-4">
            <input id="work-phone" type="number"></input>
          </div>

          <div className="col-2">
            <h4>City:</h4>
          </div>
          <div className="col-4">
            <input id="city" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <h4>Email:</h4>
          </div>
          <div className="col-4">
            <input id="email" type="email"></input>
          </div>

          <div className="col-2">
            <h4>Province:</h4>
          </div>
          <div className="col-4">
            <input id="province" type="text"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <h4>Country:</h4>
          </div>
          <div className="col-4">
            <input id="country" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <h4>Postal Code:</h4>
          </div>
          <div className="col-4">
            <input id="postal-code" type="text"></input>
          </div>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-6">
            <h4>Description</h4>
          </div>
          <div className="col-2">
            <h4>Quantity</h4>
          </div>
          <div className="col-2">
            <h4>Unit Price</h4>
          </div>
          <div className="col-2">
            <h4>Cost</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              id="desc-product1"
              type="text"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="desc-product2"
              type="text"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="desc-product3"
              type="text"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="desc-product4"
              type="text"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="desc-product5"
              type="text"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
          </div>
          <div className="col-2">
            <input
              id="qty-product1"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="qty-product2"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="qty-product3"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="qty-product4"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="qty-product5"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
          </div>
          <div className="col-2">
            <input
              id="unit-product1"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="unit-product2"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="unit-product3"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="unit-product4"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="unit-product5"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
          </div>
          <div className="col-2">
            <input
              id="cost-product1"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="cost-product2"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="cost-product3"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="cost-product4"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="cost-product5"
              type="number"
              style={{ width: "100%" }}
            ></input>
          </div>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <div className="row">
          <div className="col-6">
            <h4>Notes:</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <textarea
              id="notes"
              style={{ width: "100%", height: "10vw" }}
            ></textarea>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <h4 style={{ marginBottom: "1vw" }}>Subtotal:</h4>
            <h4 style={{ marginBottom: "1vw" }}>Tax:</h4>
            <h4 style={{ marginBottom: "1vw" }}>Deposit:</h4>
            <h4 style={{ marginBottom: "1vw" }}>Total:</h4>
          </div>
          <div className="col-3">
            <input
              id="subtotal"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="tax"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input
              id="deposit"
              type="number"
              style={{ width: "100%", marginBottom: "1vw" }}
            ></input>
            <input id="total" type="number" style={{ width: "100%" }}></input>
          </div>
        </div>

        <h4 style={{ dispaly: "inline" }}>Form of Payment: </h4>
        <div style={{ dispaly: "inline" }}>
          <label style={{ marginRight: "2vw" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              style={{ marginRight: "0.2vw" }}
            />
            Cash
          </label>

          <label style={{ marginRight: "2vw" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="check"
              style={{ marginRight: "0.2vw" }}
            />
            Check
          </label>

          <label style={{ marginRight: "2vw" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              style={{ marginRight: "0.2vw" }}
            />
            Card
          </label>
        </div>
        <br></br>
        <input type="submit" value="SAVE"></input>
      </form>
    </div>
  );
}
export default Order;
