import * as React from 'react';
import "./Todo.css"
import TodoItems from './TodoItems';
import HeaderDate from './HeaderDate'

const Todo = () => {
  return (
    <>

      <div className="container_todo">
        <div className="row justify-content-center">
          <div className="col-sm-3 col-md-6 col-lg-4">
            <div className="card fw-bold shadow-sm">
              <div className="m-5">
                <HeaderDate />
                <div className="col">
                  <TodoItems />
                  <div className="position-relative d-flex justify-content-center">
                    <button className="position-absolute text-muted Add_btn ">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Todo;
