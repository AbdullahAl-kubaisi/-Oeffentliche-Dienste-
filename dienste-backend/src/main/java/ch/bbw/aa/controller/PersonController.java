package ch.bbw.aa.controller;



import ch.bbw.aa.exception.ResourceNotFoundException;
import ch.bbw.aa.model.Person;
import ch.bbw.aa.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Person-controller
 * Build Get All Employees REST API | Postman
 * @author Abdullah Al-Kubaisi
 * @version 28.12.2022
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/persons")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping
    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

    // build create Person REST API
    @PostMapping
    public Person createEmployee(@RequestBody Person person) {
        return personRepository.save(person);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable  long id){
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person existiert nicht mit id:" + id));
        return ResponseEntity.ok(person);
    }

    // build update Person REST API
    @PutMapping("{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable long id,@RequestBody Person personDetails) {
        Person updatePerson = personRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person existiert nicht mit id: " + id));

        updatePerson.setTitl(personDetails.getTitl());
        updatePerson.setFirstname(personDetails.getFirstname());
        updatePerson.setLastname(personDetails.getLastname());
        updatePerson.setEmail(personDetails.getEmail());
        updatePerson.setPassword(personDetails.getPassword());
        updatePerson.setService(personDetails.getService());

        personRepository.save(updatePerson);

        return ResponseEntity.ok(updatePerson);
    }
}
