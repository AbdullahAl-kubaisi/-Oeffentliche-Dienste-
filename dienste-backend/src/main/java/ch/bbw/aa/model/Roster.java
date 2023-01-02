package ch.bbw.aa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Roster : Dienstplan
 *
 * @author Abdullah Al-Kubaisi
 * @version 01.01.2023
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "rosters")
public class Roster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "roster_from")
    private LocalDate roster_from;
    @Column(name = "roster_to")
    private LocalDate roster_to;
    @Column(name = "comment")
    private String comment;
    @OneToOne
    @JoinColumn(name = "personidfs", insertable = true, updatable = true)
    private Person person;

}
