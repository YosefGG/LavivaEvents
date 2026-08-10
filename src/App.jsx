import { ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { direction } from './config/language';
import { muiTheme } from './theme/muiTheme';
import { router } from './router';
import './index.css';

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div dir={direction}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}
