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

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name} , Age: ${this.age}`;
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

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const available = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
};

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  const result: T[] = [];
  const exists = (value: T): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };

  for (let i = 0 ; i < arr1.length ; i++){
    if(!exists(arr1[i])){
      result.push(arr1[i])
    }
  }
  for (let i = 0 ; i < arr2.length ; i++){
     if(!exists(arr2[i])){
      result.push(arr2[i])
     }
  }

  return result;
};

