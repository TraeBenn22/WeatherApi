import Routes from './Routes/Routes'
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

function App() {
  return (
        <ThemeProvider theme={theme} >

            <Routes path="/"/>
        </ThemeProvider>

  );
}

export default App;
