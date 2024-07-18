import { Grid, Typography } from "@mui/material";

export default function PageErreur() {
    return (
        <Grid data-testid="page-erreur" container direction="column">
            <Typography variant="h1">Erreur 404</Typography>
            <Typography variant="h2">La page demandée n'existe pas</Typography>
        </Grid>
    );
}