import axios from 'axios';

const PERSON_BASE_REST_API_URL = 'http://localhost:8080/api/v1/persons';

class PersonService {
  getAllPersons() {
    return axios.get(PERSON_BASE_REST_API_URL);
  }

  createPerson(person) {
    return axios.post(PERSON_BASE_REST_API_URL, person);
  }

  getPersonById(personId) {
    return axios.get(PERSON_BASE_REST_API_URL + '/' + personId);
  }

  updatePerson(personId, person) {
    return axios.put(PERSON_BASE_REST_API_URL + '/' + personId, person);
  }
}

export default new PersonService();
