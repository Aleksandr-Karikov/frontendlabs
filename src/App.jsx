import axios from 'axios';
import { useState, useEffect } from 'react';
import TodoSerice from './api/TodoService';
import styles from './App.module.scss';
import Todolist from './components/TodoList/Todolist';

function App() {
  const filters = { ALL: 'all', DONE: 'done', NOTDONE: 'notdone' };
  const [moks, setMoks] = useState([])
  const [filter, setFilter] = useState(filters.ALL);
  const [textArea, setTextArea] = useState("");
  const [isTodosLoadings, setIsTodoLoading] = useState(false);
  async function fetchTodos() {
    setIsTodoLoading(true);
    const todos = await TodoSerice.getAll();
    setIsTodoLoading(false);
    setMoks(todos);
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  const addTodo = () => {
    if (textArea) {
      for (let mok of moks) {
        if (mok.title === textArea) {
          alert("Такое дело уже есть");
          return;
        }
      }
      setMoks([{ id: Date.now(), title: textArea, completed: false }, ...moks])
      setTextArea("");
    }
    else alert("Поле ввода пустое")
  }
  const removeTodo = (todo) => {
    setMoks(moks.filter((value) => value.id !== todo.id));
  }

  const getFiltered = (filterType) => {
    switch (filterType) {
      case filters.ALL:
        return moks;
      case filters.DONE:
        return moks.filter((value) => value.completed)
      case filters.NOTDONE:
        return moks.filter((value) => !value.completed)
    }
  }

  const updateTodo = (todo) => {
    const updateMoks = moks;
    for (let mok of updateMoks) {
      if (mok.id === todo.id) {
        mok.completed = todo.completed;
        mok.time = todo.time;
      }
    }
    setMoks([...updateMoks]);
  }

  return (
    <div className={styles.App}>
      <div className={styles.head}>
        <h1>Список дел</h1>
        <div className={styles.add}>
          <input placeholder='Новое дело?' value={textArea} onChange={(e) => setTextArea(e.target.value)} className={styles.add__content} />
          <div className={styles.add__button}>
            <button onClick={addTodo} >Добавить</button>
          </div>
        </div>
      </div>
      {
        isTodosLoadings ? <div style={{ height: '70vh' }}>Идет загрузка...</div> : <Todolist todos={getFiltered(filter)} remove={removeTodo} setTodo={updateTodo} />
      }



      <div className={styles.App__filter}>
        <div onClick={() => {
          setFilter(filters.DONE)
        }} className={filter === filters.DONE ? styles.App__marked : styles.App__unMarked}>Сделано({getFiltered(filters.DONE).length})</div>
        <div onClick={() => {
          setFilter(filters.NOTDONE)
        }} className={filter === filters.NOTDONE ? styles.App__marked : styles.App__unMarked}>Не сделано({getFiltered(filters.NOTDONE).length})</div>
        <div onClick={() => {
          setFilter(filters.ALL)

        }} className={filter === filters.ALL ? styles.App__marked : styles.App__unMarked}>Все({getFiltered(filters.ALL).length})</div>
      </div>
    </div>
  );
}

export default App;
