package ch.bbw.aa.repository;

import ch.bbw.aa.model.Roster;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Person-repo
 * All crud database methods
 * @author Abdullah Al-Kubaisi
 * @version 01.01.2023
 */

public interface RosterRepository extends JpaRepository<Roster, Long> {
    // all crud database methods
}