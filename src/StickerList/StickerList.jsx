import { Sticker } from '../Sticker/Sticker'
import { ListSticker } from './StickerList'

export const StickerList = ({data}) => {

    console.log(data)
    return (
        <ListSticker>
            {data.map((element) => {
                return (
                    <li key={element.label}>
                        <Sticker src={element.img} />
                    </li>
                )

            }
            )}
        </ListSticker>
    )
}
