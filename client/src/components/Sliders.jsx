import {  useState, useContext, useEffect, useRef } from 'react';
import MyContext from '../context/MyContext';

const Sliders = ({name}) => {

    const { members, deadLineDate } = useContext(MyContext);
    const [slider, setSlider] = useState(null)
    
    const submitBtnRef = useRef();

    useEffect(()=>{

        if(deadLineDate-new Date()<0) submitBtnRef.current.setAttribute('disabled', true);

        fetch('http://localhost:5000/choices')
             .then(rsp=>rsp.json())
             .then(data=>setSlider(data[name]))

    },[name]);

    const onChangeHandler = (e,member) => {
        
        setSlider(slider.map(slider=>{  if(Object.keys(slider)[0]===member)
                                        return ({[member]:e.target.value});
                                        else 
                                        return slider;
                                        } ));
                                        
        const ptsSpan = e.target.previousSibling.children[1];
        ptsSpan.innerText = e.target.value+' %';
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {name, choices: []};
        const formElements=e.target.children;
        

        for(let i=1; i<formElements.length-1; i++) {

            formElements[i].children[1].name!==name ?
            data.choices.push({[formElements[i].children[1].name]: parseInt(formElements[i].children[1].value)}) :
            data.choices.push({[formElements[i].children[1].name]: null})
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
        
        
        {members.names.map((member,i)=>{if(member!==name){
                                return (<div key={i}>
                                <label className='slid-labels' htmlFor={`vol-${i}`}>
                                    <span>{member}</span> <span>{
                                    slider && `${slider[i][member]} %`
                                                                }</span> </label>
                                <input 
                                    className="slider" 
                                    type="range"
                                    id={`vol-${i}`}
                                    value={slider?slider[i][member]:50} 
                                    name={member}
                                    onChange={(e)=>onChangeHandler(e,member)}/>
                                </div>)}else{
                                return (<div key={i}>
                                    <label className='slid-labels' htmlFor={`vol-${i}`}>
                                        <span>{member}</span> <span>100 %</span> </label>
                                    <input 
                                        className="slider" 
                                        type="range" 
                                        id={`vol-${i}`} 
                                        value={100}
                                        name={member}
                                        disabled/>
                                    </div>)}
                                })}
        
        


        <input type="submit" className="submit-btn" ref={submitBtnRef} />
    </form>
  )
}

export default Sliders;