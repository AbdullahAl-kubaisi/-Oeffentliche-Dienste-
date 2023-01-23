package ch.bbw.aa.controller;


import ch.bbw.aa.exception.ResourceNotFoundException;
import ch.bbw.aa.logger.LogService;
import ch.bbw.aa.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import ch.bbw.aa.repository.RoleRepository;

/**
 * Role-controller
 * Build Role REST API | Postman
 * @author Abdullah Al-Kubaisi
 * @version 30.12.2022
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/roles")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private LogService logService;

    @GetMapping
    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }

    // build create Role REST API
    @PostMapping
    public Role createRole(@RequestBody Role role) {
        logService.log("Role wurde erstellt", "info");
        return roleRepository.save(role);
    }

    // build get role by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable  long id){
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Role existiert nicht mit id:" + id));
        return ResponseEntity.ok(role);
    }

    // build update Role REST API
    @PutMapping("{id}")
    public ResponseEntity<Role> updateRole(@PathVariable long id,@RequestBody Role roleDetails) {
        Role updateRole = roleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Role existiert nicht mit id: " + id));

        updateRole.setRolename(roleDetails.getRolename());

        Role updatedRole = roleRepository.save(updateRole);

        return ResponseEntity.ok(updatedRole);
    }

    // build delete Role REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRole(@PathVariable long id){
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Role existiert nicht mit id: " + id));

        roleRepository.delete(role);
        logService.log("Role wurde gelöscht", "info");

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
