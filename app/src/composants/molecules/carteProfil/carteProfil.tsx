import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Grid, SxProps, Theme, Typography } from '@mui/material';

import useUtils from '../../../hooks/useUtils/useUtils';
import { THEME_COULEURS } from '../../../styles';
import { Profil } from '../../../types/profil';

export default function Carte({ profil, idx }: Readonly<{ profil: Profil; idx: number }>) {
    const { formatDateOuNonRenseigne, valeurOuNonRenseigne } = useUtils();
    const navigate = useNavigate();
    const sx: SxProps<Theme> = {
        width: '250px',
        height: '125px',
        boxShadow: `0px 4px 12px 0px ${THEME_COULEURS.SHADOW.PRIMARY}`,
        '&:hover': { backgroundColor: THEME_COULEURS.CONTENT.NEUTRAL.BACKGROUND },
    };

    return (
        <Grid onClick={() => navigate(`/profil/${idx}`)} sx={{ cursor: 'pointer' }}>
            <Card elevation={3} sx={sx} data-testid="carte-profil" className="nouveau-cv">
                <CardContent>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item>
                            <Typography data-testid="carte-profil-nom-prenom" variant="subtitle1">
                                {valeurOuNonRenseigne(`${profil?.nom} ${profil?.prenom}`)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography data-testid="carte-profil-experience" variant="body2">
                                {valeurOuNonRenseigne(profil?.experience)}
                            </Typography>
                        </Grid>
                        <Grid item mt={2}>
                            <Typography data-testid="carte-profil-date-et-localisation" variant="helperText">
                                {`${formatDateOuNonRenseigne(profil?.dateCreation)} · ${valeurOuNonRenseigne(
                                    `${profil?.localisation?.cp} ${profil?.localisation?.ville}`
                                )}`}{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
