import { render } from '@testing-library/react';

import Layout from './layout';

const testId = 'app-content';
const childId = 'child-test-id';

jest.mock('../sidebarMenu/sidebarMenu');
jest.mock('../../molecules/barreDeNavigation/barreDeNavigation')

describe(`<Layout />`, () => {
    it(`Vérification du rendu avec un child`, () => {
        const { getByTestId } = render(
            <Layout>
                <div data-testid={childId}>test child rendering</div>
            </Layout>
        );
        const layout = getByTestId(testId);
        expect(layout).toBeInTheDocument();
        const child = getByTestId(childId);
        expect(child).toBeInTheDocument();
    });
});
