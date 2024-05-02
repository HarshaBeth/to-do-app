import { useEffect, useState } from "react";
import Task from "./Task";


function App() {
  const [quote, setQuote] = useState("");
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    
    setTodos([...todos, input]);
    setInput("");
  }

  const deleteItem = (index) => {
    let itemsCopy = [...todos];

    itemsCopy.splice(index, 1);
    setTodos(itemsCopy);
  }

  const updateItem = (index) => {
    let itemsCopy = [...todos];

    let updatedText = prompt('Update current task:', "enter here");
    if (updatedText !== ''){
      itemsCopy[index] = updatedText;
    }

    setTodos(itemsCopy);
  }
  

  useEffect(() => {
    
    const ind = Math.floor(Math.random() * 16);
    const fetchQuote = async() => (
      
      await fetch(`https://type.fit/api/quotes`).then((res) => res.json())
      .then((data) => {setQuote("\"" + data[ind].text + "\"")})
    )
    
    fetchQuote();
  }, [])
  

  return (
    <div className="h-screen w-full flex flex-col items-center">

      <h1 className="text-4xl font-bold underline">The TODO App!</h1>

      <p className="text-3xl font-serif p-10">
        {quote === "" ? "loading Quote..." : quote}
      </p>


      {/* Form to enter the todo task */}
      <form action="" className="flex flex-row gap-5">
        <input className="border border-black h-10" value={input} onChange={e => setInput(e.target.value)}/>
        <button className="border rounded-full text-white bg-gray-400 hover:bg-gray-950 transition-all w-28 font-mono"
        type="submit"
        onClick={addTodo}>Add Task</button>
      </form>


      <p className="pt-10 text-2xl border-b-2 border-gray-700 text-gray-700 font-mono uppercase mb-3">List of todos</p>
      
      <div className="grid grid-cols-3 gap-2">

        {todos.map((todo, index) => (
            <Task index={index} name={todo} onDelete={deleteItem} onUpdate={updateItem} />        
        ))}

      </div>
      

    </div>
  );
}

export default App;
