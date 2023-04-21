import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from './components/createTasks';
import ListTask from './components/listTasks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateTask/>}/>
        <Route path="/" element={<ListTask/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
