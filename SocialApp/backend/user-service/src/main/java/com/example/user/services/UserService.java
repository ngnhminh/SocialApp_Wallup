package com.example.user.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.user.models.User;
import com.example.user.repositories.UserRepository;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public Optional<User> getUserByUserName(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    //Hàm lấy tất cả danh sách người dùng
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //Hàm tạo người dùng
    public User createUser(User user){
        return userRepository.save(user);
    }

    //Hàm xóa người dùng qua id
    public boolean deletetUserById(String id){
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<User> getUserById(String id){
        return userRepository.findById(id);
    }
}
