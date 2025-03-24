package com.example.SocialApp.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lambok.Data;
@Document(collection = "GroupMembers")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class GroupMembers {
    @Id
    private String id;
    private String GroupChatId;
    private String UserId;
    private LocalDate joined_At;
    
    public static class GroupMemberBuilder {
        private LocalDate joined_At = LocalDate.now();
    }
}
