const PartTypes = ({ data, handlePartTypes }) => (

    <div className="App">
        <button onClick={handlePartTypes}>Buscar Partes</button>
        {data && data.map((item, i) => {
            return (
                <div key={i}>
                    <p>{item}</p>
                </div>
            )
        })}
    </div>
)

export default PartTypes