import { render } from '@testing-library/react';

import PasImplemente from './pasImplemente';

const testId = 'pas-implemente';

describe(`<PasImplemente>`, () => {
    it(`Vérification du rendu`, () => {
        const { getByTestId } = render(<PasImplemente />);
        expect(getByTestId(testId)).toBeInTheDocument();
    });
});
