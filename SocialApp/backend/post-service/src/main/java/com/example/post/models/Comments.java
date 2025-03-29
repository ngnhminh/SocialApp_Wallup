package com.example.post.models;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;

@Document(collection = "Comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comments {
    @Id
    private String id;
    private String content;
    private String postId;
    private String userId;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate createdAt = LocalDate.now();
    
}
