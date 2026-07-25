import { CssBaseline, ThemeProvider } from "@mui/material";

import { HomeScreen } from "../features/home/screens/HomeScreen";
import { theme } from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeScreen />
    </ThemeProvider>
  );
}
