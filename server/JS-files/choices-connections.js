const choices = members.reduce((acc,group)=>({
        ...acc,
        [group]: members.map(member=>{if(group!==member) {return {[member]: Math.floor(Math.random()*0)}} else return {[member]: null} })
    }),{});

export const connections = {};

for (const group in choices) {
    connections[group] = [];

    for (const member in choices) {

         if(group!==member){connections[group].push({[member]:(choices[group][members.indexOf(member)][member]+choices[member][members.indexOf(group)][group])/2})}
         else connections[group].push({[member]:undefined});

    }
}