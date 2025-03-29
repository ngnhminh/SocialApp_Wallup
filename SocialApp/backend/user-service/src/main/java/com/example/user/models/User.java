package com.example.user.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String fullName;
    private String avatarUrl;
    private String bio;
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate createdAt = LocalDate.now();
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate updatedAt = LocalDate.now();
}
