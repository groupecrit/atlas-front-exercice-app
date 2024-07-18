import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';

import { MOCK_PROFILS } from '../../../unitsTests/mocks/metier';

export default function PageProfil() {
    const { id } = useParams();

    if (id === undefined) {
        return <>Erreur de navigation</>;
    }

    if (!MOCK_PROFILS?.[id]) {
        return <>Profil inexistant</>;
    }

    const profil = MOCK_PROFILS[id];

    return (
        <Grid data-testid="page-profil" container direction="column">
            <Typography data-testid="page-profil-nom-prenom" variant="h1">
                Profil de : {`${profil?.nom} ${profil?.prenom}`}
            </Typography>
            <Typography data-testid="page-profil-experience" variant="body2">
                Dernière expérience : {profil?.experience}
            </Typography>
            <Typography data-testid="page-profil-localisation" variant="body2">
                Localisation : {`${profil?.localisation?.cp} ${profil?.localisation?.ville}`}
            </Typography>
        </Grid>
    );
}
