const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setUpFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_module', '<rootDir>/src'],
    testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
