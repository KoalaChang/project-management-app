import { useImperativeHandle } from 'react';

export function useDialog(ref, dialog){
    
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }))
    
}