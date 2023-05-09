let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];



for (let i=0; i<2; i++){
    for (let j=0; j<2; j++){
        for (let k=0; k<2; k++){
           console.log( `${pronoun[i]}${adj[j]}${noun[k]}.com`);
        }
    }
}

