import { Typography, Grid, } from '@mui/material';
import Task from './task';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from "@mui/material/IconButton";
import TaskForm from './taskForm';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from 'notistack';

const TaskList = ({ taskListData, updateTasksList, removeTaskList }) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [isEditingTaskList, setIsEditingTaskList] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const taskConfig = {
    id: 0,
    title: "",
    body: "",
    label: "#F8BD1C",
  }

  const addTask = (task) => {
    const newTask = { ...task, id: taskListData.tasks.length };
    const newTasks = { ...taskListData, tasks: [...taskListData.tasks, newTask] };
    updateTasksList(newTasks);
    setIsCreatingTask(false)
    enqueueSnackbar('Tarea creada', { variant: 'success' });
  }

  const updateTask = (task) => {
    taskListData.tasks[task.id] = task;
    const newTasks = { ...taskListData, tasks: [...taskListData.tasks] };
    updateTasksList(newTasks);
    enqueueSnackbar('Tarea actualizada', { variant: 'info' });
  }

  const deleteTask = (taskId) => {
    const newTasks = { ...taskListData, tasks: taskListData.tasks.filter(task => task.id !== taskId) };
    updateTasksList(newTasks);
    enqueueSnackbar('Tarea eliminada', { variant: 'error' });
  }

  const editTaskList = (taskList) => {
    const newTaskList = { ...taskListData, title: taskList.title };
    updateTasksList(newTaskList);
    enqueueSnackbar('Lista actualizada', { variant: 'info' });
    setIsEditingTaskList(false);
  }

  const deleteTaskList = () => {
    removeTaskList(taskListData.id);
    enqueueSnackbar('Lista eliminada', { variant: 'error' });
    setIsEditingTaskList(false);
  }


  return (
    <div className='pr-4'>
      {isEditingTaskList ? (
        <div className='pb-4'>
          <TaskForm
            data={taskListData}
            submitFormData={editTaskList}
            submitText='Guardar'
            cancelForm={() => setIsEditingTaskList(false)}
            isEditingForm={"true"}
            deleteForm={deleteTaskList} />
        </div>
      ) : (
        <div className='pb-4'>
          <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
            <Typography className="py-1 font-semibold">
              {taskListData.title}
            </Typography>
            <IconButton color="primary" onClick={() => setIsEditingTaskList(true)}>
              <MoreHorizIcon></MoreHorizIcon>
            </IconButton>
          </div>
        </div>

      )}
      <div >
        {
          taskListData.tasks.map((task) => (
            <Grid key={task.id} className='pb-4'>
              <Task task={task} updateTask={updateTask} deleteTask={deleteTask} />
            </Grid>
          ))}
      </div>
      <div>
        {
          isCreatingTask ? (
            <TaskForm
              data={taskConfig}
              submitFormData={addTask}
              cancelForm={() => setIsCreatingTask(false)} />
          ) : (
            <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
              <Typography className="py-1 font-semibold">
                Añadir una tarea
              </Typography>
              <IconButton color="primary" onClick={() => setIsCreatingTask(true)}>
                <AddIcon></AddIcon>
              </IconButton>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TaskList;
