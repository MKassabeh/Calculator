const btnNum = [...document.querySelectorAll(".btnCal")];


const btnOp = document.querySelectorAll(".btnOp");

let num1 ;

let num2;


const screen = document.getElementById("screen");


for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].addEventListener("click",(e) => {
        let firstEle = btnNum[i].textContent;
        screen.textContent= firstEle;
        firstEle=btnNum[i].textContent
    })
    
}
// const add = function add(){

//     var sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];

//     }
//     return sum
// }   



// const sub = function sub(){

//     var sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum -= arguments[i];

//     }
//     return sum
// }   

// const multi = function multi(){

//     var sum = 1;

//     for (let i = 0; i < arguments.length; i++) {
//         sum *= arguments[i];

//     }
//     return sum
// }   


// const divide = function divide(){

//     var sum = 1;

//     for (let i = 0; i < arguments.length; i++) {
//         sum /= arguments[i];

//     }
//     return sum
// }   


// const operator = function operator(){

//     for (let i = 0; i < btnNum.length; i++) {
//         btnNum[i].addEventListener("click", function() {
            
//             num1 = btnNum[i].value + btnNum[i].value
//             console.log(num1)
//         })

        
        
//     }
    
    
    // document.getElementById("add").addEventListener("click",()=>{

    //         console.log(num1)
    //     })

    // }


