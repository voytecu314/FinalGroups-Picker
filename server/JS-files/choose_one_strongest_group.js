import { two_permutations,  three_permutations, four_permutations, five_permutations} from "./permutations.js";
import { strengths } from "./calculate_strenghts.js";

//const membersNo = 14;

const rnd_indicator = 5;

//members.splice(membersNo);



const getBiggestGroup = (tmp_perm, tmp_strg, max_strg) => {
            
    const biggestGroups = [];
    
    while(tmp_strg.indexOf(max_strg)!==-1){
        const index = tmp_strg.indexOf(max_strg);
        biggestGroups.push(tmp_perm[index]);
        tmp_strg.splice(index,1);
        tmp_perm.splice(index,1);
    }

    if(biggestGroups.length===1) return biggestGroups[0];
    else return biggestGroups[Math.floor(Math.random()*biggestGroups.length)]
}

//remove members of chosen group from overall members
//sanitize choices and connections 

const remove_members = (chosen_group, choices, connections, members) => {
    
    
    for(let i=0; i<chosen_group.length; i++){

        const index = members.indexOf(chosen_group[i]);
        members.splice(index,1);

        delete choices[chosen_group[i]];
        delete connections[chosen_group[i]]

        

        for (const key in choices) {
            
                for (const elem of choices[key]) {
                    
                    if(chosen_group[i] in elem) choices[key].splice(choices[key].indexOf(elem),1);
                    
                }
                
        }

        for (const key in connections) {
            
            for (const elem of connections[key]) {
                
                if(chosen_group[i] in elem) connections[key].splice(connections[key].indexOf(elem),1);
                
            }
            
        }

    }
    if(members.length===0) return 'Groups are ready';
}


//3 or 4 member groups are in favor over 2 and 5 (4 over 3 and 5 over 2): 4, 3, 5, 2
//actually more member groups will have less chances to be stronger and also more members means connections are more significant therefore addition of n(n-1)/2 (need to adjust it)

const choose_strongest_group = (choices, connections, members, setGroups) => {

    if(members.length===0) {return setGroups;}

    if(members.length===2 || members.length===3) {setGroups.push(members); return setGroups}

    const biggest_two_strength = Math.max(...strengths(two_permutations(members), connections, members));
    const tmp_two_perm = two_permutations(members); 
    const tmp_two_strg = strengths(two_permutations(members), connections, members); 
    const strongest_two_group=getBiggestGroup(tmp_two_perm, tmp_two_strg, biggest_two_strength);
    
    let biggest_three_strength = 0;
    let tmp_three_perm, tmp_three_strg, strongest_three_group;

    if(members.length>3 && members.length!==4){
        biggest_three_strength = Math.max(...strengths(three_permutations(members), connections, members));
        tmp_three_perm = JSON.parse(JSON.stringify(three_permutations(members)));
        tmp_three_strg = strengths(three_permutations(members), connections, members);
        strongest_three_group=getBiggestGroup(tmp_three_perm, tmp_three_strg, biggest_three_strength);
    }

    let biggest_four_strength = 0;
    let tmp_four_perm, tmp_four_strg, strongest_four_group;

    if(members.length>=4 && members.length!==5){
        biggest_four_strength = Math.max(...strengths(four_permutations(members), connections, members));
        tmp_four_perm = JSON.parse(JSON.stringify(four_permutations(members)));
        tmp_four_strg = strengths(four_permutations(members), connections, members);
        strongest_four_group=getBiggestGroup(tmp_four_perm, tmp_four_strg, biggest_four_strength);
    }

    let biggest_five_strength = 0;
    let tmp_five_perm, tmp_five_strg, strongest_five_group;
    if(members.length>=5 && members.length!==6){
        biggest_five_strength = Math.max(...strengths(five_permutations(members), connections, members));
        tmp_five_perm = JSON.parse(JSON.stringify(five_permutations(members)));
        tmp_five_strg = strengths(five_permutations(members), connections, members);
        strongest_five_group=getBiggestGroup(tmp_five_perm, tmp_five_strg, biggest_five_strength);
    }

    
    const strengths_favorized = [biggest_two_strength,biggest_three_strength?biggest_three_strength+3*.5:-1,biggest_four_strength?biggest_four_strength+6*.5:-1,biggest_five_strength?biggest_five_strength+10*.5:-1];
    const max_strenght = Math.max(...strengths_favorized);
    const index_of_max_strenght = max_strenght===strengths_favorized[2]?2:max_strenght===strengths_favorized[1]?1:max_strenght===strengths_favorized[3]?3:0;

    const strongest_chosen_groups = {groups:[strongest_two_group,strongest_three_group,strongest_four_group,strongest_five_group]};

    remove_members(strongest_chosen_groups.groups[index_of_max_strenght], choices, connections, members);

    setGroups.push(strongest_chosen_groups.groups[index_of_max_strenght]);

    return choose_strongest_group(choices, connections, members, setGroups);
}

export default choose_strongest_group;