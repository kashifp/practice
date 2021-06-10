import PropTypes from 'prop-types'
import Button from './Button'

// Or take in const Header = (props) and refer to things with props.title

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text={showAdd ? 'Collapse' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task React Practice',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header