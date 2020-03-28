import React from 'react';
import './results-modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ResultsModal = (props) => {

            return (      
                <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Scroll through Comics</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            Google API results will display here.
                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
            );
          }
          

export default ResultsModal;