import React, { Component } from 'react'

class Choice extends Component {

    includes = (element) => {
        while (element.keys !== this.props.choosenSticker) {
            
        }
    }

    render(){


        return(
            <div>
                <h2>Обраний стікер</h2>
                <div>
                    {/* <img src={this.props.data.src} alt="" /> */}
                    {this.props.data.find()}
                    <p>{this.props.choosenSticker}</p>
                </div>
            </div>
        )
    }
}

export default Choice
