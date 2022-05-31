import {  useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

const Sliders = ({name}) => {

    const { members } = useContext(MyContext);
    const [nameChoices, setNameChoices] = useState(null);

    useEffect(()=>{

        fetch('http://localhost:5000/choices')
             .then(rsp=>rsp.json())
             .then(data=>setNameChoices(data[name]))

    },[name]);

    const onChangeHandler = (e) => {
        const ptsSpan = e.target.previousSibling.children[1];
        ptsSpan.innerText = e.target.value+' %';
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {[name]:[]};
        const formElements=e.target.children;
        

        for(let i=1; i<formElements.length-1; i++) {

            formElements[i].children[1].name!==name ?
            data[name].push({[formElements[i].children[1].name]: parseInt(formElements[i].children[1].value)}) :
            data[name].push({[formElements[i].children[1].name]: null})
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
                                <label className='slid-labels' htmlFor={`vol-${i}`}>
                                    <span>{member}</span> <span>{
                                    nameChoices && `${nameChoices[i][member]} %`
                                                                }</span> </label>
                                <input 
                                    className="slider" 
                                    type="range" 
                                    value={nameChoices && nameChoices[i][member]}
                                    id={`vol-${i}`} 
                                    name={member}
                                    onChange={onChangeHandler}/>
                                </div>):
                                (<div key={i}>
                                    <label className='slid-labels' htmlFor={`vol-${i}`}>
                                        <span>{member}</span> <span>100 %</span> </label>
                                    <input 
                                        className="slider" 
                                        type="range" 
                                        id={`vol-${i}`} 
                                        value={100}
                                        name={member}
                                        disabled/>
                                    </div>))}
        
        


        <input type="submit" className="submit-btn"/>
    </form>
  )
}

export default Sliders;