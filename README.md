# ph-zipcode-lookup

A simple package to get the zipcodes of the Philippines.

## Installation

You can install this package using npm:

```sh
npm install ph-zipcode-lookup
```

## API

### findLocation(zipcode)

- `zipcode` (string): The zipcode to find the location for.
- Returns: The location corresponding to the given zipcode, or null if not found.

### findZipcode(location)

- `location` (string): The location to find the zipcode for.
- Returns: The zipcode corresponding to the given location, or null if not found.

## Usage

### In a React app

```jsx
import React from "react";
import zipcodes from "ph-zipcode-lookup";

function App() {
  const location = zipcodes.findLocation("1000");
  const zipcode = zipcodes.findZipcode("Manila");

  return (
    <div>
      <p>Location for zipcode 1000: {location}</p>
      <p>Zipcode for Manila: {zipcode}</p>
    </div>
  );
}

export default App;
```

### In a Node.js app

```js
const zipcodes = require("ph-zipcode-lookup");

const location = zipcodes.findLocation("1000");
const zipcode = zipcodes.findZipcode("Manila");

console.log(`Location for zipcode 1000: ${location}`);
console.log(`Zipcode for Manila: ${zipcode}`);
```

## Acknowledgements

This package was inspired by the [zipcodes-ph](https://www.npmjs.com/package/zipcodes-ph) npm package. Many thanks to the original developer for their work.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Mark Leigh David

## GitHub Repository

You can find the GitHub repository for this project [here](https://github.com/blahbalhabl/ph-zipcodes-lookup).
