console.log("connecté");
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md
const arr = [1, 2, ["a"]];

console.log(...arr);

const arr2 = [...arr];

console.log(arr2);

arr2[2][0] = "zzzzz";
console.log(arr2);
console.log(arr);

const cyberPunk = {
  pseudo: "V",
  parcours: ["nomad", "corpo"],
  age: 24,
  wanted: true,
  identity: {
    genre: "male",
    player: "one",
  },
};

const { pseudo, age: ans } = cyberPunk;
console.log(ans);

// EXERCICE I

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// I.1 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humandBodyTemp, waterBoilingTemp] = constants
console.log(humandBodyTemp)

// I.2  Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter} = rectangle
console.log(area)

// II.1 Iterate through the users array and get all the keys of the object using destructuring
for(let {name, scores, skills, age} of users){
  console.log(name, scores, skills, age)
}

// II.2 Find the persons who have less than two skills
for(let {name, scores, skills, age} of users){
  if(skills.length<2){
    console.log(name, scores, skills, age)
  }
}
// III.1 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. David (4) ["HTM", "CSS", "JS", "React"] 90 95


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(student)
const [firstName, skills, [, , jsScore, reactScore]] = student
console.log(firstName, skills, jsScore, reactScore)

// III.2 Write a function called convertArrayToObject which can convert the array to a structure object. console.log(convertArrayToObject(students))
/*[
  {
    name: 'David',
    skills: ['HTM','CSS','JS','React'],
    scores: [98,85,90,95]
  },
  {
    name: 'John',
    skills: ['HTM','CSS','JS','React'],
    scores: [85, 80,85,80]
  }
  ]
*/
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array){
  const result = []
  for(let [name, skills, scores] of array){
    result.push({name, skills, scores})
  }
  return result
}

console.log(convertArrayToObject(students))

/* III.3 Copy the student object to newStudent without mutating the original object.*/
const student2 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

/*In the new object add :
*/
// Add Bootstrap with level 8 to the front end skill sets
const newStudent = structuredClone(student2)
console.log(newStudent)
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
console.log(newStudent)

// Add SQL with level 8 to the data base skill sets
const { skills: {frontEnd, backEnd, dataBase, dataScience}} = newStudent//ici je mets dans des variables toutes les familles de skills pour pouvoir y accéder comme je veux après
dataBase.push({ skill: 'SQL', level: 8 })
console.log(newStudent)

// Add SQL without level to the data science skill sets
dataScience.push('SQL')
console.log(newStudent)
