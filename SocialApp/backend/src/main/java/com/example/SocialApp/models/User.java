package com.example.SocialApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lambok.Data;
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
    private String bio;
    private LocalDate created_At;
    private LocalDate updated_At;
    public static class UserCreatedDateBuilder {
        private LocalDate create_At = LocalDate.now();
    }
    public static class UserUpdatedDateBuilder {
        private LocalDate updated_At = LocalDate.now();
    }
}
