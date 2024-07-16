import { render } from '@testing-library/react';

import BarreDeNavigation from './barreDeNavigation';
import { renderConfig } from '../../../unitsTests/helpers/renderConfig';

const testId = 'barre-de-navigation';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe(`<BarreDeNavigation>`, () => {
    it(`Vérification de la présence de la barre de navigation`, () => {
        const { getByTestId } = renderConfig(<BarreDeNavigation />);
        const barreDeNavigation = getByTestId(testId);
        expect(barreDeNavigation).toBeInTheDocument();
    });
    it(`Vérification de la navigation vers l'accueil`, () => {
        const { getByTestId } = renderConfig(<BarreDeNavigation />);
        const accueil = getByTestId(`${testId}-logo`);
        accueil.click();
        expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
});
