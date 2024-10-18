import React, { Component } from 'react'
import Sticker from '../Sticker/Sticker'
import { ListSticker } from './ListSticker'

class StickerList extends Component {



    render(){

        // console.log(this.props.data)
        return (
            <ListSticker>
                {this.props.data.map((element) => {
                    return (
                        <li key={element.label} className={element.label} onClick={this.props.choosenSticker}>
                            <Sticker src={element.img} />
                        </li>
                    )
        
                }
                )}
            </ListSticker>
        )
    }
}

export default StickerList
// export const StickerList = ({data}) => {

// }
