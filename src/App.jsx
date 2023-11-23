import { Button, InputBase, InputLabel, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Categoria from "./components/categoria";
import TaskComponent from "./components/task.component";
import TaskForm from "./components/TaskForm";

function App() {
  // Const para crear el array vacio que contendra las notas
  const arrayList = () => {
    const [notas, setNotas] = useState([])
  }

  // Const que agrega las 'newNota' dentro del arrayList, actualizandolo con cada nota agregada
  const addNota = (newNota) => {
    setNotas([...notas, newNota])
  }

  //un ejmplo de conjunto de listas y notas

  const tasksList = [
    {
      id: "0",
      title: "pruebas",
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Categoria></Categoria>
          </Grid>
          <Grid item xs={12}>
            <TaskComponent taskData={taskData} />
          </Grid>
          <Grid item xs={12}>
            <TaskComponent taskData={taskData} />
          </Grid>
          <Grid item xs={12}>
            <TaskComponent taskData={taskData} />
          </Grid>
        </Grid>
      </Box>
      <TaskForm />
    </>
  );
}

export default App;
