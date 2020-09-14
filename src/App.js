import React from 'react';
import './App.css';
import Head from './meme-code/Head';
import Mainsec from './meme-code/Mainsec';
import Footer from './meme-code/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Head />
         <Mainsec />
         <Footer />
      </header>
    </div>
  );
}

export default App;
