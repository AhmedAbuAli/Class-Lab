import './App.css';
import React from 'react'
import Footer from './components/footer';
import Header from './components/HornedBeast';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
