import React from 'react';

import { Grid, Switch, Typography } from '@mui/material';

import { MOCK_PROFILS } from '../../../unitsTests/mocks/metier';
import CarteProfil from '../../molecules/carteProfil/carteProfil';
import PageProfils from '../Page-profils';
import PageProfil from '../profil/profil';

export default function PageAccueil() {
    const [shouldAfficherProfils, setShouldAfficherProfils] = React.useState(false);

    let gérerChangement = (event) => {
        if(shouldAfficherProfils === true){
            setShouldAfficherProfils(false);
        } else {
            setShouldAfficherProfils(true);
        }
        return;
    }

    return (
        <Grid data-testid="page-accueil" container direction="column">
            <Typography variant="h1">Acceuil</Typography>
            <Grid container gap={4} mt={4}>
                {shouldAfficherProfils && <PageProfils />}
            </Grid>
            <Grid container>
                <Switch checked={shouldAfficherProfils} onChange={gérerChangement} inputProps={{ 'aria-label': 'controlled' }}/>
            </Grid>
        </Grid>
    );
}
