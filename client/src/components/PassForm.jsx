const PassForm = ({name,setAuth}) => {

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
                        .then(result=>setAuth(result.auth))
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
                        .then(console.log)
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
