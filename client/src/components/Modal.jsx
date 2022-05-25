import {useContext} from 'react';
import MyContext from '../context/MyContext';


const Modal = ({name}) => {

    const {setShowModal} = useContext(MyContext);

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div id="modal">
        
        <form action="http://localhost:5000/password" method='post'>
            <h1 id="modal-name">{name}</h1> 
            <input id="modal-input" type="password" placeholder='Type your pass here' name={'password'}/> 
            <br />
            <input type="submit" value="Submit" />  
        </form>
        
        <button id="close-modal" onClick={closeModal}>X</button>
    </div>
  )
}

export default Modal;
