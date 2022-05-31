import { useState,useContext } from 'react';
import MyContext from '../context/MyContext';
import PassForm from './PassForm';
import Sliders from './Sliders';
import FinalGroupsModal from './FinalGroupsModal';


const Modal = ({name}) => {

  const [auth, setAuth] = useState(null);
  const [adminAuth, setAdminAuth] = useState(null);

    const {setShowModal, modalRef} = useContext(MyContext);

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div id="modal" ref={modalRef} >

        <h1>{(auth || adminAuth)?`Welcome ${name} !`:(auth===null && adminAuth===null)?'Please Login':'Password not correct'}</h1>  
        {adminAuth && <FinalGroupsModal />}
        {auth?
        <Sliders name={name}/>:
        <PassForm name={name} setAuth={setAuth} setAdminAuth={setAdminAuth} />}
        
        <button id="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default Modal;
