import { forwardRef, useRef } from 'react';
import { createPortal } from "react-dom"
import { useDialog } from '../hooks/useDialog';


const Modal = forwardRef(function Modal({children, buttonCaption}, ref){

    const dialog = useRef();
    
    useDialog(ref, dialog);

    return createPortal(<dialog className='backdrop:bg-stone-900/90 text-center p-8 rounded' ref={dialog}>
        {children}
        <form method="dialog">
            <button className='bg-stone-600 text-stone-200 px-3 py-2 mt-4 rounded hover:bg-stone-800'>{buttonCaption}</button>
        </form>
    </dialog>,
    document.getElementById("modal-root"))
})

export default Modal;