import { ThemeProvider } from '@emotion/react';
import 'dayjs/locale/fr';
import { ModalProvider } from 'mui-modal-provider';
import { ReactNode, Suspense } from 'react';

import { Grid, StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import ChargementEnCours from '../../composants/atomes/chargementEnCours/chargementEnCours';
import { AppTheme } from '../../styles';

export function ConfigExterne({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Suspense
            fallback={
                <Grid sx={{ textAlign: 'center' }}>
                    <ChargementEnCours />
                </Grid>
            }
        >
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={AppTheme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <ModalProvider>{children}</ModalProvider>
                    </LocalizationProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </Suspense>
    );
}
