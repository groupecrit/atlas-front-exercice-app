module.exports = {
    rootDir: 'src',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: '../coverage',
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    setupFiles: [],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testMatch: ['**/*.test.(ts|tsx)'],
    workerIdleMemoryLimit: '512MB',
};
