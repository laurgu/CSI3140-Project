import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/General.css";
import { useNavigate } from "react-router-dom";
import { putData } from "../api/documents";

function Intake() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [client, setClient] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [project, setProject] = useState("");
  const [homePhone, setHomePhone] = useState(null);
  const [workPhone, setWorkPhone] = useState(null);
  const [otherPhone, setOtherPhone] = useState(null);
  const [homeStreetAddress, setHomeStreetAddress] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [homeProvince, setHomeProvince] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [homePostalCode, setHomePostalCode] = useState("");
  const [workStreetAddress, setWorkStreetAddress] = useState("");
  const [position, setPosition] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [department, setDepartment] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workProvince, setWorkProvince] = useState("");
  const [workCountry, setWorkCountry] = useState("");
  const [workPostalCode, setWorkPostalCode] = useState("");
  const [dobMonth, setDobMonth] = useState(null);
  const [dobDay, setDobDay] = useState(null);
  const [dobYear, setDobYear] = useState(null);
  const [gender, setGender] = useState("");
  const [previouslyCustomer, setPreviouslyCustomer] = useState(false);
  const [referredBy, setReferredBy] = useState("");
  const [comments, setComments] = useState("");

  const handleHomeButton = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = `Intake Form: ${client}`;
    const documentType = "Intake";
    const formData = {
      title,
      documentType,
      date,
      author,
      client,
      clientCompany,
      project,
      homePhone,
      workPhone,
      otherPhone,
      homeStreetAddress,
      homeCity,
      homeProvince,
      homeCountry,
      homePostalCode,
      workStreetAddress,
      workCity,
      workProvince,
      workCountry,
      workPostalCode,
      dobMonth,
      dobDay,
      dobYear,
      gender,
      position,
      supervisor,
      department,
      previouslyCustomer,
      referredBy,
      comments,
    };

    try {
      const response = await putData(formData);

      console.log("Form data saved successfully:", response);
      navigate("/");
    } catch (error) {
      console.error("Error saving form data:", error);
    }
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
      <h1>CLIENT INTAKE FORM</h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-2">
            <p>Date:</p>
          </div>
          <div className="col-4">
            <input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Tending Author:</p>
          </div>
          <div className="col-4">
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Client Name:</p>
          </div>
          <div className="col-4">
            <input
              id="client-name"
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Client Company:</p>
          </div>
          <div className="col-4">
            <input
              id="client-company"
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
            ></input>
          </div>
        </div>

        <p>Project/Request Overview:</p>
        <textarea
          id="project-overview"
          style={{ width: "50%" }}
          value={project}
          onChange={(e) => setProject(e.target.value)}
        ></textarea>
        <div></div>

        <br></br>
        <hr></hr>
        <br></br>

        <h2>CLIENT ONBOARD INFOMRATION</h2>
        <div>
          <br></br>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-5">
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
            <input
              id="home-phone"
              type="number"
              value={homePhone}
              onChange={(e) => setHomePhone(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Street Address:</p>
          </div>
          <div className="col-4">
            <input
              id="home-street-address"
              type="text"
              value={homeStreetAddress}
              onChange={(e) => setHomeStreetAddress(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Work Phone:</p>
          </div>
          <div className="col-4">
            <input
              id="work-phone"
              type="number"
              value={workPhone}
              onChange={(e) => setWorkPhone(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>City:</p>
          </div>
          <div className="col-4">
            <input
              id="home-city"
              type="text"
              value={homeCity}
              onChange={(e) => setHomeCity(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Other Phone:</p>
          </div>
          <div className="col-4">
            <input
              id="other-phone"
              type="number"
              value={otherPhone}
              onChange={(e) => setOtherPhone(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Province:</p>
          </div>
          <div className="col-4">
            <input
              id="home-province"
              type="text"
              value={homeProvince}
              onChange={(e) => setHomeProvince(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Country:</p>
          </div>
          <div className="col-4">
            <input
              id="home-country"
              type="text "
              value={homeCountry}
              onChange={(e) => setHomeCountry(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Postal Code:</p>
          </div>
          <div className="col-4">
            <input
              id="home-postal-code"
              type="text"
              value={homePostalCode}
              onChange={(e) => setHomePostalCode(e.target.value)}
            ></input>
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
            <input
              id="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Street Address:</p>
          </div>
          <div className="col-4">
            <input
              id="work-street-address"
              type="text"
              value={workStreetAddress}
              onChange={(e) => setWorkStreetAddress(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Supervisor:</p>
          </div>
          <div className="col-4">
            <input
              id="supervisor"
              type="text"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>City:</p>
          </div>
          <div className="col-4">
            <input
              id="work-city"
              type="text"
              value={workCity}
              onChange={(e) => setWorkCity(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <p>Department:</p>
          </div>
          <div className="col-4">
            <input
              id="department"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
          </div>

          <div className="col-2">
            <p>Province:</p>
          </div>
          <div className="col-4">
            <input
              id="work-province"
              type="text"
              value={workProvince}
              onChange={(e) => setWorkProvince(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Country:</p>
          </div>
          <div className="col-4">
            <input
              id="work-country"
              type="text"
              value={workCountry}
              onChange={(e) => setWorkCountry(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-2">
            <p>Postal Code:</p>
          </div>
          <div className="col-4">
            <input
              id="work-postal-code"
              type="text"
              value={workPostalCode}
              onChange={(e) => setWorkPostalCode(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>
        <h4>Date of Birth</h4>

        <div className="row">
          <div className="col-1">
            <p>Month:</p>
          </div>
          <div className="col-1">
            <select
              id="dob-month"
              value={dobMonth}
              onChange={(e) => setDobMonth(e.target.value)}
            >
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
            <input
              id="dob-day"
              type="number"
              style={{ width: "100%" }}
              value={dobDay}
              onChange={(e) => setDobDay(e.target.value)}
            ></input>
          </div>
          <div className="col-1">
            <p>Year:</p>
          </div>
          <div className="col-1">
            <input
              id="dob-year"
              type="number"
              value={dobYear}
              onChange={(e) => setDobYear(e.target.value)}
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-2">
            <p>Gender:</p>
          </div>
          <div className="col-4">
            <input
              id="gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
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
            <input
              id="previous-customer"
              type="checkbox"
              value={previouslyCustomer}
              onChange={(e) => setPreviouslyCustomer(e.target.value)}
            ></input>
          </div>
          <div className="col-2">
            <p>Referred By:</p>
          </div>
          <div className="col-4">
            <input
              id="referred"
              type="text"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>

        <h4>Describe Previous Work/Add Comments</h4>
        <textarea
          id="comments"
          style={{ width: "50%" }}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <br></br>
        <br></br>

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Intake;
