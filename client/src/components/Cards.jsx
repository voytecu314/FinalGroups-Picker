import { useEffect, useContext } from "react";
import MyContext from "../context/MyContext.js";
import Card from "./Card.jsx";

const Cards = () => {
    
    const { members, renderDeadline, deadLineDate ,setRenderDeadline } = useContext(MyContext);

    const countDeadline = () => {

      const todayMiliSec = new Date().getTime();
      const deadlineMiliSec = deadLineDate.getTime();
      const differenceMiliSec = deadlineMiliSec-todayMiliSec;
      const days = differenceMiliSec<0 ? 0 : Math.floor( differenceMiliSec/86400000 );
      const hoursMiliSec = differenceMiliSec-(86400000*days);
      const hours = differenceMiliSec<0 ? 0 : Math.floor( hoursMiliSec/3600000 );
      const minutesMiliSec = hoursMiliSec - (3600000*hours);
      const minutes =  differenceMiliSec<0 ? 0 :  Math.floor( minutesMiliSec/60000 );
      const seconds =  differenceMiliSec<0 ? 0 : Math.floor( (minutesMiliSec - (60000*minutes))/1000 );
      return (<>
              { differenceMiliSec<0 ?
                <del style={ {marginBottom:'10px'} }>{deadLineDate.toLocaleString()}</del>
              : <h3 style={ {marginBottom:'10h3x'} }>{deadLineDate.toLocaleString()}</h3>}
              {days<=0?null:<p>{`${days} days`}</p>}   
              {hours<=0?null:<p>{`${hours} hours,`}</p>} 
              {minutes<=0?null:<p>{`${minutes} minutes,`}</p>} 
              {seconds<=0?null:<p>{`${seconds} seconds`}</p>}
              { differenceMiliSec<0 ? <p>passed</p> :<p>left</p>}
              </>);
    }

    useEffect(()=>{

      const interval = setInterval(()=>setRenderDeadline(countDeadline()),1000);
      if(deadLineDate-new Date()<0 ) clearInterval(interval);
      return () => clearInterval(interval);

    },[]);
    
    if(members.loading) return <p>Loading...</p>
    if(members.error) return <p>{members.error}</p>
    

  return (
    <div id="cards">
        {deadLineDate-new Date()<0 ? null
        : members.names.map((member,i)=><Card key={i} name={member} addClass="card" />)}

          <div style= {{marginTop: '100px', textAlign: 'center'}}>
            <h2>Deadline</h2>
            <div>{renderDeadline}</div>
          </div>
        
         <Card key={members.length} name="See voting results" addClass="see-votes-btn"/>

    </div>
  )
}

export default Cards;