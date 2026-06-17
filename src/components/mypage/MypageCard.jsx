import './MypageCard.css'

export function MypageCard({value, name}) {
    return (
        <>
        <div className='card-container'>
            <p className='card-content'> {value} </p>
            <p className='card-name'> {name} </p>
        </div>
        </>
    )
}