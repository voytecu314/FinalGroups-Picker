import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState(null);


    return (
        <MyContext.Provider value={ {showModal, setShowModal, modalName, setModalName} }>
        
        {children}

        </MyContext.Provider>
    )
}

export default MyProvider;
