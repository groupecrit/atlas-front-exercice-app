import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import {
    Box,
    CSSObject,
    CssBaseline,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    styled,
    useTheme,
} from '@mui/material';
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
type MenuItem = {
    texte: string;
    icon: ReactNode;
    pathname: string;
    handleClick: () => void;
};

export default function SidebarMenu() {
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems: Array<MenuItem> = [
        {
            texte: 'Accueil',
            icon: <HomeIcon />,
            pathname: '/',
            handleClick: () => {
                navigate('/');
            },
        },
    ];

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const isSelected = (pathname, targetPath) => {
        if (!targetPath) return false;

        if (pathname === targetPath) {
            return true;
        }
        if (pathname?.startsWith('/sourcing/offres') && targetPath === '/sourcing') {
            return false;
        }
        if (pathname?.startsWith(`${targetPath}/`) || (targetPath === '/' && pathname === '/')) {
            return true;
        }

        return false;
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
                <List sx={{ marginTop: 2 }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.pathname} 
                        sx={{ justifyContent: 'center' }} disablePadding>
                            <ListItemButton
                                selected={isSelected(location.pathname, item.pathname)}
                                onClick={item.handleClick}
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: THEME_COULEURS.SECONDARY.LIGHT,
                                        color: THEME_COULEURS.SECONDARY.MAIN,
                                        '&:hover, &.Mui-hovered': {
                                            backgroundColor: THEME_COULEURS.SECONDARY.LIGHT,
                                        },
                                    },
                                    ':hover': {
                                        backgroundColor: THEME_COULEURS.COLORS.GREY[100],
                                    },
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    borderRadius: '4px'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: isSelected(location.pathname, item.pathname) ? THEME_COULEURS.SECONDARY.MAIN : null,
                                        minWidth: 0,
                                        mr: open ? 1.5 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.texte} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
