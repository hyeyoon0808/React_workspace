'use strict'; //checks error and cause (mozilla)

const e = React.createElement; //create element

class LikeButton extends React.Component { //from v6 "class" is used / React.Component = parent
  constructor(props) { //
    super(props); //inherite
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    //<button onClick="this.setState({liked:true})"
    return e( //create element = button
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer); //render 화면변환시 다른페이지로 넘어가지않고 바뀌는 com만 변환.