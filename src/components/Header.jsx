import './Header.css'
import Title from './Title/Title'

const Header = ({ title, types, type, onChangeDropDown, search, onChangeInput, listSort, sort }) => (
    
    <div className='header'>
        <Title title={title}/>
        <div className='menu'>
            <input value={search} onChange={onChangeInput}></input>
            <select value={type} id='types' onChange={onChangeDropDown}>
                {types.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <button onClick={listSort}>
                Price Order {sort ? <>&#x2191;</> : <>&#x2193;</>}
            </button>
        </div>
        <hr/>
    </div>
)

export default Header