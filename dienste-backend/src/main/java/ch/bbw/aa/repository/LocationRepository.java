package ch.bbw.aa.repository;

import ch.bbw.aa.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Location-repo
 * All crud database methods
 * @author Abdullah Al-Kubaisi
 * @version 02.01.2023
 */

public interface LocationRepository extends JpaRepository<Location, Long> {
    // all crud database methods
}