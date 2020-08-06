//import React, { Component } from 'react';
//javascript language / react가 필요없음
var a = "global variable";
function datascope() {
    let a = "function variable";
    if(true){
        let a = "if block local variable"; //var는 마지막에 선언된 value를 값으로 유지                                  
        console.log(a);                    //let은 값유지 한 함수안에 중복 선언 안됨
    }
    console.log(a);
}
console.log("function call before :" +a);
datascope();
console.log("function call after :" +a);


//export default datascope;