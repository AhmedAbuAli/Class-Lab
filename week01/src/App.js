import './App.css';
import React from 'react'
import Footer from './components/footer';
import Header from './components/HornedBeast';
import Main from './components/main';
import data from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import SelectedBeast from './components/selectedBeast';


class App extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {
      allBeast : data ,
      selectedBeast : {} , 
      showModal : false
  }
}
displayModel = () => {
  console.log("Ahmed");
}
  render(){
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main allBeast={this.state.allBeast} displayModel={this.displayModel()} />
      <SelectedBeast show={this.state.showModal}/>
      <Footer />
    </div>
  );
  }
}

export default App;
