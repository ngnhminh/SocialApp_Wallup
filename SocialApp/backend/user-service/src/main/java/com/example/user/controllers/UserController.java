package com.example.user.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.models.User;
import com.example.user.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // 1. Lấy danh sách tất cả Users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // 2. Lấy thông tin User theo ID
    // @GetMapping("/{id}")
    // public User getUserById(@PathVariable String id) {
    //     return userService.getUserById(id);
    // }

    // 3. Thêm User mới
    // @PostMapping
    // public User createUser(@RequestBody User user) {
    //     return userService.createUser(user);
    // }

    // 4. Cập nhật User
    // @PutMapping("/{id}")
    // public User updateUser(@PathVariable String id, @RequestBody User user) {
    //     return userService.updateUser(id, user);
    // }

    // 5. Xóa User
    // @DeleteMapping("/{id}")
    // public String deleteUser(@PathVariable String id) {
    //     userService.deleteUser(id);
    //     return "User deleted successfully!";
    // }
}
