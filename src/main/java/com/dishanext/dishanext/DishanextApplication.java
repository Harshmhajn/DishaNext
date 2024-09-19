package com.dishanext.dishanext;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DishanextApplication {
	public static void main(String[] args) {
		SpringApplication.run(DishanextApplication.class, args);
	}

	@GetMapping("/home")
	@CrossOrigin
	public String home(){
		return "spring boot";
	}
	
}
