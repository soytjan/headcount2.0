export default class DistrictRepository {
  constructor(data) {
    // data in JSON
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((acc, element) => {
      let place = element.Location.toUpperCase();

      if (!acc[place]) {
        acc[place] = [];
      }

      acc[place].push(element);

      return acc;
    }, {});
  }

  findByName(location) {
    if (!location) {
      return undefined;
    }
    
    if (this.data[location.toUpperCase()]) {
      let roundedData = this.data[location.toUpperCase()].reduce((acc, element) => {
        if (!acc[element.TimeFrame]) {
          acc[element.TimeFrame] = 0;
        }
        if (typeof element.Data === 'number') {
          acc[element.TimeFrame] = Number(element.Data.toFixed(3));
        }
        return acc;
      }, {});
      return {
        location: location.toUpperCase(),
        data: roundedData
      };
    }
  }

  findAllMatches(location) {
    if (!location) {
      return Object.keys(this.data).map(district => this.data[district]);
    }
    let place = location.toUpperCase();

    let array = Object.keys(this.data).reduce((acc, district) => {
      if (district.includes(place)) {
        acc.push(this.data[district]);
      }
      return acc;
    }, []);
    return array;
  }
}
