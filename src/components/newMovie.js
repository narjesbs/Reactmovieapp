import React, { useState } from "react";
import {Button,Modal,Form} from 'react-bootstrap';

function AddMovie({movies,setMovies}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const  [Title,setTitle] = useState ("");
    const  [Description,setDescription] = useState ("");
    const  [Rating,setRating] = useState (0);
    const  [PosterURL,setPosterURL] = useState ("");
    
    const add = (e) => {
      e.preventDefault()
        setMovies([...movies, {Title, Description,Rating,PosterURL}])
    }

    return (
        <div>
            <Button variant="secondary" onClick={handleShow} style={{width:'75px', fontSize:'15px' }}>
              New Movie
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Adding a New Movie to the List</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the title" onChange={ e => setTitle(e.target.value)} />
                    <Form.Text className="text-muted">
                      Add a Title to the Movie.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Movie Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter the description" onChange={ e => setDescription(e.target.value)} />
                    <Form.Text className="text-muted">
                      Add a Description to the Movie.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Movie Rating</Form.Label>
                    <Form.Control type="number" placeholder="Enter the movie rating" onChange={ e => setRating(e.target.value)} />
                    <Form.Text className="text-muted">
                      Add a Rating to the Movie.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Movie Poster URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter the url" onChange={ e => setPosterURL(e.target.value)} />
                    <Form.Text className="text-muted">
                      Add a URL to the Movie Poster.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="secondary" type = "submit" onClick= {add}>Add the Movie</Button>
              </Modal.Footer>
            </Modal>
        </div>
        );
      }
export default AddMovie;