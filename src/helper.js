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
    if (!location || !this.data[location.toUpperCase()]) {
      return undefined;
    }
    
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

  findAllMatches(location) {
    let array = Object.keys(this.data).reduce((acc, district) => {
      if (!location) {
        acc.push(this.findByName(district));
      } else if (district.includes(location.toUpperCase())) {
        acc.push(this.findByName(district));
      }

      return acc;
    }, []);
    return array
  }
}
