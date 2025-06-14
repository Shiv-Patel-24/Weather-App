import "./App.css";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from "@mui/material";

import WeatherApp from "./WeatherApp";

function App() {
  return(
    <>
      <div>
        {/* <SearchBox />
        <InfoBox /> */}
        <WeatherApp />
      </div>
    </>
  )
}

export default App



// let handleClick = () =>{
//   console.log("button was clicked")
// }
// return (
// <>
//   <h1>Material_UI Demo</h1>
//   <Button variant="contained" onClick={handleClick}>Click me</Button><br /><br />
//   <Button variant="contained" onClick={handleClick} disabled>disable button </Button><br /><br />
//   <Button variant="contained" onClick={handleClick} color="error">Color Error</Button><br /><br />
//   <Button variant="contained" onClick={handleClick} color="success">Success color button </Button><br /><br />
//   <Button variant="contained" onClick={handleClick} color="success" size="small">Small size</Button><br /><br />
//   <Button variant="contained" onClick={handleClick} color="success" size="large">Large size of the button</Button><br /><br />

//   {/* using DeleteIcon down */}

//   <Button variant="contained" onClick={handleClick} color="success" size="large" startIcon={<DeleteIcon />}>DeleteIcon Button</Button><br /><br />

//   {/* Alert */}

//   <Alert severity="success">
//     Here is a gentle confirmation that your action was successful.
//   </Alert>
//   <br />

//   <Alert severity="error">
//     Error Alert
//   </Alert>
// </>
// )
