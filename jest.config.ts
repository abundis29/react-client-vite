import type { Config } from "jest";
const config: Config = {
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]",
  ],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "test.tsx"],
  moduleNameMapper: {
    "^react$": "react",
    "@v1": "components/v1",
    "@v1/(.*)": "components/v1/$1",
    "@v2": "src/components/v2",
    "@v2/(.*)": "components/v2/$1",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
};

export default config;
