import { Grid, Typography } from "@mui/material";
import { MOCK_PROFILS } from "../../../unitsTests/mocks/metier";
import CarteProfil from "../../molecules/carteProfil/carteProfil";

export default function PageProfils(){
    return (
        <Grid data-testid="page-profils" container direction="column">
            <Typography variant="h1">Nos profils</Typography>
            <Grid container gap={4} mt={4}>
                {MOCK_PROFILS.map((profil, idx) => (
                    <CarteProfil key={`${profil.nom} ${profil.prenom}`} profil={profil} idx={idx} />
                ))}
            </Grid>
        </Grid>
    );
}