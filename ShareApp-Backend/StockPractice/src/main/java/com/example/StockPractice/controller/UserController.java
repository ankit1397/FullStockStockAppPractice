package com.example.StockPractice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StockPractice.model.User;
import com.example.StockPractice.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public boolean register(@Valid @RequestBody User user) {
		try{
			User savedUser = userService.register(user);
			return true;
		}
		catch(Exception e) {
			System.out.println("User not saved");
		}
		return false;
	}

	@GetMapping("/login")
	public boolean login(@Valid @RequestBody User user) {
		User userDB = userService.findByUsername(user.getUsername());
		if (user.getPassword().equals(userDB.getPassword()) && user.getUsername().equals(userDB.getUsername())) {
           return true;
		}
		return false;
	}
}
