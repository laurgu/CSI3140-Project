import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData, putData } from "../api/api";
import Search from "../Components/Search";

function Home() {
  const navigate = useNavigate();
  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const query = {};
      try {
        const documents = await fetchData(query, "recent");
        setDocumentList(documents);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formType = document.getElementById("formType").value;
    if (formType === "intake") {
      navigate("/intake");
    } else if (formType === "order") {
      navigate("/order");
    } else if (formType === "custom") {
      const id = (
        await putData({
          title: "New",
          client: "Untitled",
          type: "custom",
          author: "Untitled",
        })
      )["_id"];
      navigate(`/document/${id}`);
    }
  };

  return (
    <div style={{ margin: "2vw 20vw 2vw 20vw" }}>
      <h1>HOME</h1>
      <hr />

      <h4>Create a new form</h4>
      <form onSubmit={handleFormSubmit}>
        <select id="formType">
          <option value="" disabled selected hidden>
            ---
          </option>
          <option value="intake">Intake</option>
          <option value="order">Order</option>
          <option value="custom">Custom</option>
        </select>
        <input type="submit" value="create" style={{ marginLeft: "1vw" }} />
      </form>
      <Search />
    </div>
  );
}

export default Home;
