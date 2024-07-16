import { PropsWithChildren } from 'react';

import { Box, Grid } from '@mui/material';

import BarreDeNavigation from '../../molecules/barreDeNavigation/barreDeNavigation';
import SideBarMenu from '../sidebarMenu/sidebarMenu';

export default function Layout(props: Readonly<PropsWithChildren>) {
    return (
        <Grid>
            <BarreDeNavigation />
            <Box
                data-testid="app-content"
                component="main"
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    paddingTop: { md: '40px', lg: '50px' },
                    backgroundColor: 'grey.50',
                    minHeight: '100vh',
                    minWidth: '80vw',
                }}
            >
                <SideBarMenu />
                {props.children}
            </Box>
        </Grid>
    );
}
