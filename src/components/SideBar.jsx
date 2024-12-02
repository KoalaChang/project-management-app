import Button from "./Button";

export default function SideBar({onCreate, projects, onSelect, selectedProject}){

    return <aside className="bg-stone-800 h-screen px-10 py-16 col-span-1">
        <h1 className="text-white uppercase text-xl m-2 tracking-wider">Your Projects</h1>
        <Button position="sidebar-add" onClick={onCreate}>+ Add Project</Button>
        <div className="mt-5">
            <ul>
                {projects.map((project, index) => {
                    let classname = "text-stone-200 m-2 p-2 rounded-sm hover:bg-stone-600 hover:cursor-pointer";
                    if (index === selectedProject){
                        classname += " bg-stone-600";
                    }
                    return <li key={index} onClick={() => onSelect(index)} className={classname}>{project.title}</li>
                })}
            </ul>
        </div>
    </aside>
}