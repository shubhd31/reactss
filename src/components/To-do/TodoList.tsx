import * as React from 'react';
import { useEffect, useState } from 'react';
import { TodoInf } from '../interface/Infs';
import TodoForm from './TodoForm';
import Todo_Condition from './Todo_Condition';
import './AddTodo/AddTodo.css'

const TodoList = (): JSX.Element => {
    const [itemList, setItemList] = useState<TodoInf[]>([]);
    const [show, setShow] = useState<boolean>(true);

    //Fetch Todo Items using useEffect
    useEffect((): void => {
        fetchItemList();
    }, []);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const scrollToBottom = () => {
        if (inputRef.current !== null) {
            inputRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    //Auto scroll to bottom
    React.useEffect(scrollToBottom, [itemList]);

    const fetchItemList = async (): Promise<void> => {
        try {
            const response: Response = await fetch(
                'https://todo-tsreact.herokuapp.com/todo',
            );
            const data = await response.json();

            setItemList(data.todo);
        } catch (error) {
            console.log('error', error);
        }
    };

    // Add Todo Item 
    const addTodoItem = async (todoItem: string): Promise<void> => {
        if (todoItem.trim().length > 0) {
            const res: Response = await fetch(
                'https://todo-tsreact.herokuapp.com/todo',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ description: todoItem }),
                },
            );
            const data = await res.json();

            setItemList([...itemList, data]);
        } else {
            alert('Please Enter Something');
        }
    };

    //Delete Todo Item
    const deleteTodoItem = async (_id: string) => {
        if (window.confirm('Confirm to delete this Todo?')) {
            await fetch(
                `https://todo-tsreact.herokuapp.com/${_id}`,
                {
                    method: 'DELETE',
                },
            );
            setItemList(itemList.filter((todo) => todo._id !== _id));
        }
    };

    // Escape & Enter Event
    const keyEvent = (e: { key: string }): void => {
        if (e.key == 'Enter') {
            addTodoItem;
        } else if (e.key == 'Escape') {
            setShow(true);
        }
    };

    return (
        <>
            <div className="col">
                <div className="todolistsrcoll">
                    {itemList.map((item: TodoInf) => {
                        return (
                            <Todo_Condition
                                item={item}
                                key={item._id}
                                handleDelete={deleteTodoItem}
                            />
                        );
                    })}
                    <div ref={inputRef} />
                </div>
                {!show ? (
                    <TodoForm handleAdd={addTodoItem} keyEvent={keyEvent} setShow={setShow} />
                ) : null}
            </div>
            <div className="position-relative  d-flex justify-content-center">
                <button
                    className="position-absolute text-muted Add_btn"
                    onClick={() => setShow(false)}
                    style={{
                        display: show ? 'block' : 'none',
                    }}>
                    +
                </button>
            </div>
        </>
    );
};

export default TodoList;