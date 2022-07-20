import './Part.css'
import Title from '../Title/Title'
import { Link, useLocation } from 'react-router-dom'


const Part = ({ title }) => {

    const { name, type, price } = useLocation().state

    return (
        <>
            <Title title={title}/>
            <div className='back'>
                <Link to='/' state={'Todos'}>
                    &#x2190;
                </Link>
            </div>
            <div className='info'>
                <span className='desc'>
                    <span >Name: <b>{name}</b></span>
                    <span>Type: <b>{type}</b></span>
                    <span>Price: <b>{price}</b></span>
                </span>
                <div className='imgPreview'>
                    <p>
                        {name}<br />
                        Image Preview
                    </p>
                </div>
            </div>
        </>
    )
}

export default Part