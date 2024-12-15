import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import { useState } from "react";

function App() {

  const [projectState, setProjectState] = useState({ 
  projectCreated: false, 
  projectSelected: undefined
  })

  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState({title:"", description:"", dueDate:"", task:""});

  // 處理Create project的狀態
  function handleCreate(){
    setProjectState({
      projectCreated: true,
      projectSelected: -1
    })
}

  // 處理目前使用者的輸入
  function handleChange(name, value){
      setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    } ))
  }

  // 當使用者按下save時 將value加進projects並管理projectState
  function handleSave(){
    if (projects == []){
      setProjects([value]);
      setProjectState((prevProjectState) => ({
        ...prevProjectState,
        projectCreated: false,
        projectSelected: 0
      }))

    }else {
      setProjects((prevProjects) => [...prevProjects, value]);
      setProjectState((prevProjectState) => ({
        ...prevProjectState,
        projectCreated: false,
        projectSelected: projects.length
      }))
    }

    setValue({title:"", description:"", dueDate:"", task:""});
  }
  console.log(projects);

  // 處理當使用者在Create page按下cancel的狀態
  function handleCancel(){
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      projectCreated: false,
      projectSelected: null
    }))
  }

  // 處理當使用者在Sidebar選擇某個project時的狀態
  function handleSelect(index){
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      projectSelected: index,
      projectCreated: false
    }))
  }

  // 處理當使用者在project page中clear task的情況
  function handleClear(taskIndex){
    try {
      const updatedProjects = [...projects];
      const updatedTasks = updatedProjects[projectState.projectSelected].task.filter(
        (_, index) => index !== taskIndex
      );
    
      updatedProjects[projectState.projectSelected] = {
        ...updatedProjects[projectState.projectSelected],
        task: updatedTasks,
    };
    setProjects(updatedProjects);
    } catch (error) {
      console.error("Error clearing task:", error);
    }
  }

  // 處理使用者add task的狀態
  function handleAdd(){
    try{
      const updatedProject = [...projects];

      updatedProject[projectState.projectSelected] = { 
      ...updatedProject[projectState.projectSelected], 
      task:[ 
      ...updatedProject[projectState.projectSelected].task, value.task
      ]}

      setProjects(updatedProject);
      setValue((prevValue) => ({
        ...prevValue,
        task: "",
      } ))

    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  // 處理使用者delete project的狀態
  function handleDelete(){
    const updatedProjects = [...projects];
    const editedProjects = updatedProjects.filter((_, index) => index !== projectState.projectSelected);
    setProjects(editedProjects);
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      projectSelected: null,
    }))
  }

  return (
    <main className="h-screen grid grid-cols-3">
      <SideBar projects={projects} onCreate={handleCreate} onSelect={handleSelect} selectedProject={projectState.projectSelected} />
      <MainPage 
      projectCreated={projectState.projectCreated} 
      onCreate={handleCreate} 
      onChange={handleChange} 
      onSave={handleSave} 
      selectedProject={projects[projectState.projectSelected]} 
      onAdd={handleAdd}
      onCancel={handleCancel}
      onClear={handleClear}
      input={value}
      onDelete={handleDelete}/>
    </main>
  );
}

export default App;
