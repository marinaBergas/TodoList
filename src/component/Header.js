import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

export const Header = ({head,onAdd,showTask}) => {
    const location = useLocation()
 
    return (
        <header className='header'>
            <h1 style={headingStyle}>todo List </h1>
            {
                location.pathname === '/' && 
               ( <Button text={showTask?'Close':'Add'} color={showTask?'red':'green'} onClick={onAdd} />)}
        </header>
    )
}
const headingStyle={
    color:'red'
}
// Header.defaultProps={
//     head:"2"
// }
// Header.propTypes={
//     head:PropTypes.string.isRequired,
// }