export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((acc, element) => {
      const place = element.Location.toUpperCase();

      if (!acc[place]) {
        acc[place] = [];
      }

      // acc[place] ? acc[place].push(element) : acc[place] = [element];

      acc[place].push(element);

      return acc;
    }, {});
  }

  sanitizeData(data) {
    if (typeof data === 'number') {
      return Number(data.toFixed(3));
    }

    return 0;
  }

  findByName(location) {
    if (!location || !this.data[location.toUpperCase()]) {
      return undefined;
    }
    
    const sanitizedData = this.data[location.toUpperCase()].reduce((acc, element) => {

      acc[element.TimeFrame] = this.sanitizeData(element.Data);

      return acc;
    }, {});

    return {
      location: location.toUpperCase(),
      data: sanitizedData
    };
  }

  findAllMatches(location) {
    return Object.keys(this.data).reduce((acc, district) => {
      if (!location || district.includes(location.toUpperCase())) {
        acc.push(this.findByName(district))
      }

      return acc;
    }, []);

  }
}
