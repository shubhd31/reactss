import * as React from 'react';
import AddTodo from './AddTodo';


function TodoItems(props: object): JSX.Element {

    const todolists = [
        {
            key: 1,
            description: 'Buy new sweatshirt',
            isComplete: true
        },
        {

            key: 2,
            description: 'Begin promotional phase',
            isComplete: true
        },
        {
            key: 3,
            description: 'Read an article',
            isComplete: false
        },
        {
            key: 4,
            description: 'Try not to fall asleep',
            isComplete: false
        },
        {
            key: 5,
            description: "Watch 'Sherlock'",
            isComplete: false
        },
        {
            key: 6,
            description: 'Begin QA for the product',
            isComplete: false
        },
        {
            key: 7,
            description: 'Go for a walk',
            isComplete: false
        }
    ];

    return (
        <>
            {
                todolists.map((item) => {
                    return <AddTodo key={item.key} task={item.description} ischecked={item.isComplete} />
                })
            }
        </>
    );
}

export default TodoItems;