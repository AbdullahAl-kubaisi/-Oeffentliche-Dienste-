package ch.bbw.aa.repository;

import ch.bbw.aa.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

/**
 * Location-repo
 * All crud database methods
 * @author Abdullah Al-Kubaisi
 * @version 02.01.2023
 */

public interface LocationRepository extends JpaRepository<Location, Long> {
    // all crud database methods
    @Query(value = "SELECT * FROM locations WHERE id = :id", nativeQuery = true)
    Optional<Location> findById(@Param("id") long id);
}