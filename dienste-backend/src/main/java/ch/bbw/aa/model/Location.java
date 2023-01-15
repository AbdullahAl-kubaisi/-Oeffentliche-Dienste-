package ch.bbw.aa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Location
 *
 * @author Abdullah Al-Kubaisi
 * @version 02.01.2023
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "street")
    private String street;

    @Column(name = "plz")
    private int plz;

    @Column(name = "place")
    private String place;

    @Column(name = "canton")
    private String canton;


}
