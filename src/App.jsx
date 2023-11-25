import { Button, InputBase, InputLabel, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Categoria from "./components/categoria";
import TaskComponent from "./components/task.component";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { flexbox } from '@mui/system';


function App() {
  // Const para crear el array vacio que contendra las notas
  const [notas, setNotas] = useState([]);


  // Const que agrega las 'newNota' dentro del arrayList, actualizandolo con cada nota agregada
  const addNota = (newNota) => {
    setNotas([...notas, newNota]);
  }

  //un ejmplo de conjunto de listas y notas

  const tasksList = [
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

  //un ejmplo de uso de la nota
  const taskData = {
    id: 0,
    title: "momo",
    body: "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
    label: "#F8BD1C",
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="flex-start">
        {
          tasksList.map((taskList) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={taskList.id}>
              <TaskList taskListData={taskList} />
            </Grid>
          ))
        }
      </Grid>

    </>
  );
}

export default App;
