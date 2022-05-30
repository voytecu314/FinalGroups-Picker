import {useContext} from 'react';
import MyContext from '../context/MyContext';


const Card = ({name, addClass}) => {

    const {setShowModal, setModalName} = useContext(MyContext);
    

    const showLoginModal = (e) => {
        setShowModal(true);
        setModalName(addClass==='card'?e.target.innerText:'ADMIN');
    }

  return (
    <button className={addClass} onClick={showLoginModal} >{name}</button>
  )
}

export default Card;
