import { within } from '@testing-library/react';

import { renderConfig } from '../../../unitsTests/helpers/renderConfig';
import { MOCK_PROFILS } from '../../../unitsTests/mocks/metier';
import CarteProfil from './carteProfil';

const testId = 'carte-profil';
const longEnUSFormatter = new Intl.DateTimeFormat('fr-EU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
const spyUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => spyUseNavigate,
}));

describe(`<CarteProfil />`, () => {
    it('Vérification du rendu de la carte profil', () => {
        const { getByTestId } = renderConfig(<CarteProfil profil={MOCK_PROFILS[0]} idx={0} />);
        const carteProfil = getByTestId(testId);
        expect(carteProfil).toBeInTheDocument();
        const nomPrenom = within(carteProfil).getByTestId(`${testId}-nom-prenom`);
        expect(nomPrenom).toHaveTextContent(`${MOCK_PROFILS[0].nom} ${MOCK_PROFILS[0].prenom}`);
        const exp = within(carteProfil).getByTestId(`${testId}-experience`);
        expect(exp).toHaveTextContent(`${MOCK_PROFILS[0].experience}`);
        const dateEtLoc = within(carteProfil).getByTestId(`${testId}-date-et-localisation`);
        expect(dateEtLoc).toHaveTextContent(
            `${longEnUSFormatter.format(
                new Date(MOCK_PROFILS[0].dateCreation)
            )} · ${`${MOCK_PROFILS[0].localisation.cp} ${MOCK_PROFILS[0].localisation.ville}`}`
        );
    });
    it('Vérification du onClick', () => {
        const { getByTestId } = renderConfig(<CarteProfil profil={MOCK_PROFILS[0]} idx={0} />);
        const carteProfil = getByTestId(testId);
        carteProfil.click();
        expect(spyUseNavigate).toHaveBeenCalledWith(`/profil/${0}`);
    })
});
