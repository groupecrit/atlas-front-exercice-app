import { render } from '@testing-library/react';

import { ComposantAdaptateur } from './composantAdaptateur';

describe(`<ComposantAdaptateur />`, () => {
    it('Vérification du rendu de child', () => {
        const { getByTestId } = render(
            <ComposantAdaptateur>
                <div data-testid="child-id" />
            </ComposantAdaptateur>
        );
        expect(getByTestId('child-id')).toBeInTheDocument();
    });
});
