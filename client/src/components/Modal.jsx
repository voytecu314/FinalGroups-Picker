import { useState,useContext } from 'react';
import MyContext from '../context/MyContext';
import PassForm from './PassForm';
import Sliders from './Sliders';


const Modal = ({name}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const {setShowModal} = useContext(MyContext);

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div id="modal">
        
        {loggedIn?
        <Sliders name={name}/>:
        <PassForm name={name}/>}
        
        <button id="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default Modal;
