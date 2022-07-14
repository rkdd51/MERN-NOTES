import { React, useEffect, useState } from "react";
import axios from "axios";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

// import { Accordion, Badge, Button, Card } from "react-bootstrap";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Hello Rahul">
      <Link to="createnotes">
        <Button size="lg" style={{ marginLeft: "10px", marginBottom: 6 }}>
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion defaultActiveKey={["0"]} key={notes._id}>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/notes/${note._id}`}>Edit</Button>
                  <Button
                    className="mx-2"
                    variant="danger"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      {note.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
