import { useState, useEffect } from 'react';

const FinalGroupsModal = () => {

    const [groups, setGroups] = useState(null);

    useEffect(()=>{
        fetch('https://groupspickeserver4slackattack.onrender.com/show-groups')
            .then(rsp=>rsp.json())
            .then(data=>setGroups(data))
            .catch(console.log);
    },[]);
    
  if(!groups) return <p>Loading...</p>

  return (
    <div id='final-modal'>
        <h1>Final project groups:</h1>
        <br />
        {groups.map((group,i)=>
            <p key={i}>{`Group ${i+1} -----------> `}
                {group.map((member,i)=><span className={'final-spans'} key={i}>{member+" "}</span>)}
            </p>)}

    </div>
  )
}

export default FinalGroupsModal;