import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData, putData } from "../api/api";
import Search from "../Components/Search";
import { Box, InputLabel, MenuItem, Select, Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const [documentList, setDocumentList] = useState([]);
  const [template, setTemplate] = useState("custom");

  const templateChange = (event) => {
    setTemplate(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }

    const fetchDocuments = async () => {
      const query = {};
      try {
        const documents = await fetchData(query, "recent");
        setDocumentList(documents.slice(0, 5));
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (template === "intake") {
      navigate("/intake");
    } else if (template === "order") {
      navigate("/order");
    } else if (template === "custom") {
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
    <div className="form">
      <h1>HOME</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4>Create New Form</h4>
          <Box component="Form" onSubmit={handleFormSubmit}>
            <Select id="formType" onChange={templateChange} value={template}>
              <MenuItem value="intake">Intake</MenuItem>
              <MenuItem value="order">Order</MenuItem>
              <MenuItem value="custom">Custom</MenuItem>
            </Select>
            <Button
              variant="contained"
              type="submit"
              style={{ marginLeft: "1vw" }}
            >
              Create Template
            </Button>
          </Box>
          <Search />
        </div>
        <div className="col-4">
          <h4>Recent Forms</h4>
          {documentList.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {documentList.map((document) => {
                return (
                  <li key={document._id} style={{ marginBottom: "0.5rem" }}>
                    <Link to={`/document/${document._id}`}>
                      {document.title} - {document._id}
                    </Link>
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
