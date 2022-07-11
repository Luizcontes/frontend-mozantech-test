import './List.css'

const List = ({ parts }) => (
    <div className='parts'>
        {parts.map((part, index) => (
            <div className='part' key={index}>
                <span className='name'>
                    <span className='index'>{index + 1}</span>
                    <span>{part.name}</span>
                </span>
                <div className='type-price'>
                    <span>{part.type}</span>
                    <span>{part.price}</span>
                </div>
            </div>
        ))}
    </div>
)

export default List