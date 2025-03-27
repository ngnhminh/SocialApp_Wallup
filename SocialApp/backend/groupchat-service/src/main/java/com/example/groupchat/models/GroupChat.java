package com.example.SocialApp.models;
import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;
import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "GroupChats")
public class GroupChat {
    @Id
    private String id;
    private String groupName;
    private String created_By; //User
    private LocalDate created_At;
    
    public static class GroupChatBuilder {
        private LocalDate create_At = LocalDate.now();
    }
}
