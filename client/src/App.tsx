import { createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"

function App() {
const theme = useMemo(()=> createTheme(themeSettings))
  return (
    <>
      
    </>
  )
}

export default App
