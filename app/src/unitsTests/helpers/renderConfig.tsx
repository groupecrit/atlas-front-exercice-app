import { render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';

import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AppTheme } from '../../styles';
import { BrowserRouter } from 'react-router-dom';

export function renderConfig(ui: ReactElement): ReturnType<typeof render> {
    function Wrapper({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
        return (
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
                    </LocalizationProvider>
                </StyledEngineProvider>
            </BrowserRouter>
        );
    }

    return {
        ...render(ui, {
            wrapper: Wrapper,
        }),
    };
}
