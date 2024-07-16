import { Outlet, createBrowserRouter } from 'react-router-dom';

import { Grid } from '@mui/material';

import Layout from './composants/organismes/layout/layout';
import PageAccueil from './composants/pages/accueil/accueil';
import PageProfil from './composants/pages/profil/profil';
import { ComposantAdaptateur } from './helpers/composantAdaptateur/composantAdaptateur';

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
                path: '/profil/:id',
                element: <PageProfil />,
            },
        ],
    },
]);
