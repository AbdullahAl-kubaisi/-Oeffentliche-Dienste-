package ch.bbw.aa;

import ch.bbw.aa.model.Person;
import ch.bbw.aa.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private PersonRepository personRepository;

	@Override
	public void run(String... args) throws Exception {
//		Person p1 = new Person();
//		p1.setFirstname("Abdullah");
//		p1.setLastname("Ahmed");
//		p1.setEmail("abdullah@gmail.com");
//		p1.setService("Informatiker");
//		personRepository.save(p1);

//		Person p2 = new Person();
//		p2.setFirstname("Ali");
//		p2.setLastname("Leo");
//		p2.setEmail("Leo@gmail.com");
//		p2.setService("Zahnarzt");
//		personRepository.save(p2);
	}
}
