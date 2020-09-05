# CoordScraper

This is a simple web scraping library to resolve addresses in coodinates. (Google Maps as a data source)

## Installation

Use the package manager **npm** or **yarn** to install CoordScraper.

#### NPM

```bash
npm install coordscraper
```

#### Yarn

```bash
yarn add coordscraper
```


## Usage

```javascript
const { getCoords } = require('coordscraper');

(async () => {
  const coords = await getCoords('Abbey Road, Londres') // returns { lat: '51.5370926', lon: '-0.1833791' }
})();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
