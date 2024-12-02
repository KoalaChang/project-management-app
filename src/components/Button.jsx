export default function Button({position, onClick, children}){

    let cssClass;

    if ( position === "first" ){
        cssClass = "bg-stone-500 text-stone-300 m-2 px-3 py-2 rounded hover:bg-stone-300 hover:text-stone-800"
    } else if(position === "create-save"){
        cssClass = "bg-stone-700 text-white px-4 py-2 rounded hover:bg-stone-950"
    } else if (position === "create-cancel"){
        cssClass = "bg-white px-4 py-2 rounded mr-2 hover:bg-stone-100"
    } else if (position === "sidebar-add") {
        cssClass = "bg-stone-500 text-stone-300 mx-2 my-6 px-3 py-2 rounded hover:bg-stone-300 hover:text-stone-800"
    } else if (position === "task-add") {
        cssClass = "p-2 rounded hover:bg-stone-300 hover:text-stone-50"
    }

    return (
        <button type="button" onClick={onClick} className={cssClass}>{children}</button>
    )
}