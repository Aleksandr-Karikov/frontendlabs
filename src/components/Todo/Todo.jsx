import React, { useState } from 'react'
import { Button } from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import styles from './Todo.module.scss';
import close from '../../images/icons/delete.png'
import close_white from '../../images/icons/delete-white.png'
import accept from '../../images/icons/free-icon-check-mark-64484.png'
import notAccept from '../../images/icons/blank-square_icon-icons.com_72853.png'
import classNames from 'classnames';

export const Todo = ({ number, todo, remove, disabled = false, setTodo }) => {
    const background = todo.completed ? number % 2 === 0 ? "rgb(154, 154, 154)" : "grey" : number % 2 === 0 ? "white" : "rgb(235,232,232)"
    const textDecoration = todo.completed ? "line-through" : "none"
    const color = todo.completed ? "white" : "black"
    return (
        <div className={classNames(styles.todo, styles["todo--enter"])} style={{ background: background, color: color, "--delay": number }}>
            <div className={styles.todo__content} onClick={() => {
                setTodo({ ...todo, completed: !todo.completed });
            }}>
                <img src={todo.completed ? accept : notAccept} alt="" className={styles.todo__checkbox}></img>
                <div className={styles.todo__text} style={{ textDecoration: textDecoration }}>
                    {todo.title}
                </div>
            </div>

            <img src={todo.completed ? close_white : close} className={styles.todo__btn} onClick={() => remove(todo)}></img>
        </div>
    )
}
