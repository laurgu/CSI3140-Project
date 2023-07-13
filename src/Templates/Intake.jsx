import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/General.css";

function Intake() {
  return (
    <div className="intake-form">
      <h1>CLIENT INTAKE FORM</h1>
      <br />
      <form>
        <div className="row">
          <div className="col-2">
            <p>Date:</p>
          </div>
          <div className="col-4">
            <input id="date" type="text"></input>
          </div>

          <div className="col-2">
            <p>Tending Associate:</p>
          </div>
          <div className="col-4">
            <input id="associate" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Client Name:</p>
          </div>
          <div className="col-4">
            <input id="client-name" type="text"></input>
          </div>

          <div className="col-2">
            <p>Client Company:</p>
          </div>
          <div className="col-4">
            <input id="client-company" type="text"></input>
          </div>
        </div>

        <p>Project/Request Overview:</p>
        <textarea id="project-overview" style={{ width: "50%" }}></textarea>
        <div>
          <br></br>
        </div>

        <h2>CLIENT ONBOARD INFOMRATION</h2>
        <div>
          <br></br>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <br></br>
            <h4>Home Address</h4>
            <br></br>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Home Phone:</p>
          </div>
          <div className="col-4">
            <input id="home-phone" type="number"></input>
          </div>

          <div className="col-2">
            <p>Street Address:</p>
          </div>
          <div className="col-4">
            <input id="home-street-address" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Work Phone:</p>
          </div>
          <div className="col-4">
            <input id="work-phone" type="number"></input>
          </div>

          <div className="col-2">
            <p>City:</p>
          </div>
          <div className="col-4">
            <input id="home-city" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Other Phone:</p>
          </div>
          <div className="col-4">
            <input id="other-phone" type="number"></input>
          </div>

          <div className="col-2">
            <p>Province:</p>
          </div>
          <div className="col-4">
            <input id="home-province" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Country:</p>
          </div>
          <div className="col-4">
            <input id="home-country" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Postal Code:</p>
          </div>
          <div className="col-4">
            <input id="home-postal-code" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <br></br>
            <br></br>
            <h4>Work Address</h4>
            <br></br>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Position/Business Title:</p>
          </div>
          <div className="col-4">
            <input id="position" type="number"></input>
          </div>

          <div className="col-2">
            <p>Street Address:</p>
          </div>
          <div className="col-4">
            <input id="work-street-address" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Supervisor:</p>
          </div>
          <div className="col-4">
            <input id="supervisor" type="number"></input>
          </div>

          <div className="col-2">
            <p>City:</p>
          </div>
          <div className="col-4">
            <input id="work-city" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Department:</p>
          </div>
          <div className="col-4">
            <input id="department" type="number"></input>
          </div>

          <div className="col-2">
            <p>Province:</p>
          </div>
          <div className="col-4">
            <input id="work-province" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Country:</p>
          </div>
          <div className="col-4">
            <input id="work-country" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Postal Code:</p>
          </div>
          <div className="col-4">
            <input id="work-postal-code" type="text"></input>
          </div>
        </div>
        <br></br>
        <h4>Date of Birth</h4>

        <div className="row">
          <div className="col-1">
            <p>Month:</p>
          </div>
          <div className="col-1">
            <select id="dob-month">
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
            <p>Day:</p>
          </div>
          <div className="col-1">
            <input id="dob-day" type="number" style={{ width: "100%" }}></input>
          </div>
          <div className="col-1">
            <p>Year:</p>
          </div>
          <div className="col-1">
            <input id="dob-day" type="number" style={{ width: "100%" }}></input>
          </div>
          <div className="col-2">
            <p>Gender:</p>
          </div>
          <div className="col-4">
            <input id="gender" type="text"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Previously a Cusomter:</p>
          </div>
          <div className="col-4">
            <label htmlFor="previous-customer" style={{ marginRight: "1vw" }}>
              Yes
            </label>
            <input id="previous-customer" type="checkbox"></input>
          </div>
          <div className="col-2">
            <p>Referred By:</p>
          </div>
          <div className="col-4">
            <input id="referred" type="text"></input>
          </div>
        </div>
        <br></br>

        <h4>Describe Previous Work/Add Comments</h4>
        <textarea id="comments" style={{ width: "50%" }}></textarea>
        <br></br>
        <br></br>

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Intake;
