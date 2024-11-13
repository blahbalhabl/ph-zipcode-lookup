import zipcodesData from './zipcodes.json' with { type: 'json' };

const zipcodes: Zipcodes = zipcodesData;

type Zipcodes = {
  [key: string]: string | string[];
};

const findLocation = (zipcode: string): string | null => {
  const value = zipcodes[zipcode];
  return typeof value === 'string' ? value : null;
};

const findZipcode = (location: string): string | null => {
  const commonWordsRegex = /\b(city|of)\b/gi;
  const normalizedLocation = location.toLowerCase();

  return (
    Object.keys(zipcodes).find((zipcode) => {
      // get the value of the zipcode key.
      const value = zipcodes[zipcode];
      // check if the value is an array of strings
      // if it is, check if the location matches any of the strings in the array
      if (Array.isArray(value)) {
        const match = value.some((loc) => {
          const normalizedLoc = loc.toLowerCase();
          return (
            normalizedLoc.includes(normalizedLocation) ||
            normalizedLocation.includes(normalizedLoc)
          );
        });
        return !!match;
      }
      // check if the value is a string and return null if it is not.
      if (typeof value !== 'string') {
        return false;
      };
      // if the value is a string, normalize it to lowercase for comparison
      const normalizedValue = value.toLowerCase();
      // return the zipcode if the location matches exactly
      if (normalizedValue === normalizedLocation) {
        return true;
      }

      // Remove common words and check if the concatenated string matches the location
      const cleanedValue = normalizedValue.replace(commonWordsRegex, '').replace(/\s+/g, ' ').trim();
      const cleanedLocation = normalizedLocation.replace(commonWordsRegex, '').replace(/\s+/g, ' ').trim();

      if (cleanedValue.includes(cleanedLocation) || cleanedLocation.includes(cleanedValue)) {
        return true;
      }

      // Split the words if its more than one word and check if the reversed order of the words matches the location
      const words = normalizedValue.split(' ');
      if (words.length > 1) {
        const reversedWords = words.reverse().join(' ');
        if (reversedWords === normalizedLocation) {
          return true;
        }
      };

      // If the words have special characters, remove them and check if the words match the location
      const cleanedWords = words.map((word) => word.replace(/\W/g, ''));
      if (cleanedWords.join('') === normalizedLocation.replace(/\W/g, '')) {
        return true;
      }
      
    }) || null
  );
};

export default {
  findLocation,
  findZipcode,
};
