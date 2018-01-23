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
    let place = location.toUpperCase();
    if (this.data[place]) {
      let roundedData = this.data[place].reduce((acc, element) => {
        if (!acc[element.TimeFrame]) {
          acc[element.TimeFrame] = 0;
        }
        if (typeof element.Data === 'number') {
          acc[element.TimeFrame] = Number(element.Data.toFixed(3));
        }
        return acc;
      }, {});
      return {
        location: place,
        data: roundedData
      };
    }
  }

  findAllMatches(location) {
    return Object.keys(this.data).reduce((acc, district) => {
      if (!location) {
        acc.push(this.data[district]);
      } else if (district.includes(location.toUpperCase())) {
        acc.push(this.data[district]);
      }

      return acc;
    }, []);
  }
}
