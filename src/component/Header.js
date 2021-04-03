import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({head}) => {
    const onClick =()=>{
        console.log('object')
    }
    return (
        <header className='header'>
            <h1 style={headingStyle}>header {head}</h1>
            <Button text='hello' color='green' onClick={onClick}/>
            
        </header>
    )
}
const headingStyle={
    color:'red',backgroundColor:'yellow'
}
Header.defaultProps={
    head:"2"
}
Header.propTypes={
    head:PropTypes.string.isRequired,
}