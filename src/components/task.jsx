import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function TaskComponent({ task }) {

  return (
    <div className="max-h-72  w-[22.625rem] rounded-lg border border-white/20 bg-[#18191B80]/50 text-white">
      <CardContent>
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
        <Typography variant="h5" className="pb-2">
          {task.title}
        </Typography>
        <Typography>{task.body}</Typography>
      </CardContent>
    </div>
  );
}
