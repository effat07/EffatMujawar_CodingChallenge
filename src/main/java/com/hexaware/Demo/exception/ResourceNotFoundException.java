package com.hexaware.Demo.exception;

public class ResourceNotFoundException extends RuntimeException {
  public ResourceNotFoundException(String message) {
	    super(message);
  }
}
