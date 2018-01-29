export default class DistrictRepository {
  constructor(districtData) {
    this.districtData = this.cleanData(districtData);
  }

  cleanData(districtData) {
    return districtData.reduce((acc, element) => {
      const place = element.Location.toUpperCase();

      if (!acc[place]) {
        acc[place] = [];
      }

      acc[place].push(element);

      return acc;
    }, {});
  }

  sanitizeData(districtData) {
    if (typeof districtData === 'number') {
      return Number(districtData.toFixed(3));
    }

    return 0;
  }

  findByName(location) {
    if (!location || !this.districtData[location.toUpperCase()]) {
      return undefined;
    }

    const sanitizedData = this.districtData[location.toUpperCase()].reduce(
      (acc, element) => {
        acc[element.TimeFrame] = this.sanitizeData(element.Data);

        return acc;
      },
      {}
    );

    return {
      location: location.toUpperCase(),
      districtData: sanitizedData
    };
  }

  findAllMatches(location) {
    return Object.keys(this.districtData).reduce((acc, district) => {
      if (!location || district.includes(location.toUpperCase())) {
        acc.push(this.findByName(district));
      }

      return acc;
    }, []);
  }

  findAverage(location) {
    const locationData = this.findByName(location);
    const yearValues = Object.values(locationData.districtData);
    const total = yearValues.reduce((sum, value) => sum + value, 0);

    return Number((total / yearValues.length).toFixed(3));
  }

  compareDistrictAverages(location1, location2) {
    const district1 = this.findAverage(location1);
    const district2 = this.findAverage(location2);
    const upper1 = location1.toUpperCase();
    const upper2 = location2.toUpperCase();
    return {
      compared: Number((district1 / district2).toFixed(3)),
      [upper1]: district1,
      [upper2]: district2
    };
  }
}
