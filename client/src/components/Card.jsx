import {useContext} from 'react';
import MyContext from '../context/MyContext';


const Card = ({name, addClass}) => {

    const {setShowModal, setModalName} = useContext(MyContext);

    const showLoginModal = (e) => {
        setShowModal(true);
        setModalName(e.target.innerText);
    }

    const showVotes = () => {
      console.log('Votes!');
    }

  return (
    <button className={addClass} onClick={addClass==='card'?showLoginModal:showVotes}>{name}</button>
  )
}

export default Card;
