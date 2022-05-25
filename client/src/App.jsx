import { useContext } from 'react';
import Cards from './components/Cards.jsx';
import Modal from './components/Modal.jsx';
import MyContext from './context/MyContext.js';

import './App.css';

function App() {
  
const {showModal, modalName} = useContext(MyContext)

  return (
    <div className="App">
      <h1 id="header">DCI Final Project Group Picker</h1>
      <h2 className="headers">dci_fbw_wd21_e08-1</h2>

      <Cards />
      
      <h2 className="headers">Please choose your name</h2>

      {showModal && <Modal name={modalName}/>}
    </div>
  );
}

export default App;
