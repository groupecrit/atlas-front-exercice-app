import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Grid, Toolbar, useTheme } from '@mui/material';

import { THEME_COULEURS } from '../../../styles';

export default function BarreDeNavigation() {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <AppBar
            sx={{
                zIndex: theme.zIndex.drawer + 1,
                color: THEME_COULEURS.COLORS.BLACK,
                backgroundColor: THEME_COULEURS.PRIMARY.CONTRASTTEXT,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                boxShadow: `0px 1px 1px ${THEME_COULEURS.SHADOW.PRIMARY}`,
            }}
        >
            <Toolbar data-testid="barre-de-navigation" sx={{ minHeight: { md: 45, lg: 50 } }}>
                <Grid data-testid="barre-de-navigation-logo" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                    <img src="/assets/favicon.ico" alt="logo" />
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
