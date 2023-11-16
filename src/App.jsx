import TaskComponent from "./components/task.component"
function App() {

  //un ejmplo de uso de la tarea
  const taskData = {
    title: 'momo',
    body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
    label: '#F8BD1C'
}

  return (
    <>
      <TaskComponent taskData={taskData}/>
    </>
  )
}

export default App
