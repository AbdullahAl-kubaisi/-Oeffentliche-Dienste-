package ch.bbw.aa.repository;

import ch.bbw.aa.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Person-repo
 * All crud database methods
 * @author Abdullah Al-Kubaisi
 * @version 30.12.2022
 */
public interface RoleRepository extends JpaRepository<Role, Long> {
    // all crud database methods
}