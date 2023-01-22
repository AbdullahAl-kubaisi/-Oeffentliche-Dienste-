package ch.bbw.aa.logger;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LogRepository extends MongoRepository<Log, String> {


}
