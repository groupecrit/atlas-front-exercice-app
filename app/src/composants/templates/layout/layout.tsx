import { PropsWithChildren } from 'react';

import { Box, Grid } from '@mui/material';

import Topbar from '../../molecules/topbar/topbar';
import SideBarMenu from '../../organismes/sidebarMenu/sidebarMenu';

export default function Layout(props: Readonly<PropsWithChildren>) {
    return (
        <Grid>
            <Topbar />
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
