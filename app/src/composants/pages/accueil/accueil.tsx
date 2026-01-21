import React from 'react';

import { MOCK_PROFILS } from '../../../unitsTests/mocks/metier';
import CarteProfil from '../../molecules/carteProfil/carteProfil';
import PageProfils from '../Page-profils';
import PageProfil from '../profil/profil';
import { View, Text, Switch } from 'react-native';

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
        <View data-testid="page-accueil" style={{flexDirection: 'column'}}>
            <Text>Acceuil</Text>
            <View style={{gap: 4, marginTop: 4}}>
                {shouldAfficherProfils && <PageProfils />}
            </View>
            <View>
                <Switch checked={shouldAfficherProfils} onChange={gérerChangement} inputProps={{ 'aria-label': 'controlled' }}/>
            </View>
        </View>
    );
}
