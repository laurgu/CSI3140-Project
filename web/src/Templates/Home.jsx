import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../api/documents";
import Search from "../Components/Search";

function Home() {
  const navigate = useNavigate();
  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const query = {};
      try {
        const documents = await fetchData(query);
        setDocumentList(documents);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

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
      <hr />
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
            <input type="submit" value="create" style={{ marginLeft: "1vw" }} />
          </form>
          <Search />
        </div>
        <div className="col-6">
          <h4>Recent Forms</h4>
          {documentList.length > 0 ? (
            <ul>
              {documentList.map((document) => {
                let linkTo;
                if (document.documentType === "Intake") {
                  linkTo = `/intake/${document._id}`;
                } else if (document.documentType === "Order") {
                  linkTo = `/order/${document._id}`;
                } else {
                  // Add more cases for other document types, if needed.
                  // For now, I assume you only have "Intake" and "Order".
                  linkTo = "/";
                }

                return (
                  <li key={document._id}>
                    <Link to={linkTo}>{document.documentTitle}</Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No documents found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
