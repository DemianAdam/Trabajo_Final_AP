import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskForm from './taskForm';
import { useState, useEffect } from "react";

export default function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

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
            isEditingForm={true}
            deleteForm={() => { deleteTask(task.id); setIsEditing(false) }}
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
                <IconButton color="primary" onClick={() => setIsEditing(true)}>
                  <MoreHorizIcon ></MoreHorizIcon>
                </IconButton>
              </div>
              <Typography className="py-1 font-semibold truncate">
                {task.title}
              </Typography>
              <OverlayScrollbarsComponent options={{ scrollbars: { theme: "os-theme-light" } }} className="break-words max-h-[10rem] min-h-[5rem] overflow-auto">
                <Typography className="pr-2" >{task.body}</Typography>
              </OverlayScrollbarsComponent>
            </CardContent>
          </div>
        )
      }</>
  );
}
