import { Outlet, createBrowserRouter } from 'react-router-dom';

import { Grid } from '@mui/material';

import Layout from './composants/templates/layout/layout';
import PageAccueil from './composants/pages/accueil/accueil';
import PageProfil from './composants/pages/profil/profil';
import { ComposantAdaptateur } from './helpers/composantAdaptateur/composantAdaptateur';
import PageProfils from './composants/pages/profils/profils';
import PageErreur from './composants/pages/erreur/erreur';

export const routes = createBrowserRouter([
    {
        element: (
            <ComposantAdaptateur>
                <Layout>
                    <Grid container direction="column" m={3}>
                        <Outlet />
                    </Grid>
                </Layout>
            </ComposantAdaptateur>
        ),
        children: [
            {
                path: '/',
                element: <PageAccueil />,
            },
            {
                path: '/profils',
                children: [
                    {
                        index: true,
                        element: <PageProfils />,
                    },
                    {
                        path: ':id',
                        element: <PageProfil />,
                    },
                ]
            },
            {
                path: '*',
                element: <PageErreur />,
            },
        ],
    },
]);
