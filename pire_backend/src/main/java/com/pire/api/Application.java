package com.pire.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

  public static void main(String[] args) throws ClassNotFoundException {
    SpringApplication.run(Application.class, args);
  }

  private final Logger log = LoggerFactory.getLogger(this.getClass());

  public Application() {
    log.debug("App is running..");
  }

}
