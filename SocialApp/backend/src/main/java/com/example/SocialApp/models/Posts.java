package com.example.SocialApp.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lambok.Data;
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
    
    private LocalDate created_At;
    public static class PostBuilder {
        private LocalDate create_At = LocalDate.now();
    }
}
