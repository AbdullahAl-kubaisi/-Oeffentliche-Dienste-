package ch.bbw.aa.repository;

import ch.bbw.aa.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Person-repo
 * All crud database methods
 * @author Abdullah Al-Kubaisi
 * @version 27.12.2022
 */
public interface PersonRepository extends JpaRepository<Person, Long> {
    // all crud database methods
}
