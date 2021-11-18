let numberbtn=document.querySelectorAll('.mybtn');
let operatorbtn=document.querySelectorAll('.myoperator');
let equalbtn=document.querySelector(".equal");
let first=document.querySelector(".previous-operand");
let second=document.querySelector(".current-operand");
let place=document.querySelector(".myoperatoris");
let finalresult=document.querySelector('.myresult');

//mylogic//

let firstNo = 0;
let secondNo = 0;
let currOperator = '';
let finalResult = 0;
let finalvalue=0;

numberbtn.forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (currOperator == '') {
            firstNo = numberAppend(firstNo, parseInt(item.innerHTML));
        } else {
            secondNo = numberAppend(secondNo, parseInt(item.innerHTML));
        }
        displayMe();
    });
});

function displayMe() {
    if (firstNo != 0) {
        first.innerHTML = firstNo;
    }
    if (currOperator != '') {
        place.innerHTML = currOperator;
        if (secondNo != 0) {
            second.innerHTML = secondNo;
        }
    }
}

function numberAppend(prev_num, append_num) {
    let result = (prev_num * 10) + append_num;
    return result;
}

//for operator//
operatorbtn.forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (currOperator == '') {
            currOperator = item.value;
        } else {
            if (finalvalue == 0) {
                myfun(); 
            } 
            let new_first_no = finalvalue;
            let curr_new_operator = item.value;
            myClear();
            firstNo = new_first_no; 
            currOperator = curr_new_operator;
        }
        displayMe();
    });
});

equalbtn.addEventListener("click", function(e) {
    myfun(); 
});

function myfun(){
    if (currOperator != '') {
        if (currOperator == '+') {
            finalvalue = firstNo + secondNo;
        } else if (currOperator == '-') {
            finalvalue = firstNo - secondNo;
        } else if (currOperator == 'X') {
            finalvalue = firstNo * secondNo;
        } else if (currOperator == '÷') {
            finalvalue = firstNo / secondNo;
        }
        finalresult.innerHTML = finalvalue;
    } 
}

function myClear(){
    let currentsecond=0;
    first.innerHTML='0';
    firstNo=0;
   
    second.innerHTML="";
    secondNo=0;
    place.innerHTML="";
    currOperator = "";
    finalvalue = 0;
    finalresult.innerHTML="";
}
// function myfun(){
//     if(currOperator==""){
//         finalresult.innerHTML =finalvalue;   
//     }
//     if (currOperator == '+') {
//      finalvalue = firstNo + secondNo;
//      finalresult.innerHTML =finalvalue;
//    }  if (currOperator == '-') {
//       finalvalue = firstNo - secondNo;
//       finalresult.innerHTML =finalvalue;
//     } if (currOperator == 'X') {
//      finalvalue = firstNo * secondNo;
//      finalresult.innerHTML =finalvalue;
//     } if (currOperator == '/') {
//     finalvalue = firstNo / secondNo;
//     finalresult.innerHTML =finalvalue;
//          }
    
// }
//  function nextFun(){
//  first.innerHTML=finalresult.innerHTML; 
//  console.log(first.innerHTML) ; 
//  }
