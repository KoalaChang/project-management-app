export default function Tasks({task, onClear}){

    return (
        <div className="mt-6">
                <ul>
                    {task.map((item, index) => 
                    <li className="flex justify-between rounded py-5 px-4 hover:bg-stone-200" key={index}>{item}
                    <button onClick={() => onClear(index)} className="hover:text-red-600">Clear</button>
                    </li> )}
                </ul>
        </div>
    )
}