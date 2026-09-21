
import { useEffect, useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // For edit modal
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Get all users
  const getUsers = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "http://localhost:3000/Alldata",
        {
          withCredentials: true
        }
      );

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    getUsers();
  }, []);


  // Open edit modal
  const handleEdit = (user) => {

    setSelectedUser(user);
    setShowModal(true);

  };


  // Update user
  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:3000/edit/${selectedUser._id}/data`,
        selectedUser,
        {
          withCredentials: true
        }
      );

      setShowModal(false);

      getUsers();

    } catch (error) {

      console.log(error);

    }
  };


  // Delete user
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:3000/data/delete/${id}`,
        {
          withCredentials: true
        }
      );

      getUsers();

    } catch (error) {

      console.log(error);

    }
  };


  return (
    <>
      {/* Page Header */}

      <section className="bg-light py-5">

        <Container>

          <div className="text-center">

            <h1 className="display-5 fw-bold">
              Our Users
            </h1>

            <p className="lead text-secondary">
              Manage and view all registered users.
            </p>

          </div>

        </Container>

      </section>


      {/* Users Section */}

      <section className="py-5">

        <Container>

          {/* Loading */}

          {loading && (

            <div className="text-center py-5">

              <Spinner animation="border" variant="primary" />

              <p className="text-secondary mt-3">
                Loading users...
              </p>

            </div>

          )}


          {/* No Users */}

          {!loading && users.length === 0 && (

            <Alert variant="info" className="text-center">

              No users found.

            </Alert>

          )}


          {/* Users */}

          {!loading && users.length > 0 && (

            <Row className="g-4">

              {users.map((user) => (

                <Col
                  key={user._id}
                  xs={12}
                  md={6}
                  lg={4}
                >

                  <Card className="h-100 border-0 shadow-sm">

                    <Card.Body className="p-4">

                      <div className="d-flex justify-content-between align-items-start">

                        <div>

                          <Card.Title className="fw-bold">

                            {user.name}

                          </Card.Title>

                          <Card.Text className="text-secondary mb-2">

                            {user.email}

                          </Card.Text>

                        </div>

                        <span className="badge bg-primary">

                          User

                        </span>

                      </div>


                      <hr />


                      <div className="mb-3">

                        <p className="mb-1">
                          <strong>Age:</strong>{" "}
                          {user.age}
                        </p>

                        <p className="mb-1">
                          <strong>Class:</strong>{" "}
                          {user.std}
                        </p>

                        <p className="mb-1">
                          <strong>Roll No:</strong>{" "}
                          {user.roll}
                        </p>

                      </div>


                      {/* Buttons */}

                      <div className="d-flex gap-2 mt-4">

                        <Button
                          variant="primary"
                          className="flex-grow-1"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="outline-danger"
                          className="flex-grow-1"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </Button>

                      </div>

                    </Card.Body>

                  </Card>

                </Col>

              ))}

            </Row>

          )}

        </Container>

      </section>


      {/* Edit Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            Edit User
          </Modal.Title>

        </Modal.Header>


        <Form onSubmit={handleUpdate}>

          <Modal.Body>

            {selectedUser && (

              <>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={selectedUser.name}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        name: e.target.value
                      })
                    }
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    value={selectedUser.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value
                      })
                    }
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Age
                  </Form.Label>

                  <Form.Control
                    type="number"
                    value={selectedUser.age}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        age: e.target.value
                      })
                    }
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Class
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={selectedUser.std}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        std: e.target.value
                      })
                    }
                  />

                </Form.Group>


                <Form.Group>

                  <Form.Label>
                    Roll No
                  </Form.Label>

                  <Form.Control
                    type="number"
                    value={selectedUser.roll}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        roll: e.target.value
                      })
                    }
                  />

                </Form.Group>

              </>

            )}

          </Modal.Body>


          <Modal.Footer>

            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
            >
              Save Changes
            </Button>

          </Modal.Footer>

        </Form>

      </Modal>

    </>
  );
}

export default Users;