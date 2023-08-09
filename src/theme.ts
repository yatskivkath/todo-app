import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#494C6B',
            light: '#494C6B',
            dark: '#C8CBE7',
        },
        secondary: {
            main: '#9495A5',
            light: '#9495A5',
            dark: '#767992',
        },
        success: {
            main: '#D1D2DA',
            light: '#D1D2DA',
            dark: '#4D5067',
        },
        action: {
            hover: '#3A7CFD',
        },
        common: {
            white: '#FFFFFF'
        },
        grey: {
            50: '#E3E4F1',
            700: '#393A4B',
            900: '#393A4B',
        }
    },
});

export default theme;