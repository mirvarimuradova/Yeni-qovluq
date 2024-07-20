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
        let surname = prompt(" soyadinizi daxil edin");
        age = prompt(" yasinizi daxil edin");
        if(i==0){
            user1 = [name, surname, age];
            console.log(user1)
        }
        else if(i==1){
            user2= [name,surname, age]
            console.log(user2)
        }
       else if(i==2){
        user3=[name,surname,age]
        console.log(user3)
       }
    
    }
    
}
array= [user1, user2,user3]
let max= user1[2];
if(user2[2]>max){
    max=user2[2]
}
else if(user3> max){
    max = user3[2];
}

console.log("en cox yas:" + max)











