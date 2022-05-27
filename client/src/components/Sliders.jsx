import {  useContext } from 'react';
import MyContext from '../context/MyContext';

const Sliders = ({name}) => {

    const { members } = useContext(MyContext);

    const onChangeHandler = (e) => {
        const ptsSpan = e.target.previousSibling.children[1];
        ptsSpan.innerText = e.target.value+' %';
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {[name]:[]};
        const formElements=e.target.children;

        for(let i=2; i<formElements.length; i+=2) {

            e.target.children[i].name!==name ?
            data[name].push({[e.target.children[i].name]: e.target.children[i].value}) :
            data[name].push({[e.target.children[i].name]: null})
        }
            
        fetch('http://localhost:5000/votes',{
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                        })
                        .then(rsp=>rsp.json())
                        .then(console.log)
                        .catch(err=>console.log(err.message));

    }

  return (
    <form id="sliders-form" onSubmit={submitHandler}>

        <div>
            <h3>Please rate how much would you like to be in a Final Project group witch your classmates</h3>
            <br /> <br /> <br />
        </div>
        
        
        {members.names.map((member,i)=>member!==name?
                                (<div key={i}>
                                <label className='slid-labels' htmlFor="vol">
                                    <span>{member}</span> <span>50 %</span> </label>
                                <input 
                                    className="slider" 
                                    type="range" 
                                    id="vol" 
                                    name={member}
                                    onChange={onChangeHandler}/>
                                </div>):
                                (<div key={i}>
                                    <label className='slid-labels' htmlFor="vol">
                                        <span>{member}</span> <span>100 %</span> </label>
                                    <input 
                                        className="slider" 
                                        type="range" 
                                        id="vol" 
                                        value={100}
                                        name={member}disabled/>
                                    </div>))}
        
        


        <input type="submit" className="submit-btn"/>
    </form>
  )
}

export default Sliders;