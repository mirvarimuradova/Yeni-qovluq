// let a=[ 1,2,3,4,5,6,7,8,9,10];
// let sum ="";
// let bir ="";
//  for(let i=a.length-1; i>-1; i--){
//   sum+= a[i] + " ";


//  }
//  console.log(sum);
//  for(let i=0;i< a.length-1;i++){

//     bir+=a[i+1] + " ";
//     i+=1;

//  }
//  console.log(bir)
let array = [];
let user1 = [], user2=[], user3=[];
let age = 0;

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 1; j++) {

        let name = prompt(" Adinizi daxil edin");
        while(name=="" ||  !isNaN(name.slice(0,1))){
            name=prompt("adinizi duzgun daxil edin")
        }
        let surname = prompt(" soyadinizi daxil edin");
        while(surname=="" ||  !isNaN(surname.slice(0,1))){
            surname=prompt("soyadinizi duzgun daxil edin")
        }
        age = prompt(" yasinizi daxil edin");
        age = parseInt(age);
        while(isNaN(age) || age=="" || age<0 ){

            age=prompt("yasinizi duzgun daxil edin")

        } 
        if(i==0){
            user1 = [name, surname, age];
            if(user1[2]<18){
                console.log(user1 + " yeniyetmedir")
            }
            else if(user1[2]<30){
                console.log( user1 +"  gencdir");

            }
            else if(user1[2]>30){
                console.log(user1 + " orta yaslidir")
            }
           
        }
        
        else if(i==1){
            user2= [name,surname, age]
            if(user2[2]<18){
                console.log(user2 + " yeniyetmedir")
            }
            else if(user2[2]<30){
                console.log( user2 +" gencdir");

            }
            else if(user2[2]>30){
                console.log(user2 + " orta yaslidir")
            }
        }
       else if(i==2){
        user3=[name,surname,age]
        if(user3[2]<18){
            console.log(user3 + " yeniyetmedir")
        }
        else if(user3[2]<30){
            console.log( user3 +" gencdir");

        }
        else if(user3[2]>30){
            console.log(user3 + " orta yaslidir")
        }
       }
    
    }
    
}
array= [user1, user2,user3]
let max= user1[2];
let min = user1[2];

if(user2[2]>max){
    max=user2[2]
}
 if(user3[2]> max){
    max = user3[2];
}

console.log("en cox yas:" + max);
if(user2[2]< min){
    min= user2[2];
}
if(user3[2]<min){
    min= user3[2]
}
console.log("en az yasi olan:" + min)

//elifba sirasina gore siralamaq

let username =[];
let usersurname=[];
let userage =[];
console.log("\nElifba sirasina gore siralamaa:")
array.sort();
for(let i=0;i<array.length;i++){
   for(let j=0;j< array[i].length;j++){
    username =array[i][j-2];
    usersurname =array[i][j-1];
    userage = array[i][j];
  
   }
   console.log(username + " " + usersurname + " "+ userage)
   
   }
   
//sonu ov,ova ile bitenler
console.log("\nSoyadi ov, ova ile bitenler:")
for(let i=0;i<array.length;i++){
    if(array[i][1].slice(-2)=="ov" || array[i][1].slice(-2)=="va" || array[i][1].slice(-2)=="ev" ){
        console.log(array[i][0] +" " + array[i][1])
    }
}









