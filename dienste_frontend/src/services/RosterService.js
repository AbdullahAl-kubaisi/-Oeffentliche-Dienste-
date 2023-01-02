import axios from 'axios';

const ROSTER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/rosters';

class RosterService {
    getAllRosters() {
        return axios.get(ROSTER_BASE_REST_API_URL);
    }

    createRoster(roster) {
        return axios.post(ROSTER_BASE_REST_API_URL, roster);
    }

    getRosterById(rosterId) {
        return axios.get(ROSTER_BASE_REST_API_URL + '/' + rosterId);
    }

    updateRoster(rosterId, roster) {
        return axios.put(ROSTER_BASE_REST_API_URL + '/' + rosterId, roster);
    }

    deleteRoster(rosterId) {
        return axios.delete(ROSTER_BASE_REST_API_URL + '/' + rosterId);
    }
}

export default new RosterService();
