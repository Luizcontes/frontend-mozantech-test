import './Header.css'

const Header = ({ types }) => (
    <div className='header'>
        {/* <h1>Store Parts</h1> */}
        <div className='menu'>
            <input></input>
            <select name='types' id='types'>
                {types.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <button>Price order &#x2191;</button>
        </div>
        <hr/>
    </div>
)

export default Header