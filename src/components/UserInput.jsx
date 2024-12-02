export default function UserInput({label, textarea, onChange, ...prop}){
    const classname = "block bg-stone-300 outline-0 border-stone-800 border-b-2 w-full font-normal rounded-sm";

    //處理project input的改變
    function handleChange(event){
        const {name, value} = event.target;
        onChange(name, value);
    }

    return <label className='block uppercase my-5'>{label}
        {textarea ? 
        <textarea {...prop} onChange={handleChange} className={classname + "h-24"}/> : 
        <input {...prop} onChange={handleChange} className={classname} />}
    </label>
}