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

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
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
    public boolean deleteUserById(String id){
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public User getUserById(String id){
        return userRepository.findById(id).orElse(null);
    }

    public Optional<User> getUserByUsernameAndPassword(String username, String password) {
        return Optional.ofNullable(userRepository.findByUsernameAndPassword(username, password));
    }

    public User getUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password).orElse(null);
    }
        

}
