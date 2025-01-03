function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Type Assertion (Use with Caution)
console.log(greeter(user as string)); //Will compile but runtime error 

// Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user)); //Correct Usage

//Solution 3: Modify the function to accept either a string or an array
function greeterFlexible(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(', ');
    }
}
console.log(greeterFlexible(user));
console.log(greeterFlexible("John Doe"));