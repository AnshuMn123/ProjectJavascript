let usr = {
    name: 'aaa',
    tech: 'JS',
    laptop: {
        cpu: '17',
        ram: '4', 
        brand: 'lenovo'
    }
}


console.log(usr);

for(let key in usr){
    console.log(key,  usr[key]);
}


for(let key in usr.laptop){
    console.log(key,  usr.laptop[key]);
}

for(let key in usr){
    if(typeof usr[key] === "object"){
        for(let nested in usr[key]){
            console.log(`${nested} : ${usr[key][nested]}`);
        }
    }else{
        console.log(`${key} : ${usr[key]}`);
    };
};