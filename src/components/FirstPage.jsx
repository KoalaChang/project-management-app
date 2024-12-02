import noProjects from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function FirstPage({onCreate}){
    return (
    <div className="col-span-2 content-center text-center">
        <img className="w-16 h-16 mx-auto" src={noProjects} alt="a picture of an empty task list"/>
        <h2 className="text-xl font-bold my-4 text-stone-800">No Project Selected</h2>
        <p className="my-2 text-stone-600">Select a project or get started with a new one</p>
        <Button position="first" onClick={onCreate}>Create New Project</Button>
    </div>
    )
}