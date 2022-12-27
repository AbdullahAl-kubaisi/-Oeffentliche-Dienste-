package ch.bbw.aa.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * Throw an exception when the table of DB is not existing
 * created exception NOT FOUND whenever a required not existing db table then my app should throw exception,
 * that exception will be send again to the client
 * @author Abdullah Al-Kubaisi
 * @version 27.12.2022
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String message){
        super(message);
    }
}
