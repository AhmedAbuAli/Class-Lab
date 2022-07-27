import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';

import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render(){
        return <>
        <Row xs={1} md={3} className="g-4"/>
        {
            this.props.allBeast.map((item , idx) =>
                <HornedBeast  displayModel={item.displayModel}  key={idx} title={item.title} imageUrl={item.image_url} description={item.description}/>
                 )
        }
        </>
    }
}

export default Main