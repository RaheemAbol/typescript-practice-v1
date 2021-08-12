let userName: string = "Raheem";
let hasLoggedIn: boolean = true;

userName += " james ";

console.log(userName);

let myNumber: number = 10;
let hisNumber: number = 4;

let guest: string = "Bill";
let hasLoggedOut:boolean = false;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1,2,3,4,5,6];

const myPerson: {
    first: string;
    last: string;
    cool: boolean;
    fast: boolean;
} = {
    first: "Raheem",
    last: "Abolfathzadeh",
    cool: true,
    fast: false
}

interface Person {
    first: string;
    last: string;
    middle: string;
    iq: number;
    age: number;
}

const tim: Person = {
    first: "Tim",
    last: "Jones",
    middle: "P",
    iq: 140,
    age: 35
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

if (ids[30] === "D") {

}