import React from "react";
import Card from 'react-bootstrap/Card';
import App from "../App";

class HornedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favorite : 0,
    }
  }

  favoriteClick = () => {
    this.setState({favorite:this.state.favorite+1})
    //this.props.displayModel()
  }
    render(){
        return <>

    <Card style={{ width: '40vh', hieght:'20vh', display: 'inline-block' , margin:'1rem' , backgroundColor:'black' , color:'white'}}>
      <Card.Img variant="top" src={this.props.imageUrl}  style={{ hieght:'100%' , width: '100%' }} onClick={this.favoriteClick}/>
      <Card.Body>
        <Card.Title>{this.props.title} 💗 {this.state.favorite}</Card.Title>
        <Card.Text>
            {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>
        </>
    }
}

export default HornedBeast