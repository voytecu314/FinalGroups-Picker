import {useContext} from 'react';
import MyContext from '../context/MyContext';


const Card = ({name}) => {

    const {setShowModal, setModalName} = useContext(MyContext);

    const showLoginModal = (e) => {
        console.log(e.target.innerText,'\'s modal');
        setShowModal(true);
        setModalName(e.target.innerText);
    }

  return (
    <button className="card" onClick={showLoginModal}>{name}</button>
  )
}

export default Card;
