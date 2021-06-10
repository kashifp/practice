import PropTypes from 'prop-types'
import Button from './Button'

// Or take in const Header = (props) and refer to things with props.title

const Header = ({ title }) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Hello',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header