
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

