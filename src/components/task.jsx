import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { WrapText } from "@mui/icons-material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskForm from './taskForm';
import { useState, useEffect } from "react";

export default function Task({ task, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const editTask = () => {
    setIsEditing(true);
  }

  const submitFormData = (editedTask) => {
    updateTask(editedTask);
    setIsEditing(false);
  }


  return (
    <>
      {
        isEditing ? (
          <TaskForm 
          data={task} 
          submitFormData={submitFormData}
          cancelForm={() => setIsEditing(false)}
          submitText='Guardar'
           />
        ) : (
          <div className="max-h-72  w-[22.625rem] rounded-lg border border-white/20 bg-[#18191B80]/50 text-white">
            <CardContent>
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="8"
                  viewBox="0 0 60 8"
                  fill="none"
                  className="my-2"
                >
                  <rect width="60" height="8" rx="4" fill={task.label} />
                </svg>
                <IconButton color="primary" onClick={editTask}>
                  <WrapText ></WrapText>
                </IconButton>
              </div>
              <Typography variant="h5" className="pb-2">
                {task.title}
              </Typography>
              <Typography>{task.body}</Typography>
            </CardContent>
          </div>
        )
      }</>
  );
}
