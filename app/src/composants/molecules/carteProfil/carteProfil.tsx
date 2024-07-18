import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Grid, SxProps, Theme, Typography } from '@mui/material';

import { THEME_COULEURS } from '../../../styles';
import { Profil } from '../../../types/profil';

export default function CarteProfil({ profil, idx }: Readonly<{ profil: Profil; idx: number }>) {
    const navigate = useNavigate();
    const sx: SxProps<Theme> = {
        width: '250px',
        height: '125px',
        boxShadow: `0px 4px 12px 0px ${THEME_COULEURS.SHADOW.PRIMARY}`,
        '&:hover': { backgroundColor: THEME_COULEURS.CONTENT.NEUTRAL.BACKGROUND },
    };

    return (
        <Grid onClick={() => navigate(`/profils/${idx}`)} sx={{ cursor: 'pointer' }}>
            <Card elevation={3} sx={sx} data-testid="carte-profil" className="nouveau-cv">
                <CardContent>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item>
                            <Typography data-testid="carte-profil-nom-prenom" variant="subtitle1">
                                {`${profil?.nom} ${profil?.prenom}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography data-testid="carte-profil-experience" variant="body2">
                                {profil?.experience}
                            </Typography>
                        </Grid>
                        <Grid container item mt={2}>
                            <Typography data-testid="carte-profil-localisation" variant="helperText">
                                {`${profil?.localisation?.cp} ${profil?.localisation?.ville}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
