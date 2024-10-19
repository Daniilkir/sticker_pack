import './App.css';
import StickerList  from './StickerList/StickerList.js';
import stickersData from './sticker.json'
import Choice from './Choice/Choice.jsx'
import React, { Component } from 'react'


class  App extends Component {
  state = {
    data:stickersData,
    choosedSticker:""
  }


choosenSticker = (event) => {
  this.setState({choosedSticker: event.currentTarget.className})
  // this.setState({choosedSticker: "34785"})
  // console.log(this.state.choosedSticker);
  
}

render(){

  return(
        <div className="App">
          <StickerList data={this.state.data} choosenSticker={this.choosenSticker}/>
          <Choice data={this.state.data} choosenSticker={this.state.choosedSticker}/>
        </div>
      );
      
}

}



export default App;
