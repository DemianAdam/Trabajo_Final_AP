import React from 'react';
import { List, ListItem, Typography, Divider, Grid, Box } from '@mui/material';
import Task from './task';
import TaskForm from './taskForm';
import { WrapText } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";


const TaskList = ({ taskListData }) => {
  return (
    <div className='pr-4'>
      <div className='pb-4'>
        <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
          <Typography className="py-1 font-semibold">
            {taskListData.title}
          </Typography>
          <IconButton color="primary">
            <WrapText></WrapText>
          </IconButton>
        </div>
      </div>
      <div >
        {taskListData.tasks.map((task) => (
          <Grid key={task.id} className='pb-4'>
            <Task task={task} />
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
