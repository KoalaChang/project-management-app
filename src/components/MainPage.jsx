
import ProjectPage from './ProjectPage';
import FirstPage from './FirstPage';
import CreatePage from './CreatePage';

export default function MainPage({
    onCreate, 
    projectCreated, 
    onChange, 
    onSave, 
    selectedProject, 
    onAdd, 
    onCancel, 
    onClear, 
    input, 
    onDelete
}){

    

    return <>
        

        {(!projectCreated && !selectedProject) && <FirstPage onCreate={onCreate} />}

        { (projectCreated && !selectedProject) && 
        <CreatePage 
            onCancel={onCancel} 
            onChange={onChange} 
            onSave={onSave} 
            input={input}/> }

        { (selectedProject && !projectCreated) && 
        <ProjectPage 
            onDelete={onDelete} 
            input={input} 
            onClear={onClear} 
            onAdd={onAdd} 
            onChange={onChange} 
            title={selectedProject.title} 
            description={selectedProject.description} 
            dueDate={selectedProject.dueDate} 
            task={selectedProject.task} /> }
    </>
}