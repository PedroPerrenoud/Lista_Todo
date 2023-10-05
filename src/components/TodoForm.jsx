import {useState} from 'react';


  const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");



    const handleSubmit = (e) => {
    e.preventDefault(); //Previne que a página seja reccaregada quando o formulário for enviado
    if(!value || !category) return; //Evita que o formulário seja enviado de forma vazia ou null, parando o código
    addTodo(value, category) //Adiciona uma nova tarefa na lista, chamando a função addTodo e passando os valores de Value e Category
    setValue(''); 
    setCategory('');
    //os dois códigos acima limpam as áreas de preenchimento do formulário após seu envio.
  }

  return ( //Formulário para criação de novas tarefas:
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}> {/* Quando clicar, chama a função handleSubmit */}
        <input type="text" placeholder='Digite o Título' value={value} onChange={(e) => setValue(e.target.value)} />{/*O valor deste campo é controlado pelo estado value, e qualquer alteração no campo dispara a função onChange que atualiza o estado value com o valor digitado pelo usuário. */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} >
          <option value="">Selecione uma Gategoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

// Explicando a expressão (e) => setCategory(e.target.value)
{
  /*A expressão (e) => setCategory(e.target.value) é uma função de seta (arrow function) que lida com o evento onChange de um elemento HTML, como um <select> ou <input>. Vou explicar o que essa expressão faz em partes:

  1- (e) =>: Isso define uma função anônima que recebe um parâmetro 'e'. O parâmetro 'e' é frequentemente utilizado para representar um evento (como um evento de clique, de mudança, etc.) em manipuladores de eventos em JavaScript.

  2- setCategory(e.target.value): Dentro da função, 'e.target' refere-se ao elemento HTML que disparou o evento. No contexto de um evento 'onChange', 'e.target' se refere ao elemento que está sendo alterado, como um <select> ou <input>.

  'e.target.value' é a propriedade que contém o valor atual do elemento que está sendo alterado. No caso de um <select>, 'e.target.value' retornaria o valor da opção selecionada, e no caso de um <input>, retornaria o texto que foi digitado no campo de entrada.

  Portanto, a expressão '(e) => setCategory(e.target.value)' está definindo uma função que recebe um evento como entrada (geralmente gerado quando um usuário interage com um elemento de entrada, como selecionar uma opção de um dropdown) e, em seguida, atualiza o estado 'category' (provavelmente um estado React) com o valor atual do elemento que acionou o evento. Isso é comumente usado para atualizar o estado da aplicação conforme o usuário faz escolhas ou insere informações em campos de entrada.


*/}

export default TodoForm