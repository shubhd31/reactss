import * as React from 'react';
import "./Todo.css"
import TodoList from './TodoList';
import HeaderDate from './HeaderDate'
import { useCallback, useEffect } from "react";
import { useState } from 'react'


const Todo = () => {
  const [show, setShow] = useState(false)

  //Esc key
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setShow(show);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <>
      <div className="container_todo">
        <div className="row justify-content-center">
          <div className="col-sm-3 col-md-6 col-lg-4">
            <div className="card fw-bold shadow-sm">
              <div className="m-5">
                <HeaderDate />
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
