package ch.bbw.aa.controller;

import ch.bbw.aa.exception.ResourceNotFoundException;
import ch.bbw.aa.model.Location;
import ch.bbw.aa.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Location-controller
 * Build Location REST API | Postman
 * @author Abdullah Al-Kubaisi
 * @version 02.01.2023
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping
    public List<Location> getAllLocations(){
        return locationRepository.findAll();
    }

    // build create Location REST API
    @PostMapping
    public Location createLocation(@RequestBody Location location) {
        return locationRepository.save(location);
    }

    // build get Location by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable  long id){
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Location existiert nicht mit id:" + id));
        return ResponseEntity.ok(location);
    }

    // build update Location REST API
    @PutMapping("{id}")
    public ResponseEntity<Location> updateLocation(@PathVariable long id,@RequestBody Location locationDetails) {
        Location updateLocation = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Location existiert nicht mit id: " + id));

        updateLocation.setCanton(locationDetails.getCanton());
        updateLocation.setStreet(locationDetails.getStreet());
        updateLocation.setPlz(locationDetails.getPlz());
        updateLocation.setPlace(locationDetails.getPlace());

        Location updatedLocation = locationRepository.save(updateLocation);

        return ResponseEntity.ok(updatedLocation);
    }

    // build delete Location REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteLocation(@PathVariable long id){
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Location existiert nicht mit id: " + id));

        locationRepository.delete(location);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
