import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDoc } from "../features/docs/docSlice";
import { Card, ListGroup } from "react-bootstrap";
import { FaTrashAlt, FaEdit, FaFileAlt } from "react-icons/fa";

function DocItem({ doc }) {
  const dispatch = useDispatch();

  return (
    <div className="doc">
      <br />
      <Card style={{ width: "20rem", borderRadius: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <h2>{doc.text}</h2>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Company Name: {doc.company}</ListGroup.Item>
          <ListGroup.Item>
            Company <Card.Link href={doc.url}>Website</Card.Link>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className="note">
          <Card.Text>Note: {doc.note}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Category: {doc.category}</ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <ListGroup.Item>
            <FaFileAlt className="icons-group-edit">{doc.upload}</FaFileAlt>
            <Link to="/Editdoc" className="icons-group-edit">
              <FaEdit />
            </Link>

            <FaTrashAlt
              className="icons-group-del"
              onClick={() => dispatch(deleteDoc(doc._id))}
            ></FaTrashAlt>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <Card.Text>
            Created:
            {new Date(doc.createdAt).toLocaleString("en-US")}
          </Card.Text>
        </ListGroup>
      </Card>
      <br />
    </div>
  );
}

export default DocItem;
