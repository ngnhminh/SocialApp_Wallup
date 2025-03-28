package com.example.user.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection = "Users")
@Data
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String full_name;
    private String avatar_url;
    
    @Field("Bio")
    private String bio;
    @Field("Created_at")
    private LocalDate created_At;
    @Field("Updated_at")
    private LocalDate updated_At;
    public static class UserCreatedDateBuilder {
        private LocalDate create_At = LocalDate.now();
    }
    public static class UserUpdatedDateBuilder {
        private LocalDate updated_At = LocalDate.now();
    }
}
