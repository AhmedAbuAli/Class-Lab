import React from "react";
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
    render(){
        return (
            <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={this.props.imageUrl} style={{ width: '100%'}} alt={this.props.title}/>
            {this.props.description}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
            </>
        )
    }
}
export default SelectedBeast