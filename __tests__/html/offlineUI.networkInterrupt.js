/** @jest-environment ./packages/test/harness/src/host/jest/WebDriverEnvironment.js */

describe('offline UI', () => {
  test('should display "Network interruption occurred. Reconnectingâ€¦" status when connection is interrupted', () =>
    runHTML('offlineUI.networkInterrupt.html'));
});
