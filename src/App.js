import './App.css';
import { StickerList } from './StickerList/StickerList.jsx';
import stickersData from './sticker.json'
import { Choice } from './Choice/Choice.jsx'
import react, { Component } from 'react'


class  App extends Component {
  state = {data:stickersData}

// getInfo (event) => {
//     return(
//         console.log(123)
//     )
// }
render(){
  // console.log(this.state.data);

  return(
        <div className="App">
          <StickerList data={this.state.data} />
          <Choice data={this.state.data} />
        </div>
      );
      
}

}



export default App;
