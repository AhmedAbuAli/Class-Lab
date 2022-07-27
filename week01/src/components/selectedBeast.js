import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
class SelectedBeast extends React.Component {
    render(){
        return ( <> <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Your Horned Beast</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img src='' alt=''/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                    </Modal>
                </>
        )
    }

}
export default SelectedBeast