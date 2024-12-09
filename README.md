# Unhandled Exceptions in Express.js Routes

This repository demonstrates a common error in Express.js applications: unhandled exceptions within route handlers.  Failing to handle potential errors (e.g., invalid input, database errors) can lead to crashes and unexpected behavior.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server with the buggy code.
4. Attempt to trigger the errors (e.g., sending invalid data to a POST request).
5. Compare the server behavior with the `bugSolution.js` example.