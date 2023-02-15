module.exports = {
  "roots": [
    "<rootDir>/test"
  ],
  "testMatch": [
    "**/__test__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  "transform": {
    "^.+\\.(ts)$": "ts-jest"
  },
}