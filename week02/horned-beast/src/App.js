import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBeast : data,
      SelectedBeast : {},
      showModal:false
    }
  }

  displayModal = (beast) => {
    this.setState({
      showModal :true,
      SelectedBeast:beast,
    })}
    

  handleClose = () =>{
    this.setState({
      showModal : false
    })
  }

  
  render(){
    return (
      <div className="App">
        <Header/>
        <Main allBeast={this.state.allBeast} displayModal={this.displayModal}/>
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} SelectedBeast={this.SelectedBeast} />
        <Footer/>

      </div>
    );
  }
}

export default App;
