package com.example.SocialApp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lambok.Data;
@Document(collection = "Friendships")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
class Friendships {
    @Id
    private String id;

    private String user1Id;
    private String user2Id;
    private String status;

    private LocalDate create_At;
    public static class FriendshipBuilder {
        private LocalDate create_At = LocalDate.now();
    }
}
