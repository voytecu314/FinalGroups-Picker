import { useEffect, useContext } from "react";
import MyContext from "../context/MyContext.js";
import Card from "./Card.jsx";

const Cards = () => {
    
    const { members, renderDeadline, setRenderDeadline } = useContext(MyContext);

    const countDeadline = () => {

      const todayMiliSec = new Date().getTime();
      const deadlineMiliSec = new Date(2022, 6, 4, 10).getTime();
      const differenceMiliSec = deadlineMiliSec-todayMiliSec;
      const days = Math.floor( differenceMiliSec/86400000 );
      const hoursMiliSec = differenceMiliSec-(86400000*days);
      const hours = Math.floor( hoursMiliSec/3600000 );
      const minutesMiliSec = hoursMiliSec - (3600000*hours);
      const minutes = Math.floor( minutesMiliSec/60000 );
      const seconds = Math.floor( (minutesMiliSec - (60000*minutes))/1000 );
      return (<>
              <p>{`${days} days`}</p>   
              <p>{`${hours} hours,`}</p> 
              <p>{`${minutes} minutes,`}</p> 
              <p>{`${seconds} seconds`}</p> 
              </>);
    }

    useEffect(()=>{

      const interval = setInterval(()=>setRenderDeadline(countDeadline()),1000);

      return () => clearInterval(interval);

    },[]);
    
    if(members.loading) return <p>Loading...</p>
    if(members.error) return <p>{members.error}</p>
    

  return (
    <div id="cards">
        {members.names.map((member,i)=><Card key={i} name={member} addClass="card" />)}

          <div style= {{marginTop: '100px', textAlign: 'center'}}>
            <h3>Deadline</h3>
            <h2>{renderDeadline}</h2>
          </div>
        
        <Card key={members.length} name="See voting results" addClass="see-votes-btn"/>

    </div>
  )
}

export default Cards;