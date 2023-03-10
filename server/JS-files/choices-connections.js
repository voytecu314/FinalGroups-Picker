
    const countConnections = (choices, members) => {
        const connections = {};

        for (const group in choices) {

            connections[group] = [];
                
                    for (const member in choices) {
                        
                            if(group!==member){
                                //can remove parseInt after resetting DB
                                connections[group].push({
                                    [member]:(parseInt(choices[group][members.indexOf(member)][member])+
                                            parseInt(choices[member][members.indexOf(group)][group]))/20})
                            
                            }else  connections[group].push({[member]:null});
                        
                    } 
            
        }

        return connections;
    
    }

    export default countConnections;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* const choices = members.reduce((acc,group)=>({
        ...acc,
        [group]: members.map(member=>{if(group!==member) {return {[member]: Math.floor(Math.random()*0)}} else return {[member]: null} })
    }),{}); */