import React , {useState,useEffect} from 'react'; 
import axios from "axios";

function ListTasks(){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://127.0.0.1:8000/tasks/');
            setData(response.data);
          } catch (error) {
           console.log(error)
          }
        }

        fetchData();
    },[])

    const value = data.map((val) =>
    // const {task,completed,priority} = val;
        <div>
        <h1> Task: {val.task}</h1>
      <ul>
        <li>completed: {val.completed}</li>
      </ul>
      <ul>
        <li>priority: {val.priority}</li>
      </ul>
    </div>
    );   

    return (
        <div> 
            {value}
        </div>
        
      );


}

export default ListTasks