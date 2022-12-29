package ch.bbw.aa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * Person
 * JPA Entity
 * @author Abdullah Al-Kubaisi
 * @version 27.12.2022
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "persons")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "titl")
    private String titl;


    @Column(name = "firstname", nullable = false)
    private String firstname;


    @Column(name = "lastname", nullable = false)
    private String lastname;


    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "service", nullable = false)
    private String service;

    @ManyToOne
    @JoinColumn(name = "roleidfs", insertable = true, updatable = true)
    private Role role;

}
