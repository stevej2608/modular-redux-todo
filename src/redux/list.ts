import { createReduxModule } from 'hooks-for-redux';

const STORE_KEY = '@todo-app/list';

export interface TodoItem {
  id?: number;
  text: string;
}

type TodoList = TodoItem[];

// DEFINITION

const getUniqueId = (list: TodoList): number => (list.length > 0 ? Math.max(...list.map((t: any) => t.id)) + 1 : 1);

const initialState: TodoList = [
  { id: 1, text: 'clean the house' },
  { id: 2, text: 'buy milk' },
];

// EXPORTS

export const [useList, { addItem, deleteItem }] = createReduxModule(STORE_KEY, initialState, {
  // Add item to the todo list

  addItem: (list, item: TodoItem) => [...list, { ...item, id: getUniqueId(list) }],

  // Remove item from the todo list

  deleteItem: (list, item: TodoItem) => list.filter((todo) => todo.id !== item.id),
});
