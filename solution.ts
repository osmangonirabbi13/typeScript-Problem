const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

class Person{
    name : string;
    age : number;
    constructor(name: string , age: number){
        this.name =name
        this.age = age
    }

    getDetails(){
       return (`Name: ${this.name} , Age: ${this.age}`)
    }
}

