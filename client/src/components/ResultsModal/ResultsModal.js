import React from 'react';
import './results-modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GoogleResults from '../GoogleResults/GoogleResults';
import ComicBook from '../ComicBook/ComicBook';

const ResultsModal = (props) => {
    return (      
        <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Scroll through Comics</Modal.Title>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                </Modal.Header>
                <Modal.Body>
               <GoogleResults />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
    );
  }
          

export default ResultsModal;