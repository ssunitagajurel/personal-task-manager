import React , {useState} from 'react'; 
import axios from "axios";

// function name should be capital to use it as REact function  
function CreateTodo(){
    const [task, setTask] = useState(''); 
    const [description,setDescription] = useState('');
    const[completed,setCompleted] = useState(false); 
    const [priority,setPriority]  = useState("medium");

    const handleSubmit = (e) => {
        const newTask = {
            task:task,
            description: description,
            completed: completed,
            priority: priority
          };
  
        alert(`hello I am clicked! ${task}`)
        
        axios.post('http://127.0.0.1:8000/tasks/', newTask).then(()=>{
            console.log(Response)
        })
      };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Task:
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          </label>
          <br />
          <label>
            Completed:
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          </label>
          <br />
          <label>
            Priority:
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <br />
          <button type="submit">Add Todo</button>
        </form>
      );
}

export default CreateTodo;
