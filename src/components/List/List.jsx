import './List.css'
import { Link } from 'react-router-dom'

const List = ({ parts }) => (
    <div className='parts'>
        {parts.map((part, index) => (
            <Link to='/part' key={index} state={part}>
                <div className='part'>
                    <span className='name'>
                        <span className='index'>{index + 1}</span>
                        <span
                            className='part-name'
                            id={part.name}>
                            {part.name}
                        </span>
                    </span>
                    <div className='type-price'>
                        <span>{part.type}</span>
                        <span>{part.price}</span>
                    </div>
                </div>
            </Link>
        ))}
    </div>
)

export default List