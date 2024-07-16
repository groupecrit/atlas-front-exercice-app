// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

import { config } from './unitsTests/mocks/globals';

Object.keys(config).forEach((key) => {
    (global as any)[key] = config[key];
});

beforeEach(() => {
    jest.clearAllMocks();
});
// Clean up after the tests are finished.
afterAll(() => {
    jest.clearAllMocks();
});
