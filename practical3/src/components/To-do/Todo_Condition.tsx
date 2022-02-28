import * as React from 'react';
import { useState } from 'react';
import { TodoInf } from '../interface/Infs';
import './AddTodo/AddTodo.css'

const Todo_Condition: React.FC<{
    item: TodoInf;
    handleDelete: (id: string) => void;
}> = ({ item, handleDelete }): JSX.Element => {

    const [listItem, setListItem] = useState<boolean>(false);

    const Status = (): void => {
        setListItem(!listItem);
    };

    const [check, setChecked] = useState(false);

    function changeStatus() {
        setChecked(!check);
    }


    return (
        <>
            <div className='Addtodo' onDoubleClick={() => handleDelete(item._id)} style={{ cursor: "pointer" }}>
                <span className={check ? 'checked' : ''}>{item.description}</span>
                <input className='checkbox' defaultChecked={check ? true : false} type={'checkbox'} onClick={changeStatus} />
            </div>
        </>
    );
};

export default Todo_Condition;