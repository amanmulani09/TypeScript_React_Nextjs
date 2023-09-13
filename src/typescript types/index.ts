
//basic typescript types

let variable = 'hello';

variable = '10'; // typescript does attach implicitly types with it no

let age = 19;

//attaching explicitly types to variables

let experience:number = 10;

experience = 20;


let isAuthenticated:boolean = true;

isAuthenticated = false


let testString:string = 'hello';

let isLoggedIn:boolean = true;

let testStringOrNumber: string | number; // union type 


//Array

let names:string[] = ["john","jane","tom"];// implicitly it's type is string

names.push('1');


let testStringArray: string[];
let testNumberArray :number[];

let testStringOrNumberArray:(string|number)[] = []; // union type for array


testStringOrNumberArray.push(10)
testStringOrNumberArray.push('10')



//objects


let user = {
    userName:"john",
    age:22,
    isAdmin:false
}


user.userName = 'Jane';
user.age = 20; // implicitly set type to number;

//we can't add extra property to the object once we initilized in first we can't add later another property

//how to add type;


let userObj: {
    userName:string,
    age:number,
    isAdmin:boolean
}

userObj = {
    userName:'aman',
    age:21,
    isAdmin:false
}

let userObj2: {
    userName:string;
    age:number;
    isAdmin:boolean;
    phone?:string; // here is phone is optional property it can be or can not be existing
}


userObj2 = {
    userName:'pratham',
    age:34,
    isAdmin:false,
    phone:'+121'
}

//ANY

// try to aviod mostly, use only when not sure about type
let testAny; // if we don't provide any type it's type is implicitly any

testAny= 12;
testAny='hello world';



//functions

let sayHi = ()=>{
    console.log("Hi",'welcome')
}

//function return type
let funcReturnString = ():string=>{
    return 'true';
}

let multiple = (num:number)=>{
    return num*2
}

//optional parameter to the function;

const sum = (num1:number,num2:number,initial?:number)=>{
    return initial ? initial+(num1+num2): num1+num2;
}

sum(10,20,10);
sum(10,20)

//type aliasis

type UserType = {
    userName:string;
    age:number;
    phone?:string
};

let betterFunction = (user:UserType)=>{
    console.log(user.age)
}


//function prototype type to create more function
type myFunc = (a:number,b:string)=> void;

let write : myFunc = (num,str)=>{
console.log(num,str)
}

type UserType2 = {
    userName:string;
    age:number;
    phone?:string;
    theme:'dark'| 'light'
}

const userWithTheme:UserType2 = {
    userName:'aman',
    age:20,
    theme:'dark',
    phone:'737861799'
}


//Interfaces;
//interfaces are more likely to types only but it is a advance version

//the syntax to create interface is difference we're not using = operator

//base interface
interface IUser {
userName:string;
email:string;
age:number;
}

//basically it has all the IUser types and also the employee Id type too
interface IEmployee extends IUser{
    employeeId:number;
}

const employee2:IEmployee = {
    userName:'1',
    email:'2',
    age:20,
    employeeId:777
}

//here is the simple rule to choose interface and type

//if want to extend the type then go for interface if not just use type
