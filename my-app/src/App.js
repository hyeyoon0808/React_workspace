import React from "react"; //import React from 'react' library
//convert JSX into JavaScript
//JSX Wellformed - root element only one (<div> only one)
//               - element 중첩허용 안함
//               - <시작 attribute="value" 또는 attribute='value' />
//주석 {/*JSX주석*/} <element //js 주석 또는 /*js주석*/>
//class ->className
function App() {
  const name = "리액트";
  const size = 70;
  //삼항연산자 : 조건? 참:거짓
  return (
    //div class="App"
    <div>
      {/* JSX주석 -- JSX: html(text형태의 data)+{ES6(변수, 로직)}
      <h1>Hello {name === "리액트" ? name : "React"}</h1>*/}
      <h1>Hello {name === "뤼액트" && "리액트"}</h1>
      {/*뤼액트가 아닐땐 null*/}
      <font size={size} color="gray">
        fontsize
      </font>
    </div>
  );
}

export default App;
