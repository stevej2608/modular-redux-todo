import React from 'react';
import './ToDoItem.css';
import { deleteItem, TodoItem } from '../redux/list';

export const ToDoItem = ({ item }: { item: TodoItem }) => (
  <div className="ToDoItem">
    <p className="ToDoItem-Text">{item.text}</p>
    <button className="ToDoItem-Delete" onClick={() => deleteItem(item)}>
      -
    </button>
  </div>
);
