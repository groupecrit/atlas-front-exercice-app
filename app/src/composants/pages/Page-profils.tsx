import dayjs from "dayjs";
import { Profil } from "../../types/profil"
import CarteProfil from "../molecules/carteProfil/carteProfil";
import { ReactNode } from "react";
import { View, Text } from 'react-native';

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
        <View data-testid="page-accueil" style={{flexDirection: 'column'}}>
            <Text>Nos profils</Text>
            <View style={{gap: 4, marginTop: 4}}>
                {DOMPROFILS}
            </View>
        </View>
    );
}
