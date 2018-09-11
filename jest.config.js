/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {

    /*
     * All imported modules in your tests should be mocked automatically
     * Automock: false,
     */

    /*
     * Stop running tests after the first failure
     * Bail: false,
     */

    /*
     * Respect "browser" field in package.json when resolving modules
     * Browser: false,
     */

    /*
     * The directory where Jest should store its cached dependency information
     * CacheDirectory: "/tmp/jest_rs",
     */

    /*
     * Automatically clear mock calls and instances between every test
     * ClearMocks: false,
     */

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    /*
     * An array of glob patterns indicating a set of files for which coverage information should be collected
     * CollectCoverageFrom: null,
     */

    collectCoverageFrom: [
        "lib/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    /*
     * An array of regexp pattern strings used to skip coverage collection
     * CoveragePathIgnorePatterns: [
     *   "/node_modules/"
     * ],
     */

    /*
     * A list of reporter names that Jest uses when writing coverage reports
     * CoverageReporters: [
     *   "json",
     *   "text",
     *   "lcov",
     *   "clover"
     * ],
     */

    /*
     * An object that configures minimum threshold enforcement for coverage results
     * CoverageThreshold: null,
     */

    /*
     * Make calling deprecated APIs throw helpful error messages
     * ErrorOnDeprecated: false,
     */

    /*
     * Force coverage collection from ignored files usin a array of glob patterns
     * ForceCoverageMatch: [],
     */

    /*
     * A path to a module which exports an async function that is triggered once before all test suites
     * GlobalSetup: null,
     */

    /*
     * A path to a module which exports an async function that is triggered once after all test suites
     * GlobalTeardown: null,
     */

    /*
     * A set of global variables that need to be available in all test environments
     * Globals: {},
     */

    /*
     * An array of directory names to be searched recursively up from the requiring module's location
     * ModuleDirectories: [
     *   "node_modules"
     * ],
     */

    /*
     * An array of file extensions your modules use
     * ModuleFileExtensions: [
     *   "js",
     *   "json",
     *   "jsx",
     *   "node"
     * ],
     */

    /*
     * A map from regular expressions to module names that allow to stub out resources with a single module
     * ModuleNameMapper: {},
     */

    /*
     * An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
     * ModulePathIgnorePatterns: [],
     */

    /*
     * Activates notifications for test results
     * Notify: false,
     */

    /*
     * An enum that specifies notification mode. Requires { notify: true }
     * NotifyMode: "always",
     */

    /*
     * A preset that is used as a base for Jest's configuration
     * Preset: null,
     */

    /*
     * Run tests from one or more projects
     * Projects: null,
     */

    /*
     * Use this configuration option to add custom reporters to Jest
     * Reporters: undefined,
     */

    /*
     * Automatically reset mock state between every test
     * ResetMocks: false,
     */

    /*
     * Reset the module registry before running each individual test
     * ResetModules: false,
     */

    /*
     * A path to a custom resolver
     * Resolver: null,
     */

    /*
     * Automatically restore mock state between every test
     * RestoreMocks: false,
     */

    /*
     * The root directory that Jest should scan for tests and modules within
     * RootDir: null,
     */

    /*
     * A list of paths to directories that Jest should use to search for files in
     * Roots: [
     *   "<rootDir>"
     * ],
     */

    /*
     * Allows you to use a custom runner instead of Jest's default test runner
     * Runner: "jest-runner",
     */

    /*
     * The paths to modules that run some code to configure or set up the testing environment before each test
     * SetupFiles: [],
     */

    /*
     * The path to a module that runs some code to configure or set up the testing framework before each test
     * SetupTestFrameworkScriptFile: null,
     */

    /*
     * A list of paths to snapshot serializer modules Jest should use for snapshot testing
     * SnapshotSerializers: [],
     */

    // The test environment that will be used for testing
    testEnvironment: 'node'

    /*
     * Options that will be passed to the testEnvironment
     * TestEnvironmentOptions: {},
     */

    /*
     * Adds a location field to test results
     * TestLocationInResults: false,
     */

    // The glob patterns Jest uses to detect test files
    // TestMatch: [
    //   "**/__tests__/**/*.js?(x)",
    //   "**/?(*.)+(spec|test).js?(x)"
    // ],

    /*
     * An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
     * TestPathIgnorePatterns: [
     *   "/node_modules/"
     * ],
     */

    /*
     * The regexp pattern Jest uses to detect test files
     * TestRegex: "",
     */

    /*
     * This option allows the use of a custom results processor
     * TestResultsProcessor: null,
     */

    /*
     * This option allows use of a custom test runner
     * TestRunner: "jasmine2",
     */

    /*
     * This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
     * TestURL: "http://localhost",
     */

    /*
     * Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
     * Timers: "real",
     */

    /*
     * A map from regular expressions to paths to transformers
     * Transform: null,
     */

    /*
     * An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
     * TransformIgnorePatterns: [
     *   "/node_modules/"
     * ],
     */

    /*
     * An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
     * UnmockedModulePathPatterns: undefined,
     */

    /*
     * Indicates whether each individual test should be reported during the run
     * Verbose: null,
     */

    /*
     * An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
     * WatchPathIgnorePatterns: [],
     */

    /*
     * Whether to use watchman for file crawling
     * Watchman: true,
     */
};