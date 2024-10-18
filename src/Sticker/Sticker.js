import React, { Component } from 'react'

class Sticker extends Component {

    render(){

        // console.log(this.props.src)
        return(
        
            <div>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}


export default Sticker