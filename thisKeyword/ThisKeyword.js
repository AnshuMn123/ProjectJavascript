

let usr = {
    name: 'aaa',
    tech: 'JS',
    laptop: 'lenovo',
    greet: function(){
        // console.log(name);  // can't use name directly, it is a object property
        // console.log(usr.name); // it can get other users details also
        // console.log(this.name);

        console.log(this.name, this.tech, this.laptop);
    }
}

usr.greet();