import './Header.css'
import Title from '../Title/Title'

const Header = ({ props }) => {
    const { title, types, type, onChangeDropDown, search, onChangeInput, listSort, sorted } = props

    return (
        <div className='header'>
            <Title title={title} />
            <div className='menu'>
                <input
                    value={search}
                    placeholder='Search item'
                    onChange={onChangeInput}
                />
                <select value={type} id='types' onChange={onChangeDropDown}>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                <button onClick={listSort}>
                    Price Order {sorted ? <>&#x2191;</> : <>&#x2193;</>}
                </button>
            </div>
            <hr />
        </div>
    )
}

export default Header