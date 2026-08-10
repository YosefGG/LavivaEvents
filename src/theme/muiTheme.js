import { createTheme } from '@mui/material/styles';

const colors = {
  bgPrimary: '#F5F0E8',
  bgSecondary: '#EBE4D8',
  bgCard: '#FFFFFF',
  bgDark: '#0D0D0D',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B6560',
  textOnDark: '#F5F0E8',
  border: '#DDD6C8',
  accent: '#C9A962',
  accentDark: '#A8894A',
};

export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.accent,
      dark: colors.accentDark,
      contrastText: colors.bgDark,
    },
    secondary: {
      main: colors.textSecondary,
    },
    background: {
      default: colors.bgPrimary,
      paper: colors.bgCard,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: '"Heebo", system-ui, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 28px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.textPrimary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export { colors };
