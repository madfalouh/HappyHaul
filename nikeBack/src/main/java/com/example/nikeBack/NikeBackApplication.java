package com.example.nikeBack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(exclude = { ManagementWebSecurityAutoConfiguration.class })
public class NikeBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(NikeBackApplication.class, args);
	}

}
