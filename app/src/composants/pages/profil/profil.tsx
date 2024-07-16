import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';

import useUtils from '../../../hooks/useUtils/useUtils';
import { MOCK_PROFILS } from '../../../unitsTests/mocks/metier';

export default function PageProfil() {
    const { id } = useParams();
    const { formatDateOuNonRenseigne, valeurOuNonRenseigne } = useUtils();

    if (id === undefined) {
        return <>Erreur de navigation</>;
    }

    if (!MOCK_PROFILS?.[id]) {
        return <>Profil inexistant</>;
    }

    const profil = MOCK_PROFILS[id];

    return (
        <Grid data-testid="page-profil" container direction="column" m={3}>
            <Typography data-testid="page-profil-nom-prenom" variant="h1">
                Profil de : {valeurOuNonRenseigne(`${profil?.nom} ${profil?.prenom}`)}
            </Typography>
            <Typography data-testid="page-profil-experience" variant="body2">
                Dernière expérience : {valeurOuNonRenseigne(profil?.experience)}
            </Typography>
            <Typography data-testid="page-profil-localisation" variant="body2">
                Localisation : {valeurOuNonRenseigne(`${profil?.localisation?.cp} ${profil?.localisation?.ville}`)}
            </Typography>
            <Typography data-testid="page-profil-date-creation" variant="body2">
                Date de création : {formatDateOuNonRenseigne(profil?.dateCreation)}
            </Typography>
        </Grid>
    );
}
