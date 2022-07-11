import './Part.css'

const Part = () => (
    <>
        <div className='back'>
            <p>&#x2190;</p>
        </div>
        <div className='info'>
            <span className='desc'>
                <span >{'name'}</span>
                <span>{'type'}</span>
                <span>{'price'}</span>
            </span>
            <div className='imgPreview'>
                <p>{'Image Preview'}</p>
            </div>
        </div>
    </>
)

export default Part