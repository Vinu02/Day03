
//for loop

for (i=0; i<=10; i++){
    console.log(i);
}

//for of

let a=['one','two','three','four'];
for (let ele of a){
console.log(ele);
}

// for in

var person={
    name:'xxx',
    age:20
}
for(let key in person){
console.log(key);
}

let resume={
    Name:'vinu',
    Age:22,
    Location:'ooty',
    Degree:'BE',
    College:'csice',
    Course:'fullstack',
}
console.log(resume);

let resumeJSON=JSON.stringify(resume);
console.log(resumeJSON);

let resumeObj=JSON.parse(resumeJSON);
console.log(resumeObj);


