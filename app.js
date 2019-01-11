//custom function to access html element

function getElement(id){
  return document.querySelector(id);
}

//initalizing my variable with html element
let color=getElement(':root');
let arr=[];
let input= getElement('#i');
let result=getElement('#result');
let container =document.getElementById('container');
let arr2=[];

//creating a regular expression and passing it to a variable
let reg=/(^[a-zA-Z\s]+$)/g

//accessing css variable and updating it
color.style.setProperty('--color',' ');

//invoking the uppercase function that change every first letter to uppercase
input.oninput=upperCase;









function upperCase(){

if(input.value.trim().match(reg)!==null) {//removing whitespace and checking if the
                                            //input value match the regular expression that is pass
  arr=[];
  //empty the arr to always push new value
  arr.push(input.value);

  //pushing input value to the array

   arr=arr[0].split(' ');

   //splitting the arr by space and passing it back to the array


   for(i=0; i<arr.length; i++){//looping over the updated array

    let firstLetter= arr[i].charAt(0).toUpperCase();//accessing the first letter and changing it to upperCase


   arr[i]=firstLetter+arr[i].substring(1);//adding the remaning words the the first uppercase letter 

   }
   color.style.setProperty('--color2','');//updating the css variable


   result.innerHTML=arr.join().replace(/,/g,' ');

}else if(input.value.match(/(^[\s]+$)/g)||input.value===''){
    result.innerHTML='input is empty';
    color.style.setProperty('--color2','rgba(255, 0, 0, 0.5)');//updating the css variable

}else{
  result.innerHTML='wrong input';
color.style.setProperty('--color2','rgba(255, 0, 0, 0.5)');//updating the css variable
}

localStorage.setItem("lastname",[result.innerHTML,input.value] ) ;
//passing the input value and the result value to localStorage
}


input.onclick=()=>{
color.style.setProperty('--color','hsla(0, 0%, 0%, 0.7)');
//updating css variable
}




window.onload=()=>{
  if(localStorage.getItem('lastname')){//cheking if localStorage has content


  for(var i=0; i<localStorage.getItem('lastname').split(',').length; i++){
    //looping over localStorage to get its value
    if(i===0){

      //updating output with localStorage
      if(localStorage.getItem('lastname').split(',')[i]==='wrong input'){
        color.style.setProperty('--color2','rgba(255, 0, 0, 0.5)');//updating the css variable


      }else if(localStorage.getItem('lastname').split(',')[i]==='input is empty'){
        color.style.setProperty('--color2','rgba(255, 0, 0, 0.5)');//updating the css variable


      }else {
        color.style.setProperty('--color2','');


      }

      result.innerHTML=localStorage.getItem('lastname').split(',')[i];

    }else if(i===1){
      input.value=localStorage.getItem('lastname').split(',')[i];
    }
  }
}
}
