import { useContext } from "react";
import MyContext from "../context/MyContext";

const PassForm = ({name, setAuth, setAdminAuth}) => {

        const { modalRef } = useContext(MyContext);

        const submitHandler = (e) => {
                e.preventDefault();
                
                const inputs = e.target.children;
                const loginData = {
                        [inputs[0].name]: inputs[0].value,
                        [inputs[1].name]: inputs[1].value
                        }
                fetch('http://localhost:5000/login',{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(loginData)
                        })
                        .then(rsp=>rsp.json())
                        .then(result=>{
                                        setAuth(result.auth);
                                        if(result.auth) modalRef.current.style.backgroundImage=
                                        'linear-gradient(to right, bisque , gray 30%, blue 195%)';
                                        })
                        .catch(err=>console.log(err.message));
        }

        const ADMINsubmitHandler = (e) => {
                e.preventDefault();
                const inputs = e.target.children;
                const loginData = {
                        [inputs[0].name]: inputs[0].value,
                        [inputs[1].name]: inputs[1].value
                        }
                fetch('http://localhost:5000/login/admin',{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(loginData)
                        })
                        .then(rsp=>rsp.json())
                        .then(result=>{
                                        setAdminAuth(result.auth);
                                        if(result.auth) modalRef.current.style.backgroundImage=
                                        'linear-gradient(bisque , gray 30%, blue 295%)';
                                        })
                        .catch(err=>console.log(err.message));
        }

  return (
    <form id="pass-form" onSubmit={name!=='ADMIN'?submitHandler:ADMINsubmitHandler}>
            
            <input  className="modal-input" 
                    type="text" 
                    value={name} 
                    name="name" 
                    readOnly/>

            <input  className="modal-input" 
                    type="password" 
                    placeholder='Type your pass here' 
                    name={'password'} 
                    autoFocus/> 
            <br />
            <input type="submit" value="Submit" className="submit-btn"/>  
        
    </form>
  )
}

export default PassForm;
