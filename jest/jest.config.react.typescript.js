module.exports = {
    transform: {
        '.(ts|tsx)': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'next-env.d.ts'
    ],
    testMatch: [
        // '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    // testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
}
