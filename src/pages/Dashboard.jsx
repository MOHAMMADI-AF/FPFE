import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import DocForm from "../components/DocForm";
import DocItem from "../components/DocItem";
import Spinner from "../components/Spinner";
import { getDocs, reset } from "../features/docs/docSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { docs, isLoading, isError, message } = useSelector(
    (state) => state.docs
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/home");
    }

    dispatch(getDocs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading-user">
        <h4>{user && user.name}</h4>
        <p>Welcome To Document Dashboard</p>
      </section>

      <DocForm />

      <section className="content">
        {docs.length > 0 ? (
          <div className="docs">
            <Row>
              {docs.map((doc) => (
                <Col key={doc._id}>
                  <DocItem doc={doc} />
                </Col>
              ))}
            </Row>
            <br></br>
          </div>
        ) : (
          <h3>You have not set any docs</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
