import * as React from 'react';
import { useState } from 'react';
import './AddTodo.css';

interface NewType {
    task: string;
    ischecked: boolean;
}

function AddTodo({ ischecked, task }: NewType): JSX.Element {

    const [check, setChecked] = useState(ischecked);

    function changeStatus() {
        setChecked(!check);
    }

    return (
        <>
            <div className='Addtodo'>
                <span className={check ? 'checked' : ''}>{task}</span>
                <input className='checkbox' defaultChecked={check ? true : false} type={'checkbox'} onClick={changeStatus} />
            </div>
        </>
    );
}

export default AddTodo;