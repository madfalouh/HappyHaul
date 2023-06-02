package com.example.Nike;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class NikeApplication {

	public static void main(String[] args) {
		SpringApplication.run(NikeApplication.class, args);
	}

}
