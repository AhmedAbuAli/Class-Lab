import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorit:0
        }
    }

    favoritClick = ()=>{
        this.setState({favorit : this.state.favorit + 1 })
        this.props.displayModal(this.props.data)
    }
    render(){
        return(
            <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} onClick={this.favoritClick} />
      <Card.Body>
        <Card.Title>{this.props.title} 💛 {this.state.favorit}</Card.Title>
        <Card.Text>
            {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>

            </>
        )
    }
}
export default HornedBeast