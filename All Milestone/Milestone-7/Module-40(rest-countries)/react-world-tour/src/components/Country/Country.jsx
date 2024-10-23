
import './Country.css'

export default function Country({ country }) {
    const { flags, name } = country

    return (
        <div className='country'>
            <p>Country Name: {name.common}</p>
            <img src={flags.png} alt="" />
        </div>
    )
}
