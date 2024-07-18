import { renderConfig } from '../../../unitsTests/helpers/renderConfig';
import Topbar from './topbar';

const testId = 'topbar';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe(`<Topbar>`, () => {
    it(`Vérification de la présence de la barre de navigation`, () => {
        const { getByTestId } = renderConfig(<Topbar />);
        const barreDeNavigation = getByTestId(testId);
        expect(barreDeNavigation).toBeInTheDocument();
    });
    it(`Vérification de la navigation vers l'accueil`, () => {
        const { getByTestId } = renderConfig(<Topbar />);
        const accueil = getByTestId(`${testId}-logo`);
        accueil.click();
        expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
});
