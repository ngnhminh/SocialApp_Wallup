package com.example.SocialApp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lambok.Data;

@Document(collection = "Comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comments {
    @Id
    private String id;
    private String content;
    private LocalDate created_At;
    private String postId;
    private String userId;

    public static class CommentBuilder {
        private LocalDate created_At = LocalDate.now();
    }
}
