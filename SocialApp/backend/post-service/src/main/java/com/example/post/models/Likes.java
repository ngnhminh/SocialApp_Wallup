package com.example.post.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "Likes")
@Data
public class Likes {
    @Id
    private String id;
    private String userId;
    private String postId;
}
