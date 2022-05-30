import { two_permutations } from "./permutations.js";

export const strengths = (permutations, connections, members) => {
    
    const n_sum=(permutations[0].length*(permutations[0].length-1))/2;

    const connections_of_two_strengths_list = 
        permutations.map(group=> 
                two_permutations(group).map(group_of2=>{
                    return connections[group_of2[0]][members.indexOf(group_of2[1])][group_of2[1]]})
                    );
    
    const strengths_list = connections_of_two_strengths_list.map(strengths_group=>strengths_group.reduce((a,b)=>a+b)/n_sum);

    return strengths_list;

}