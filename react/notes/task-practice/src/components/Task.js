import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    var remindSignal = !task.reminder ? 'reminder' : ''

    return (
        <div className= {'task ' + remindSignal } onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} {' '}
                <FaTimes style={{color:'red', cursor:'pointer'}} onClick={ () => onDelete(task.id) } />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task