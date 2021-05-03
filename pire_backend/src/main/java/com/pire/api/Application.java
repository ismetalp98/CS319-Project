package com.pire.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * This class responseable for running the applcaiton
 * this is the main class
 * @author atesel
 *
 */
@SpringBootApplication
public class Application {

	// Run spring boot applcaiton
	public static void main(String[] args) throws ClassNotFoundException {
		SpringApplication.run(Application.class, args);
	}

	// instance of logger help to print logs while the applcaiton running
	private final Logger log = LoggerFactory.getLogger(this.getClass());

	public Application() {
		log.debug("App is running..");
	}
	
	// Corse filter confugiration
	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(false);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}
}
