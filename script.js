// let x=document.querySelector("#age");
// let y=document.querySelector("#name");
// document.querySelector("#btn").addEventListener("mouseover", ()=>{
// 	alert(x.value);
// })

// document.querySelector("#btn").addEventListener("click", (event) => {
//   event.preventDefault();

//   let age = document.querySelector("#age").value;
//   let name = document.querySelector("#name").value;

//   new Promise((resolve, reject) => {
//     if (age > 18) {
//       setTimeout(() => {
//         resolve(`Welcome, ${name}. You can vote.`);
//       }, 4000);
//     } else {
//       reject(`Oh sorry ${name}. You aren't old enough.`);
//     }
//   })
//   .then(message => {
//     alert(message);
//   })
//   .catch(message => {
//     alert(message);
//   });
// });


document.querySelector("#btn").addEventListener("click", (event) => {
  event.preventDefault();

  let age = document.querySelector("#age").value;
  let name = document.querySelector("#name").value;

  new Promise((resolve, reject) => {
    // Check if inputs are empty
    if (age === "" || name === "") {
      reject("Please enter valid details");
    } 
    // Check if age is above 18
    else if (age > 18) {
      // If yes, resolve the promise after 4 seconds
      setTimeout(() => {
        resolve(`Welcome, ${name}. You can vote.`);
      }, 4000);
    } else {
      // If no, reject the promise immediately
      reject(`Oh sorry ${name}. You aren't old enough.`);
    }
  })
  .then(message => {
    alert(message);
  })
  .catch(message => {
    alert(message);
  });
});