package ch.bbw.aa.repository;

import ch.bbw.aa.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    // all crud database methods
}