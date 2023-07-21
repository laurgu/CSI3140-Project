import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/General.css";
import {fetchData, putData} from "../api/documents";

function Order() {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const today = new Date();

    const [day, setDay] = useState(today.getDate());
    const [client, setClient] = useState("");
    const [author, setAuthor] = useState("");
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year, setYear] = useState(today.getFullYear());
    const [homePhone, setHomePhone] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [descProduct1, setDescProduct1] = useState("");
    const [descProduct2, setDescProduct2] = useState("");
    const [descProduct3, setDescProduct3] = useState("");
    const [descProduct4, setDescProduct4] = useState("");
    const [descProduct5, setDescProduct5] = useState("");
    const [qtyProduct1, setQtyProduct1] = useState("");
    const [qtyProduct2, setQtyProduct2] = useState("");
    const [qtyProduct3, setQtyProduct3] = useState("");
    const [qtyProduct4, setQtyProduct4] = useState("");
    const [qtyProduct5, setQtyProduct5] = useState("");
    const [unitProduct1, setUnitProduct1] = useState("");
    const [unitProduct2, setUnitProduct2] = useState("");
    const [unitProduct3, setUnitProduct3] = useState("");
    const [unitProduct4, setUnitProduct4] = useState("");
    const [unitProduct5, setUnitProduct5] = useState("");
    const [costProduct1, setCostProduct1] = useState("");
    const [costProduct2, setCostProduct2] = useState("");
    const [costProduct3, setCostProduct3] = useState("");
    const [costProduct4, setCostProduct4] = useState("");
    const [costProduct5, setCostProduct5] = useState("");
    const [notes, setNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [subtotal, setSubtotal] = useState("");
    const [tax, setTax] = useState("");
    const [deposit, setDeposit] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {
        if (id) {
            const fetchDocument = async () => {
                try {
                    const documentData = await fetchData({id});
                    if (documentData) {
                        const {
                            client,
                            author,
                            day,
                            month,
                            year,
                            homePhone,
                            workPhone,
                            streetAddress,
                            city,
                            email,
                            province,
                            country,
                            postalCode,
                            descProduct1,
                            descProduct2,
                            descProduct3,
                            descProduct4,
                            descProduct5,
                            qtyProduct1,
                            qtyProduct2,
                            qtyProduct3,
                            qtyProduct4,
                            qtyProduct5,
                            unitProduct1,
                            unitProduct2,
                            unitProduct3,
                            unitProduct4,
                            unitProduct5,
                            costProduct1,
                            costProduct2,
                            costProduct3,
                            costProduct4,
                            costProduct5,
                            notes,
                            paymentMethod,
                            subtotal,
                            tax,
                            deposit,
                            total,
                        } = documentData;

                        // Update all state hooks with the fetched data
                        setClient(client);
                        setAuthor(author);
                        setDay(day);
                        setMonth(month);
                        setYear(year);
                        setHomePhone(homePhone);
                        setWorkPhone(workPhone);
                        setStreetAddress(streetAddress);
                        setCity(city);
                        setEmail(email);
                        setProvince(province);
                        setCountry(country);
                        setPostalCode(postalCode);
                        setDescProduct1(descProduct1);
                        setDescProduct2(descProduct2);
                        setDescProduct3(descProduct3);
                        setDescProduct4(descProduct4);
                        setDescProduct5(descProduct5);
                        setQtyProduct1(qtyProduct1);
                        setQtyProduct2(qtyProduct2);
                        setQtyProduct3(qtyProduct3);
                        setQtyProduct4(qtyProduct4);
                        setQtyProduct5(qtyProduct5);
                        setUnitProduct1(unitProduct1);
                        setUnitProduct2(unitProduct2);
                        setUnitProduct3(unitProduct3);
                        setUnitProduct4(unitProduct4);
                        setUnitProduct5(unitProduct5);
                        setCostProduct1(costProduct1);
                        setCostProduct2(costProduct2);
                        setCostProduct3(costProduct3);
                        setCostProduct4(costProduct4);
                        setCostProduct5(costProduct5);
                        setNotes(notes);
                        setPaymentMethod(paymentMethod);
                        setSubtotal(subtotal);
                        setTax(tax);
                        setDeposit(deposit);
                        setTotal(total);
                    }
                } catch (error) {
                    console.error("Error fetching document data:", error);
                }
            };

        }
    }, [id]);

    const handleHomeButton = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const documentType = "Order";
        const formData = {
            client,
            author,
            documentType,
            day,
            month,
            year,
            homePhone,
            streetAddress,
            city,
            email,
            province,
            country,
            postalCode,
            descProduct1,
            descProduct2,
            descProduct3,
            descProduct4,
            descProduct5,
            qtyProduct1,
            qtyProduct2,
            qtyProduct3,
            qtyProduct4,
            qtyProduct5,
            costProduct1,
            costProduct2,
            costProduct3,
            costProduct4,
            costProduct5,
            unitProduct1,
            unitProduct2,
            unitProduct3,
            unitProduct4,
            unitProduct5,
            notes,
            paymentMethod,
            subtotal,
            tax,
            deposit,
            total,
        };

        try {
            console.log(formData)
            const data = Object.fromEntries(Object.entries(formData).filter(
                ([key, value]) => value !== ""
            ));
            console.log("data", data)
            const response = await putData(data)

            console.log("Form data saved successfully:", response);
            navigate("/");
        } catch (error) {
            console.error("Error saving form data:", error);
        }
    };

    return (
        <div className="form">
            <div style={{position: "relative"}}>
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
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="row">
                        <div className="col-3">
                            <h4>Client:</h4>
                        </div>
                        <div className="col-9">
                            <h4>Author:</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <input
                            id="client"
                            type="text"
                            value={client}
                            onChange={(e) => setClient(e.target.value)}
                            style={{width: "100%"}}
                        ></input>
                    </div>
                    <div className="col-3">
                        <input
                            id="author"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            style={{width: "100%"}}
                        ></input>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-9">
                        <h4>Date:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <p>Day:</p>
                    </div>
                    <div className="col-2">
                        <input
                            id="day"
                            type="number"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            style={{width: "100%", display: "inline"}}
                        ></input>
                    </div>
                    <div className="col-1">
                        <p>Month:</p>
                    </div>
                    <div className="col-2">
                        <select
                            id="month"
                            style={{marginLeft: "1vw"}}
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
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
                        <p>Year:</p>
                    </div>
                    <div className="col-2">
                        <input
                            id="year"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            style={{width: "100%"}}
                        ></input>
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
                        <input
                            id="home-phone"
                            type="number"
                            value={homePhone}
                            onChange={(e) => setHomePhone(e.target.value)}
                        ></input>
                    </div>

                    <div className="col-2">
                        <h4>Street Address:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="street-address"
                            type="text"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                        ></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2">
                        <h4>Work Phone:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="work-phone"
                            value={workPhone}
                            onChange={(e) => setWorkPhone(e.target.value)}
                            type="number"
                        ></input>
                    </div>

                    <div className="col-2">
                        <h4>City:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                        ></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2">
                        <h4>Email:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        ></input>
                    </div>

                    <div className="col-2">
                        <h4>Province:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-2">
                        <h4>Country:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            type="text"
                        ></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-2">
                        <h4>Postal Code:</h4>
                    </div>
                    <div className="col-4">
                        <input
                            id="postal-code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            type="text"
                        ></input>
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
                            value={descProduct1}
                            onChange={(e) => setDescProduct1(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="desc-product2"
                            type="text"
                            value={descProduct2}
                            onChange={(e) => setDescProduct2(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="desc-product3"
                            type="text"
                            value={descProduct3}
                            onChange={(e) => setDescProduct3(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="desc-product4"
                            type="text"
                            value={descProduct4}
                            onChange={(e) => setDescProduct4(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="desc-product5"
                            type="text"
                            value={descProduct5}
                            onChange={(e) => setDescProduct5(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                    </div>
                    <div className="col-2">
                        <input
                            id="qty-product1"
                            type="number"
                            value={qtyProduct1}
                            onChange={(e) => setQtyProduct1(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="qty-product2"
                            type="number"
                            value={qtyProduct2}
                            onChange={(e) => setQtyProduct2(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="qty-product3"
                            type="number"
                            value={qtyProduct3}
                            onChange={(e) => setQtyProduct3(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="qty-product4"
                            type="number"
                            value={qtyProduct4}
                            onChange={(e) => setQtyProduct4(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="qty-product5"
                            type="number"
                            value={qtyProduct5}
                            onChange={(e) => setQtyProduct5(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                    </div>
                    <div className="col-2">
                        <input
                            id="unit-product1"
                            type="number"
                            value={unitProduct1}
                            onChange={(e) => setUnitProduct1(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="unit-product2"
                            type="number"
                            value={unitProduct2}
                            onChange={(e) => setUnitProduct2(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="unit-product3"
                            type="number"
                            value={unitProduct3}
                            onChange={(e) => setUnitProduct3(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="unit-product4"
                            type="number"
                            value={unitProduct4}
                            onChange={(e) => setUnitProduct4(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="unit-product5"
                            type="number"
                            value={unitProduct5}
                            onChange={(e) => setUnitProduct5(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                    </div>
                    <div className="col-2">
                        <input
                            id="cost-product1"
                            type="number"
                            value={costProduct1}
                            onChange={(e) => setCostProduct1(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="cost-product2"
                            type="number"
                            value={costProduct2}
                            onChange={(e) => setCostProduct2(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="cost-product3"
                            type="number"
                            value={costProduct3}
                            onChange={(e) => setCostProduct3(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="cost-product4"
                            type="number"
                            value={costProduct4}
                            onChange={(e) => setCostProduct4(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="cost-product5"
                            type="number"
                            value={costProduct5}
                            onChange={(e) => setCostProduct5(e.target.value)}
                            style={{width: "100%"}}
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
                style={{width: "100%", height: "10vw"}}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <h4 style={{marginBottom: "1vw"}}>Subtotal:</h4>
                        <h4 style={{marginBottom: "1vw"}}>Tax:</h4>
                        <h4 style={{marginBottom: "1vw"}}>Deposit:</h4>
                        <h4 style={{marginBottom: "1vw"}}>Total:</h4>
                    </div>
                    <div className="col-3">
                        <input
                            id="subtotal"
                            type="number"
                            value={subtotal}
                            onChange={(e) => setSubtotal(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="tax"
                            type="number"
                            value={tax}
                            onChange={(e) => setTax(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="deposit"
                            type="number"
                            value={deposit}
                            onChange={(e) => setDeposit(e.target.value)}
                            style={{width: "100%", marginBottom: "1vw"}}
                        ></input>
                        <input
                            id="total"
                            type="number"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            style={{width: "100%"}}
                        ></input>
                    </div>
                </div>

                <h4 style={{display: "inline"}}>Form of Payment: </h4>
                <div style={{display: "inline"}}>
                    <label style={{marginRight: "2vw"}}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            style={{marginRight: "0.2vw"}}
                            checked={paymentMethod === "cash"}
                            onChange={() => setPaymentMethod("cash")}
                        />
                        Cash
                    </label>

                    <label style={{marginRight: "2vw"}}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="check"
                            style={{marginRight: "0.2vw"}}
                            checked={paymentMethod === "check"}
                            onChange={() => setPaymentMethod("check")}
                        />
                        Check
                    </label>

                    <label style={{marginRight: "2vw"}}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            style={{marginRight: "0.2vw"}}
                            checked={paymentMethod === "creditCard"}
                            onChange={() => setPaymentMethod("creditCard")}
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
