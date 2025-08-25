// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userNmame: string;

userNmame = "Yigit";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "Reading", "Coding"];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Yigit",
    age: 32
};

//person = {
//    isEmployee: true
//};

let people: Person[];

// Type inference

let course: string | number  = "React - The Complete Guide";

course = 12341;

// let username string | sting[];

// Functions & types

function add(a: number, b: number): number {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']

// updatedArray[0].split("");

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    
    /*
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}
    */

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student("Yigit", "Kaplan", 21, ["Angular", "React", "Vue"]);
student.enroll("TypeScript");
student.listCourses();

// student.courses ==> ['Angular', 'React', 'Vue', 'TypeScript']


