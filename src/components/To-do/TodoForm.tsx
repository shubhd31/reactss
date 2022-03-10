import * as React from 'react';
import { FC, useState } from 'react';

interface props {
    keyEvent: KeyEve;
    handleAdd: AddTodo;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
type AddTodo = (text: string) => void;
type KeyEve = (e: { key: string }) => void;

const TodoForm: FC<props> = ({ handleAdd, keyEvent, setShow }): JSX.Element => {
    const [text, setText] = useState<string>('');

    // onCHange input Event 
    const onChangeItem = (e: React.FormEvent<HTMLInputElement>): void => {
        setText(e.currentTarget.value);
    };

    // onSubmit Event (Button Click)
    const handleData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleAdd(text);
        setText('');
    };


    return (
        <>
            <form onSubmit={handleData}>
                <div className=" justify-content-center ">
                    <input
                        type="text"
                        className="input form-control form-control-sm"
                        placeholder='Enter the task here!'
                        value={text}
                        onChange={onChangeItem}
                        onKeyDown={keyEvent}
                        autoFocus
                        required
                    />
                    <div>
                        <button className='btn btn-success btn-sm' type="submit">Add</button>
                        <button className='btn btn-outline-danger float-end btn-sm' onClick={() => setShow(true)} type="button">Cancel</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default TodoForm;