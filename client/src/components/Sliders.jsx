import {  useContext } from 'react';
import MyContext from '../context/MyContext';

const Sliders = ({name}) => {

    const { members } = useContext(MyContext);

    const onChangeHandler = (e) => {
        const ptsSpan = e.target.previousSibling.children[1];
        ptsSpan.innerText = e.target.value+' %';
    }

  return (
    <form id="sliders-form" action="http://localhost:5000/points" method='post'>

        <h1>Hi {name} !</h1>
        <h2>Please rate how much would you like to be in a Final Project group witch your classmates</h2>
        
        {members.names.map((member,i)=>(<>
                                <label className='slid-labels' key={i} htmlFor="vol">
                                    <span>{member}</span> <span>50 %</span> </label>
                                <input 
                                    className="slider" 
                                    type="range" 
                                    id="vol" 
                                    name={member}
                                    onChange={onChangeHandler}/>
                                </>))}
        
        


        <input type="submit" className="submit-btn"/>
    </form>
  )
}

export default Sliders;