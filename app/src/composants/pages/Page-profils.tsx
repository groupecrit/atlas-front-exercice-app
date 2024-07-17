import dayjs from "dayjs";
import { Profil } from "../../types/profil"
import { Grid, Typography } from "@mui/material";
import CarteProfil from "../molecules/carteProfil/carteProfil";
import { ReactNode } from "react";

export default function pageProfils(){
    let profils: Profils = [];

    profils = [{
        nom: "Doe",
        prenom: "John",
        dateCreation: dayjs().toISOString(),
    }]

    type Profils = Array<Profil>;

    let DOMPROFILS: ReactNode = null;

    profils?.forEach((profil: Profil, i: number) => {
        DOMPROFILS = [
            DOMPROFILS,
            <CarteProfil key={i} profil={profil} idx={i} />
        ];
    });

    return (
        <Grid data-testid="page-accueil" container direction="column">
            <Typography variant="h1">Nos profils</Typography>
            <Grid container gap={4} mt={4}>
                {DOMPROFILS}
            </Grid>
        </Grid>
    );
}