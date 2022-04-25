let animal = {
    availableMovements: ['swim', 'run', 'fly', 'jump'],
}

const Pet = function(_kind = '', _isPredator = false, _movement = '', _name = 'Some animal') {

    let movement = [];
    let kind;
    let name;
    let isPredator;

    kind = _kind;

    if(!_name) {
        console.log("You've entered incorrect name in constructor! Set another name");
        name = 'Some animal';
    } else name = _name;

    if(typeof _isPredator != 'boolean'){
        isPredator = false;
        console.log("You've entered incorrect data in constructor! If animal is predator you can change this field later");
    }else isPredator = _isPredator; 

    if(typeof _movement == 'string') {
        if(animal.availableMovements.includes(_movement)){
            movement.push(_movement);
        }else console.log(`Movement ${_movement} is not available! Set some available movement: 'swim', 'run', 'fly', 'jump'`);
    }else _movement.forEach(elem => {
        if(animal.availableMovements.includes(elem)) movement.push(elem);
        else{
            let str = '';
            animal.availableMovements.forEach(elem => {str += `${elem} `}); 
            console.log(`Movement ${elem} is not available! Set some available movement: ${str}`);
        }
    }); 
    

    this.setName = (_name) => {
        if(!_name) {
            console.log("You've entered incorrect name in constructor! Set another name");
            name = 'Some animal';
        } else name = _name;
    }

    this.getName = () => {
        return name;
    }

    this.setKind = (_kind) => {
        kind = _kind;
    }

    this.getKind = () => {
        return kind;
    }

    this.setIsPredator = (_isPredator) => {
        if(typeof _isPredator != 'boolean'){
            isPredator = false;
            console.log("You've entered incorrect data in constructor! If animal is predator you can change this field later");
        }
    }

    this.getIsPredator = () => {
        return isPredator;
    }

    this.setMovement = (_movement) => {
        if(typeof _movement == 'string') {
            if(animal.availableMovements.includes(_movement))
                movement.push(_movement);
        }else _movement.forEach(elem => {
            if(animal.availableMovements.includes(elem)) movement.push(elem);
            else{
                console.log(`Movement ${elem} is not available! Set some available movement: 'swim', 'run', 'fly', 'jump'`);
            }
        }); 
    }

    this.getAllMovements = () => {
        return movement;
    }

    this.toMove = (_movement) => {
        if(movement.includes(_movement))
            console.log(`${name} is ${_movement}ing!`);
        else console.log(`${name} can't ${_movement}!`);
    }
}

const Cat = function(...args) {
    this.__proto__ = new Pet(...args);
    this.play = () => {
        console.log(`${this.getName()} is playing`)
    }
}




let dog = new Pet('dog', true, ['run', 'swim'], 'Sam'); //walk is not available
//console.log(dog.getName());

let cat = new Cat('cat', true, ['run', 'swim'], 'Tom');
console.log(cat.getKind());
cat.play();
