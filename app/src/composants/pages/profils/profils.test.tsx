import { render } from '@testing-library/react';
import PageProfils from './profils';

jest.mock('../../molecules/carteProfil/carteProfil');
describe('<PageProfils />', () => {
    it('Vérification du rendu de la page des profils', () => {
        const { getByTestId } = render(<PageProfils />);
        expect(getByTestId('page-profils')).toBeInTheDocument();
    });
});
