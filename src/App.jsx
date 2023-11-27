import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { List, ListItem, Typography, Divider, Grid, Box } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import TaskList from "./components/taskList";
import TaskForm from './components/taskForm';
import { useEffect, useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';

/*const task = {
  title: "momo",
  body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
  label: "#F8BD1C",
}*/

/*const tasksList = [
  {
    id: "0",
    title: "Titulo 1",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
      {
        id: 1,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
    ],
  },
  {
    id: "1",
    title: "finalizado",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
      {
        id: 1,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
    ],
  },
  {
    id: "2",
    title: "wea",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
      {
        id: 1,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
    ],
  },
  {
    id: "3",
    title: "asd",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
      {
        id: 1,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
    ],
  },
  {
    id: "4",
    title: "aaa",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
      {
        id: 1,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      },
    ],
  },
];

const taskListexample = [
  {
    id: "1",
    title: "Titulo 1",
    tasks: [
      {
        id: 0,
        title: "momo",
        body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
        label: "#F8BD1C",
      }
    ],
  }
]*/

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const [isCreatingTaskList, setIsCreatingTaskList] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const taskListConfig = {
    title: ""
  }

  const addTaskList = (newData) => {
    const newTaskList = { ...newData, id: data.length, tasks: [] };
    setData([...data, newTaskList]);
    setIsCreatingTaskList(false)
    setCount(1);
    // localStorage.setItem('data', JSON.stringify([...data, newTaskList]));
  };

  const removeTaskList = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const updateTasksList = (updatedTaskList) => {
    const updatedData = data.map((item) => {
      return item.id === updatedTaskList.id ? updatedTaskList : item
    }
    );
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  };

  useEffect(() => {
    if (count) {
      enqueueSnackbar('Lista creada', { variant: 'success' });
    }
    else {
      setData(JSON.parse(localStorage.getItem('data')) || []);
    }
  }, [count]);


  useEffect(() => {
    if (count) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [count, data]);



  return (
    <OverlayScrollbarsComponent className="h-screen p-10">
      <div className='flex flex-row'>
        {
          data ? (
            <div className='flex'>
              {
                data.map((taskList) => (
                  <Grid item xs={1} sm={6} md={4} lg={3} key={taskList.id}>
                    <TaskList taskListData={taskList} updateTasksList={updateTasksList} removeTaskList={removeTaskList} />
                  </Grid>
                ))
              }
            </div>
          ) : (
            <div></div>
          )
        }
        <div>
          {
            isCreatingTaskList ? (
              <TaskForm
                data={taskListConfig}
                submitFormData={addTaskList}
                cancelForm={() => setIsCreatingTaskList(false)}
              />
            ) : (
              <div className="flex w-[22.625rem] items-center justify-between rounded-lg border border-white/20 bg-[#18191B80]/50 pb-1 pl-4 pr-3 pt-1 text-white">
                <Typography className="py-1 font-semibold">
                  Añadir una lista
                </Typography>
                <IconButton color="primary" onClick={() => setIsCreatingTaskList(true)}>
                  <AddIcon></AddIcon>
                </IconButton>
              </div>
            )
          }
        </div>
      </div>
    </OverlayScrollbarsComponent>
  );
}

export default App;
