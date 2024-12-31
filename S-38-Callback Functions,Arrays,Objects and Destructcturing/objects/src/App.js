
import './App.css';

function App() {
let calculateResult =(engMarks,telMarks,hinMarks,matMarks,sciMarks,
  socMarks,name,passFn,failFn)=>{
 let passMarks =35;
 if(engMarks >= passMarks &&
    telMarks >= passMarks &&
    hinMarks >= passMarks &&
    matMarks >= passMarks &&
    sciMarks >= passMarks &&
    socMarks >= passMarks

 ){
  passFn(name);

 }else{
  failFn(name);
 }

}
calculateResult(85,87,88,99,76,95, "Vikram" , (StudentName)=>{

  console.log(`${StudentName}  Passed In Tenth`)},(StudentName)=>{
    console.log(`${StudentName} Failed In Tenth`)
  });
  

  let prabhasDetails = {
    firstName : "Uppalapati Venkata Suryanarayana",
    lastName : "Prabhas Raju",
    born : "23-Oct-1979(Age-45)Madras now Chennai,TamilNadu,India",
    education : "	Sri Chaitanya College, Hyderabad (BTech)",
  occupation : "Actor",
  yearsActive : "2002-Present",
  family:{
    mother: "Siva Kumari",
    father: "Suryanarayana Raju U"

  }
  }
  console.log(prabhasDetails.family.mother)

  let {firstName1,lastName1,born1,education1,occupation1,yearsActive1,family1,mother1,father1} = prabhasDetails;

console.log(firstName1,lastName1,born1,education1,occupation1,yearsActive1,family1,mother1,father1)

  let kamalHaasanDetails = [
    "Parthasarathy Srinivasan 7-November 1954-age70",
    "Shruti","Akshara","Padma Shri (1990)","Padma Bhushan (2014)",
    ["Vikram","Anirudh","Fahad Fasil","Vijay Sethupati","Surya"]
  ]
  console.log(kamalHaasanDetails);
  console.log(kamalHaasanDetails[1])
  console.log(kamalHaasanDetails[5][3])

   
  let [kamalHassanBorn,daughter1,daughter2,award1,award2] = kamalHaasanDetails;
  console.log(kamalHassanBorn,daughter1,daughter2,award1,award2)
  return (
    <div className="App">

    <h1>CallBack Functions</h1>
<button type='button' onClick={()=>{
  calculateResult(85,87,88,99,76,95, "Vikram" , (StudentName)=>{

    console.log(`${StudentName}  Passed In Tenth`)},(StudentName)=>{
      console.log(`${StudentName} Failed In Tenth`)
    });

}}>CallBackFunction</button>
<hr></hr>
<h1>Objects</h1>
<button type="button" onClick={()=>{
  let prabhasDetails = {
    firstName : "Uppalapati Venkata Suryanarayana",
    lastName : "Prabhas Raju",
    born : "23-Oct-1979(Age-45)Madras now Chennai,TamilNadu,India",
    education : "	Sri Chaitanya College, Hyderabad (BTech)",
  occupation : "Actor",
  yearsActive : "2002-Present",
  family:{
    mother: "Siva Kumari",
    father: "Suryanarayana Raju U"

  }
  }
  console.log(prabhasDetails.family.mother)

}}>Objects</button>
<hr></hr>
<h1>Arrays</h1>
<button type="button" onClick={()=>{
 let kamalHaasanDetails = [
  "Parthasarathy Srinivasan 7-November 1954-age70",
  "Shruti","Akshara","Padma Shri (1990)","Padma Bhushan (2014)",
  ["Vikram","Anirudh","Fahad Fasil","Vijay Sethupati","Surya"]
]
console.log(kamalHaasanDetails);
console.log(kamalHaasanDetails[1])
console.log(kamalHaasanDetails[5][3])

}} >Arrays</button>
  <hr></hr>
  <h1>Object Destructuring</h1>
  <button type="button" onClick={()=>{
  let {firstName,lastName,born,education,occupation,yearsActive,family,mother,father} = prabhasDetails;

  console.log(firstName,lastName,born,education,occupation,yearsActive,family,mother,father)
  
  }}>Object Destructuring</button>
<hr></hr>
<h1>Arrays Destructuring</h1>
<button type="button" onClick={()=>{
  let [kamalHassanBorn,daughter1,daughter2,award1,award2] = kamalHaasanDetails;
  console.log(kamalHassanBorn,daughter1,daughter2,award1,award2)
}} >Arrays Destructuring</button>
    </div>
);
}

export default App;
