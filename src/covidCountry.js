export default class CovidVaccines {
  static async getVaccines(country) {
    try {
      const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
export default class CovidCases {
  static async getCases(country) {
    try {
      const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}