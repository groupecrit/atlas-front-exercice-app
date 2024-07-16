import { render } from '@testing-library/react';

import PageAccueil from './accueil';

jest.mock('../../molecules/carteProfil/carteProfil')
describe('<PageAcceuil />', () => {
    it('Vérification du rendu de la page acceuil', () => {
        const { getByTestId } = render(<PageAccueil />);
        expect(getByTestId('page-accueil')).toBeInTheDocument();
    });
});
