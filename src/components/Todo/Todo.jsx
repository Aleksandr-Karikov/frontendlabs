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
    const background = todo.checked ? number % 2 === 0 ? "rgb(154, 154, 154)" : "grey" : number % 2 === 0 ? "white" : "rgb(235,232,232)"
    const textDecoration = todo.checked ? "line-through" : "none"
    const color = todo.checked ? "white" : "black"
    return (
        <div className={classNames(styles.todo,styles["todo--enter"])} style={{ background: background, color: color,"--delay": number }}>
            <div className={styles.todo__content} onClick={() => {
                setTodo({...todo,checked:!todo.checked,time: new Date()});
              }}>
                <img src={todo.checked ? accept : notAccept} alt="" className={styles.todo__checkbox}></img>
                <div className={styles.todo__text} style={{  "text-decoration": textDecoration }}>
                    {todo.text}
                </div>
                {
                    
            todo.checked ?
                <div className={styles.time}>{"Выполнил в " + todo.time.getHours()+":" + todo.time.getMinutes()+":" + todo.time.getSeconds()}</div>
             : <></>}
            </div>
            
            <img src={todo.checked ? close_white : close} className={styles.todo__btn} onClick={() => remove(todo)}></img>
        </div>
    )
}
