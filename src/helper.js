

export default class DistrictRepository {
  constructor(data) {
    // data in JSON
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((acc, element) => {
      if (!acc[element.Location]) {
        acc[element.Location] = [];
      }

      acc[element.Location].push(element);

      return acc;
    }, [])
  }  
}
