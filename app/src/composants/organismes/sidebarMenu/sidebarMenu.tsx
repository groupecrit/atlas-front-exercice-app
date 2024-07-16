import { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, CSSObject, CssBaseline, IconButton, Theme, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import { THEME_COULEURS } from '../../../styles';

const drawerWidth = window.screen.width < 1600 ? 180 : 210;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function SidebarMenu() {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
    return (
        <Box data-testid="sidebar-menu" sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={open}
                data-testid="sidebar-menu-drawer"
                sx={{ '& .MuiDrawer-paper': { top: 'unset', overflowY: 'visible', overflowX: 'unset', padding: 2 } }}
            >
                <IconButton
                    data-testid="sidebar-menu-bouton"
                    sx={{
                        width: '25px',
                        height: '25px',
                        position: 'absolute',
                        top: '20px',
                        zIndex: theme.zIndex.drawer + 1,
                        right: '-12.5px',
                        backgroundColor: THEME_COULEURS.PRIMARY.CONTRASTTEXT,
                        border: `1px solid ${THEME_COULEURS.SHADOW.TERNARY}`,
                        '&:hover': {
                            backgroundColor: THEME_COULEURS.PRIMARY.CONTRASTTEXT,
                        },
                    }}
                    onClick={handleClick}
                >
                    {open ? (
                        <ChevronLeftIcon
                            data-testid="sidebar-menu-bouton-icon-ouvert"
                            sx={{
                                width: '15px',
                                height: '15px',
                                overflow: 'visible',
                            }}
                        />
                    ) : (
                        <ChevronRightIcon
                            data-testid="sidebar-menu-bouton-icon-ferme"
                            sx={{
                                width: '15px',
                                height: '15px',
                                overflow: 'visible',
                            }}
                        />
                    )}
                </IconButton>
            </Drawer>
        </Box>
    );
}
