package ch.bbw.aa.controller;


import ch.bbw.aa.exception.ResourceNotFoundException;
import ch.bbw.aa.model.Roster;
import ch.bbw.aa.repository.RoleRepository;
import ch.bbw.aa.repository.RosterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Roster-controller
 * Build CRUD REST API | Postman
 * @author Abdullah Al-Kubaisi
 * @version 01.01.2023
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/rosters")
public class RosterController {

    @Autowired
    private RosterRepository rosterRepository;
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping
    public List<Roster> getAllRosters(){
        return rosterRepository.findAll();
    }

    // build create Roster REST API
    @PostMapping
    public Roster createRoster(@RequestBody Roster roster) {
        return rosterRepository.save(roster);
    }

    // build get roster by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Roster> getRosterById(@PathVariable  long id){
        Roster roster = rosterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Roster existiert nicht mit id:" + id));
        return ResponseEntity.ok(roster);
    }

    // build update Roster REST API
    @PutMapping("{id}")
    public ResponseEntity<Roster> updateRoster(@PathVariable long id,@RequestBody Roster rosterDetails) {
        Roster updateRoster = rosterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Roster existiert nicht mit id: " + id));

        updateRoster.setRoster_from(rosterDetails.getRoster_from());
        updateRoster.setRoster_to(rosterDetails.getRoster_to());
        updateRoster.setComment(rosterDetails.getComment());
        updateRoster.setPerson(rosterDetails.getPerson());

        rosterRepository.save(updateRoster);

        return ResponseEntity.ok(updateRoster);
    }

    // build delete Roster REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRoster(@PathVariable long id){

        Roster roster = rosterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Roster existiert nicht mit id: " + id));

        rosterRepository.delete(roster);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}



