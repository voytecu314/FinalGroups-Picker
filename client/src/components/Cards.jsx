import { useContext } from "react";
import MyContext from "../context/MyContext.js";
import Card from "./Card.jsx";

const Cards = () => {
    
    const { members } = useContext(MyContext);
    
    if(members.loading) return <p>Loading...</p>
    if(members.error) return <p>{members.error}</p>
    

  return (
    <div id="cards">
        {members.names.map((member,i)=><Card key={i} name={member} addClass="card" />)}
        <Card key={members.length} name="See voting results" addClass="see-votes-btn"/>

    </div>
  )
}

export default Cards;