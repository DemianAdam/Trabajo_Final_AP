import TaskComponent from "./components/task.component"
import Categoria from "./components/categoria"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function App() {

  //un ejmplo de conjunto de listas y notas

  const tasksList = [
    {
      id: "0",
      title: "pruebas",
      tasks: [
        {
          id: 0,
          title: 'momo',
          body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
          label: '#F8BD1C'
        },
        {
          id: 1,
          title: 'momo',
          body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
          label: '#F8BD1C'
        }
      ]
    },
    {
      id: "1",
      title: "finalizado",
      tasks: [
        {
          id: 0,
          title: 'momo',
          body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
          label: '#F8BD1C'
        },
        {
          id: 1,
          title: 'momo',
          body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
          label: '#F8BD1C'
        }
      ]
    }
  ]

  //un ejmplo de uso de la nota
  const taskData = {
    id: 0,
    title: 'momo',
    body: 'qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
    label: '#F8BD1C'
  }

  return (
    <div>
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


    </div>
  )
}

export default App
