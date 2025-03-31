package com.example.user.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.user.models.User;
import com.example.user.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Tìm tài khoản theo username
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String username) {
        Optional<User> user = userService.getUserByUserName(username);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Tìm tài khoản theo email
    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userService.getUserByEmail(email);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Kiểm tra tài khoản qua username và password
    @GetMapping("/checklogin/{username}/{password}")
    public ResponseEntity<User> getUserByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        Optional<User> user = userService.getUserByUsernameAndPassword(username, password);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/checkloginwitemail/{email}/{password}")
    public ResponseEntity<User> getUserByEmailAndPassword(@PathVariable String email, @PathVariable String password) {
        Optional<User> user = userService.getUserByEmailAndPassword(email, password);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Lấy danh sách tất cả người dùng
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // Tạo người dùng mới
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    // Xóa người dùng theo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) {
        boolean deleted = userService.deleteUserById(id);
        return deleted ? ResponseEntity.ok("User xóa thành công") 
                       : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy user");
    }
}
