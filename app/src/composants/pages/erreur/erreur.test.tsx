import { render } from "@testing-library/react";
import PageErreur from "./erreur";

describe('<PageErreur />', () => {
    it('Vérification du rendu de la page erreur', () => {
        const { getByTestId } = render(<PageErreur />);
        expect(getByTestId('page-erreur')).toBeInTheDocument();
    });
})