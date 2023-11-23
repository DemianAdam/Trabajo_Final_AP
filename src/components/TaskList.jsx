import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';

const TaskList = ({ category }) => {
  return (
    <div className="mt-4">
      <Typography variant="h6">{category.title}</Typography>
      <Divider className="my-2" />
      <List>
        {category.tasks.map((task, index) => (
          <ListItem key={index}>
            <Typography variant="body1">
              <strong>{task.title}:</strong> {task.body}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
