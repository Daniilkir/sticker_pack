import React, { Component } from 'react'

class Choice extends Component {



    render(){
        const findedSticker = this.props.data.find(stiker => stiker.label === this.props.choosenSticker);

        return(
            <div>
                <h2>Обраний стікер</h2>
                <div>
                    <img src={findedSticker === undefined ? " " : findedSticker.img} alt="" />
                    <p>{this.props.choosenSticker}</p>
                    
                </div>
            </div>
        )
    }
}

export default Choice
