import { render } from '@testing-library/react';

import ChargementEnCours from './chargementEnCours';

const testId = 'chargement-en-cours';

describe(`<ChargementEnCours>`, () => {
    it(`Verification du rendu`, () => {
        const { getByTestId } = render(<ChargementEnCours />);
        const chargement = getByTestId(testId);
        expect(chargement).toBeInTheDocument();
    });
});
