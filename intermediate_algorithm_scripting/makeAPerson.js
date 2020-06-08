//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

class Person {
    #firstName;
    #lastName;

    constructor(firstAndLast){
        [this.#firstName, this.#lastName] = firstAndLast.split(" ");
    }
    
    set setFirstName(firstName){
        this.#firstName = firstName;
    }
    set setLastName(lastName){
        this.#lastName = lastName;
    }
    set setFullName(firstAndLast){
        [this.#firstName, this.#lastName] = firstAndLast.split(" ");
    }
    get getFirstName(){
        return this.#firstName;
    }
    get getLastName(){
        return this.#lastName;
    }
    get getFullName(){
        return this.#firstName + ' ' + this.#lastName
    }
    
  }
  
/* My solution doesn't exactly pass the current tests, as that uses
prototypal constructor functions, I'm using ES6 class and ES2019 private properties. 
But this is much cleaner and much more readable to me so I'm going to stick to it */