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

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  const result: Item[] = []; 

  for (const item of items) {
    if (item.rating >= 4) {
      result.push(item); 
    }
  }

  return result;
};


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  const activeUsers: User[] = [];

  for (const user of users) {
    if (user.isActive === true) {
      activeUsers.push(user); 
    }
  }

  return activeUsers;
};
