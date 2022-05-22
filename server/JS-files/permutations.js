//All possible permutations for 2,3,4,5 members groups

export const two_permutations = (members_array) => {

    const permutations = [];

    for(let i=0; i<members_array.length; i++) {
        
            for(let j=i+1; j<members_array.length; j++) {
                permutations.push([members_array[i],members_array[j]])
            }

        }
    return permutations;    
}

export const three_permutations = (members_array) => {
    
    const permutations = [];

    for(let i=0; i<members_array.length; i++) {
        
        for(let j=i+1; j<members_array.length; j++) {

            for(let k=j+1; k<members_array.length; k++) {

            permutations.push([members_array[i],members_array[j],members_array[k]]);
            }
        }

    }
    return permutations; 
}

export const four_permutations = (members_array) => {
    
    const permutations = [];

    for(let i=0; i<members_array.length; i++) {
        
        for(let j=i+1; j<members_array.length; j++) {

            for(let k=j+1; k<members_array.length; k++) {

                for(let l=k+1; l<members_array.length; l++) {

                    permutations.push([members_array[i],members_array[j],members_array[k], members_array[l]]);
                }
            }
        }
    }
    return permutations;
}

export const five_permutations = (members_array) => {
    
    const permutations = [];

    for(let i=0; i<members_array.length; i++) {
        
        for(let j=i+1; j<members_array.length; j++) {

            for(let k=j+1; k<members_array.length; k++) {

                for(let l=k+1; l<members_array.length; l++) {
                    for(let m=l+1; m<members_array.length; m++) {
                        permutations.push([members_array[i],members_array[j],members_array[k],members_array[l],members_array[m]]);
                    }
                }
            }
        }
    }
    return permutations;
}
