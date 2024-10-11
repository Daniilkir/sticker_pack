

export const Choice = ({data})=>{

    return(
        <div>
            <h2>Обраний стікер</h2>
            <div>
                <img src={data.src} alt="" />
                <p>{data.label}</p>
            </div>
        </div>
    )

}