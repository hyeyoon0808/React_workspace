import React, { Component } from 'react';
//if you import more than one, component,...등으로 해서 추가 import시킨다.

class App extends Component {
    render() {
        const name="Hyeyoon Cho";
        return (
            <div>
                <h1>안녕하세요. {name}님.</h1>
            </div>
        );
    }
}

export default App;