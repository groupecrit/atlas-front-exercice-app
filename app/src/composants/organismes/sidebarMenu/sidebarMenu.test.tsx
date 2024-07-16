import { fireEvent, render } from '@testing-library/react';

import SidebarMenu from './sidebarMenu';

const testId = 'sidebar-menu';
const boutonId = 'sidebar-menu-bouton';
const boutonOuvertId = 'sidebar-menu-bouton-icon-ouvert';
const boutonFermeId = 'sidebar-menu-bouton-icon-ferme';

describe(`<SidebarMenu>`, () => {
    it('Rendu du composant pour la sidebar et si elle est par défaut ouverte', () => {
        const { getByTestId } = render(<SidebarMenu />);
        const composantResultat = getByTestId(testId);
        expect(composantResultat).toBeInTheDocument();
        const boutonOuvert = getByTestId(boutonOuvertId);
        expect(boutonOuvert).toBeInTheDocument();
    });
    it('Verifie si la sidebar est fermer', () => {
        const { getByTestId } = render(<SidebarMenu />);
        const composantResultat = getByTestId(testId);
        expect(composantResultat).toBeInTheDocument();
        const boutonSideBar = getByTestId(boutonId);
        expect(boutonSideBar).toBeInTheDocument();
        fireEvent.click(boutonSideBar);
        const boutonFerme = getByTestId(boutonFermeId);
        expect(boutonFerme).toBeInTheDocument();
    });
});
