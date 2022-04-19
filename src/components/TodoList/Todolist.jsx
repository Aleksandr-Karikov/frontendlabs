import React, { useEffect, useState } from 'react'
import { Todo } from '../Todo/Todo'
import styles from './Todolist.module.scss'
const Todolist = ({ todos, remove, setTodo, refresh }) => {

    return (
        <div className={styles.todos} key={todos.length}>
            {
                !todos.length ? <div className={styles.App__empty}>Список пуст</div>
                    :

                    todos.map((value, index) => {
                        return <Todo
                            key={value.id}
                            todo={value}
                            remove={remove}
                            setTodo={setTodo}
                            number={index + 1}
                        />
                    })
            }
        </div>

    )
}

export default Todolist