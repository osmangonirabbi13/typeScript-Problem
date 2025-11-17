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
    return `'Name: ${this.name} , Age: ${this.age}'`;
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
  let idx = 0; 

  const exists = (value: T): boolean => {
    for (let i = 0; i < idx; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result[idx] = arr1[i];
      idx++; 
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result[idx] = arr2[i];
      idx++;
    }
  }

  return result;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  const productTotals = products.map((product) => {
    const total = product.price * product.quantity;
    const discountAmount = product.discount
      ? (total * product.discount) / 100
      : 0;
    return total - discountAmount;
  });
  const totalPrice = productTotals.reduce(
    (sum, productTotal) => sum + productTotal,
    0
  );
  return totalPrice;
}
