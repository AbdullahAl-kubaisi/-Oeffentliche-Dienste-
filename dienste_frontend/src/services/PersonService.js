import axios from 'axios';

const PERSON_BASE_REST_API_URL = 'http://localhost:8080/api/v1/persons';

class PersonService {
  getAllPersons() {
    return axios.get(PERSON_BASE_REST_API_URL);
  }
}

export default new PersonService();
