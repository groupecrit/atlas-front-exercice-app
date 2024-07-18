import { render } from '@testing-library/react';

import PageAccueil from './accueil';

describe('<PageAcceuil />', () => {
    it('Vérification du rendu de la page acceuil', () => {
        const { getByTestId } = render(<PageAccueil />);
        expect(getByTestId('page-accueil')).toBeInTheDocument();
    });
});
