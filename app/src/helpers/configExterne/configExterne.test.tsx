import { render } from '@testing-library/react';

import { ConfigExterne } from './configExterne';

describe(`<ConfigExterne>`, () => {
    it('Vérification du rendu de child', () => {
        const { getByTestId } = render(
            <ConfigExterne>
                <div data-testid="child-id" />
            </ConfigExterne>
        );
        expect(getByTestId('child-id')).toBeInTheDocument();
    });
});
