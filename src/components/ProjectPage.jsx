import { useRef } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Tasks from "./Tasks";

export default function ProjectPage({title, dueDate, description, task, onChange, onAdd, onClear, input, onDelete}){

    const modal = useRef();

    function handleChange(event){
        const {value} = event.target;
        onChange('task', value);
    }

    function handleAdd(){
        if (input.task.trim() === ""){
          modal.current.open();
          return;
        }
        onAdd();
    }

    return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-2xl text-stone-800 font-bold mb-3'>Invalid Input</h2>
            <p className='mt-4 mb-2 text-stone-600'>Oops...looks like you forgot to enter a value.</p>
            <p className='my-2 text-stone-600'>Please make sure you provide a valid value for task input field.</p>
    </Modal>
    <div className="col-span-2 ml-8 mr-36 mt-20">
        <div className="relative">
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className="absolute top-3 right-3">
                <button onClick={onDelete} className="hover:text-red-600">Delete</button>
            </div>
            <p className="text-stone-400 mt-2 mb-6">{dueDate}</p>
            <p className="pb-16 leading-6 whitespace-pre-wrap">{description}</p>
        </div>
        <hr />
        <div>
            <h3 className="text-2xl font-bold my-6">Tasks</h3>
            <div className="flex items-center gap-4">
                <input value={input.task} onChange={handleChange} className="bg-stone-300 w-64 rounded-sm" />
                <Button position="task-add" onClick={handleAdd}>Add Task</Button>
            </div>

            {task.length > 0 && <Tasks onClear={onClear} task={task}/>}
            
        </div>
    </div>
    </>
    )
}