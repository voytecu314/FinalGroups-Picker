import { useState,useContext } from 'react';
import MyContext from '../context/MyContext';
import PassForm from './PassForm';
import Sliders from './Sliders';


const Modal = ({name}) => {

  const [auth, setAuth] = useState(null);

    const {setShowModal} = useContext(MyContext);

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div id="modal">

        <h1>{auth===null?'Please Login':auth?`Welcome ${name} !`:'Password not correct'}</h1>  
        
        {auth?
        <Sliders name={name}/>:
        <PassForm name={name} setAuth={setAuth}/>}
        
        <button id="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default Modal;
