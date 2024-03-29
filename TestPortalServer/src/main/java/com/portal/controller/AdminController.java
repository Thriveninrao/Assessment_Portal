package com.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portal.model.Role;
import com.portal.model.User;
import com.portal.model.UserRole;
import com.portal.model.data.SuccessMessage;
import com.portal.service.EmailServiceInterface;
import com.portal.service.UserServiceInterface;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:4200")
public class AdminController {

	@Autowired
	private UserServiceInterface userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private EmailServiceInterface emailService;

	// creating user
	@PostMapping("/create")
	public ResponseEntity<?> createUser(@RequestBody User user) throws Exception {

		Role role = new Role();
		role.setRoleId(44L);
		role.setRoleName("ADMIN");

		UserRole userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);

		SuccessMessage message;

		if (!(userService.userExists(user))) {

			String generateUserName = userService.generateUserName(user);
			user.setUsername(generateUserName);

			String generatePassword = userService.generatePassword();
			user.setPassword(this.bCryptPasswordEncoder.encode(generatePassword));
			user.setProfile("Admin.jpg");

			if(user.getEmail().contains("@softtek.com")) {
				userService.createUser(user, userRole);
				message = new SuccessMessage("Success");
				try {
					emailService.sendEmailAdmin(user, generatePassword);
					System.out.println("Email sent successfully!");
				} catch (Exception e) {
					System.out.println("Failed to send email: " + e.getMessage());
				}
				}

				else {
					message=new SuccessMessage("This Email is not allowed, try with a softtek mail id.");
				}
				
				
				
			} else {
				message = new SuccessMessage("Email or Phone Number already exists");
			}
			return ResponseEntity.ok(message);
		}

	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return userService.getUser(username);
	}

	@DeleteMapping("/{username}")
	public ResponseEntity<?> deleteUser(@PathVariable("username") String username) {
		SuccessMessage message = new SuccessMessage(userService.deleteAdmin(username));
		return ResponseEntity.ok(message);
	}

}
