//const a = 5 ;
//console.log(a);


//Let
var x = 10;
{
  let x = 2;
  console.log(x);
  
}
console.log(x); //output 2 10


//Const
var x = 10;
{
  const x = 2;
  console.log(x);
  
}
console.log(x); //output 2 10




//Arrow Function
const a = ()=>"HELLO WORLD";
console.log(a());

//Template Literal
const b = "Tawsif" ;
console.log(`Hello ${b}`);

//Arrow Function + Template Literal
const c = (name = "Aziz")=>`Hello ${name}`;
console.log(c());
console.log(c("Abid"));


//CallBack Function with constructor
class f{
    constructor (n){
        this.n=n;
     }

     sayHello(){
        setTimeout(() => {
            this.n;
            
        }, 1000);
    }
}
        const ab = new f("Ahnaf");
        console.log(ab.n);
        ab.sayHello();


      
    //Loops
    //For in Loop (Prints Index)
   let g =[2,4,5];

    for(let n in g){
        console.log(g[n]);
        
    }

   const person = {
    name : "Sakib" , 
    age : 25 
   }
   for (let n in person) {
    //console.log(person[n]);
    console.log(n + ":" + person[n]);
   }
  
  
   //For of loop (prints elements)
   let k =[2,4,5];

    for(let n of k){
        console.log(n);
        
    }


  //For Each Loop (Prints index , element , array)
   const bb = [1,2,3];
   bb.forEach((element,index,array) => {
    console.log(array);
    
   })


   //Spread Operator 

   const kk = [1,2,3,4,5]
   const ss = [...kk,6,7,8]
   console.log(ss);
   
//Spread Operator(property)

const Q={
    name : 'BMW' ,
    color: 'RED' 
}
const UpdatedQ={
    name : 'BMW' ,
    color: 'Green' 
}
const p ={...Q,...UpdatedQ};
console.log(p);

//Destructing

const persons = ['Tawsif' , 'Jahid' , 'Olive' ]
const[Good,,Bad]=persons
console.log(Good,Bad);//output Tawsif Olive

const persons2 = ['Tawsif' , 'Jahid' , 'Olive' ]
const[Good2,Bad2,,]=persons
console.log(Good2,Bad2);//output Tawsif Jahid


//Map(Manipulates full array)
const w = [2,3]
const r = w.map(c=>c*2)
console.log(r);

//Filter
const t = [5,10,11]
const tt = t.filter(c=>c%5==0)
console.log(tt);
 
//while string concat , we can use console.log(a+b) or console.log(a.concat(b))

//Replace Function :

const n = 'I Love Barcelona '
console.log(n.replace("Barcelona","Argentina"));


//ASYNCHRONOUS USING NORMAL CALLBACK FUNCTION 
console.log("Start");
function nn ()
{
    setTimeout(() => {
        let sum=0;
        for(i=0;i<100;i++){

            sum=sum + i ;
        }
        console.log(sum);
        
        
    }, 2000);

}

nn();
console.log("End");//Output = Start End 4950


//Promise Function

console.log("Start");
const prom = new Promise ((resolve,reject)=>{

    setTimeout(() => {
        let success = true
        if(success){
            resolve("Done")
        }
        else{
            reject("Not Done")
        }
        
    }, 2000);
})

prom.
then((message)=>console.log(message))
.catch((error)=>console.log(error));

console.log("End"); //OUTPUT : Start End Done



//Await Function

console.log("Start");

async function ee()
{
    await new Promise((resolve)=>{

    setTimeout(() => {
        let sum=0;
        for(i=0;i<100;i++){
            sum=sum+i ;
        }
        console.log(sum);
        resolve();
        
    }, 1000);
    
    })
}
ee();
console.log("End");



