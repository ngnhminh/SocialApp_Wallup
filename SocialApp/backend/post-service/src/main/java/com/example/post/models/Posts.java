package com.example.post.models;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;
@Document(collection = "Posts")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Posts {
    @Id
    private String id;
    private String userId;
    private String Content;
    private String Image_url;
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate created_At = LocalDate.now();;
}
