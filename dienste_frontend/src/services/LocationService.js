import axios from 'axios';

const LOCATION_BASE_REST_API_URL = 'http://localhost:8080/api/v1/locations';

class LocationService {
    getAllLocations() {
        return axios.get(LOCATION_BASE_REST_API_URL);
    }

    createLocation(location) {
        return axios.post(LOCATION_BASE_REST_API_URL, location);
    }

    getLocationById(locationId) {
        return axios.get(LOCATION_BASE_REST_API_URL + '/' + locationId);
    }

    updateLocation(locationId, location) {
        return axios.put(LOCATION_BASE_REST_API_URL + '/' + locationId, location);
    }

    deleteLocation(locationId) {
        return axios.delete(LOCATION_BASE_REST_API_URL + '/' + locationId);
    }
}

export default new LocationService();
