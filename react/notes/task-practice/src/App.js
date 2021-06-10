import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  // const name = 'Bob'
  // const bVal = true

  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Eat breakfast',
            day: 'Jun 15th',
            reminder: true
        },
        {
            id: 2,
            text: 'Eat lunch',
            day: 'Jun 16th',
            reminder: true
        },
        {
            id: 3,
            text: 'Eat dinner',
            day: 'Jun 17th',
            reminder: true
        },
    ]) 

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
      {/* <h1>Hello {bVal ? 'To You' : 'Again'}</h1> */}
      {/* <h1>Hello again {name}</h1> */}
    </div>
  );
}

export default App;
