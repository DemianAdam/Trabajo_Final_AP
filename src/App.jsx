import Grid from "@mui/material/Grid";
import TaskList from "./components/taskList";
import { useState } from "react";


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

  const taskListexample = [
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
    }
  ]

  return (
    <div className="h-screen flex overflow-auto p-10">
      {
        tasksList.map((taskList) => (
          <Grid item xs={1} sm={6} md={4} lg={3} key={taskList.id}>
            <TaskList taskListData={taskList} />
          </Grid>
        ))
      }
    </div>
  );
}

export default App;
