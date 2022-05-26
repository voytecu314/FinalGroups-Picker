import { useState, useEffect } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState(null);
    const [members, setMembers] = useState({names: null, loading: true, error: null});

    useEffect(()=>{
      fetch('http://localhost:5000/members')
        .then(res=>res.json())
        .then(members=>setMembers({names: members, loading: false, error: null}))
        .catch(err=>setMembers({names: null, loading: false, error: err.message}))
    },[]);

    return (
        <MyContext.Provider value={ {showModal, setShowModal, modalName, setModalName, members} }>
        
        {children}

        </MyContext.Provider>
    )
}

export default MyProvider;
