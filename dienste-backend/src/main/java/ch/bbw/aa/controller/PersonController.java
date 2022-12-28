package ch.bbw.aa.controller;



import ch.bbw.aa.model.Person;
import ch.bbw.aa.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

}
