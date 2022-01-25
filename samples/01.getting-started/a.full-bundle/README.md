# WebChat Issue

This example demonstrates an issue within WebChat where the collapsing/expanding of content does not work correctly when the following conditions are met:

1. The container element wrapping WebChat has height 100%
2. The activity of the card contains an ID
3. The card is a specific size (in bytes)

All 3 of the above conditions must be true for the issue to occur.

# Affected Targets

- This issue occurs on iOS (tested via Chrome on iPhone 12 running iOS 14.8.1).
- It does not occur when using WebChat in the browser.
- I have not tested Android.

# Changes

The following changes have been made to this sample to demonstrate the issue:

1. Added a new `card.js` file which contains an function that returns the adaptive card that exhibits the behaviour.

Note:

- This adaptive card is an exact copy of the [Expense Report sample](https://adaptivecards.io/samples/expensereport.html) from adaptivecards.io.

2. Added a new `middleware.js` file which contains a store middleware function that augments incoming bot activity with the adaptive card defined in `card.js` - basically transforming any bot response activities into the adaptive card that exhibits the problem.

3. Updated `index.html` to add references to the new JavaScript files and to configure WebChat to use the store middleware defined in `middleware.js`.

# Reproduction Steps

1. Launch this sample with `npx serve`

2. Navigate to the served URL on an iOS device.

3. Type any command (such as `hi`)

4. Click the `Show history` link at the bottom of the card. The hidden section will become visible.

5. Click the `Hide history` link at the bottom of the card. The visible section will not be hidden.

# Expected Behaviour

When following the reproduction steps, clicking the `Hide history` link in step #5 should result in the visible history section being hidden.

# Preventing the issue

The following will prevent the issue from occuring:

- remove the `height: 100%` css declaration from the `#webchat` style defined in `index.html`

- reduce the size of the adaptive card in `card.js`

- null out the activity id in the store middleware defined in `middleware.js`
