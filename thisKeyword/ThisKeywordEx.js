function getGreaterName(usr1, usr2){
    if(usr1.name > usr2.name){
        console.log("user 1");
    }else{
        console.log("usr 2");
    }
}



let usr1 = {
    name: 'abc',
    tech: 'JS',
    laptop: 'lenovo',
    getConfig: function(){
        console.log(this.name);
    },
    compare: function(other){
        if(this.name > other.name){
            console.log("user 1");
        }else{
            console.log("usr 2");
        }
    }
}

let usr2 = {
    name: 'def',
    tech: 'TS',
    laptop: 'asus',
    getConfig: function(){
        console.log(this.name);
    }
}

getGreaterName(usr1, usr2);

usr1.compare(usr2);



// if(usr1.name > usr2.name){
//     console.log("user 1");
// }else{
//     console.log("usr 2");
// }

