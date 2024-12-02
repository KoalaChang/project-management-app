import { useRef } from 'react';
import UserInput from './UserInput';
import Modal from './Modal';
import Button from './Button';

export default function CreatePage({onCancel, onChange, onSave, input}){

    const modal = useRef();

    function handleSave(){
        if (input.title.trim() === "" || 
            input.description.trim() === "" || 
            input.dueDate.trim() === ""){
          modal.current.open();
          return;
        }
        //將儲存在value的值存到array裡
        onSave();
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-2xl text-stone-800 font-bold mb-3'>Invalid Input</h2>
            <p className='mt-4 mb-2 text-stone-600'>Oops...looks like you forgot to enter a value.</p>
            <p className='my-2 text-stone-600'>Please make sure you provide a valid value for every input field.</p>
        </Modal>

        <form className="col-span-2 ml-8 mr-20 content-center">
            <div className="text-right">
                <Button position="create-cancel" onClick={onCancel}>Cancel</Button>
                <Button position="create-save" onClick={handleSave} >Save</Button>
            </div>
            <div className="text-left text-stone-500 font-bold">
                <UserInput name='title' onChange={onChange} label="title" />
                <UserInput name='description' onChange={onChange} label="description" textarea/>
                <UserInput name='dueDate' type='date' onChange={onChange} label="due date" />
            </div>
        </form>
        </>
    )
}