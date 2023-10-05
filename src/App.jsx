import { useState } from 'react'

import './App.css';

import Todo from "./components/todo"
import TodoForm from "./components/TodoForm";
import Search from './components/Search';
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Vincular Banco de Dados",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Consertar Problemas no código",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState('Ascen')

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random()*10000), 
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null) //Se o Id for igual, ele retorna como nulo, apagando aquela tarefa, do contrario, ele é ignorado.
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];  //Indica que ele terá os mesmo elementos da lista original, mas não compartilhará a mesma referência de memória.
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    // Procura pelo id igual ao selecionado, e altera o valor booleano da variavel. Se estiver mostrando que isCompleted é false, ao clicar ele inverte o valor para true, dessa maneira se ele clicar novamente a variavel retorna ao false (contrário de true). Se o id não for igual, ele retorna o todo normal.
    setTodos(newTodos);

  }
  
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <Search 
        search={search} 
        setSearch={setSearch}
      />
      
      <Filter 
        filter={filter} 
        setFilter={setFilter} 
        setSort={setSort} 
      />

      <div className="todo-list">
        {todos
        .filter((todo) => 
          filter === "All" 
          ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted)

        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => //Faz a comparação entre dois elementos
          sort === 'Ascen' //Se o sort for 'Ascen' 
          ? a.text.localeCompare(b.text) 
          // Comparando com texto do item a (primeiro da lista) foir maior que o texto b vai ser forma Ascendente
          : b.text.localeCompare(a.text)) 
          //Mesmo que o de cima, porém ao contrário, me retornando de Z para A
          //Como ele identifica qual é menor? Pela Letra
        .map((todo) => (
          <Todo  //Importa o arquivo Todo
            todo={todo} 
            key={todo.id} 
            removeTodo={removeTodo}
            completeTodo={completeTodo} /> 
        ))}
      </div> 
      <TodoForm addTodo={addTodo} /> {/* Importa o arquivo TodoForm */}
    </div>
  )
}

export default App