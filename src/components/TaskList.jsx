import React from 'react';
import { List, ListItem, Typography, Divider, Grid, Box } from '@mui/material';
import TaskComponent from './task.component';
import Categoria from './categoria';
import TaskForm from './TaskForm';

const TaskList = ({ taskListData }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Categoria title={taskListData.title} />
        </Grid>
        <Divider className="my-2" />
        {taskListData.tasks.map((task) => (
          <Grid item xs={12} key={task.id}>
            <TaskComponent taskData={task} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <TaskForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskList;
