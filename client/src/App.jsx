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
      <h2 className="headers">Slack Attack</h2>
      <h3 className="headers">(dci_fbw_wd22_d10)</h3>

      <Cards />
      
      <h2 className="headers">Please choose your name</h2>

      {showModal && <Modal name={modalName}/>}
    </div>
  );
}

export default App;
