package com.example.SocialApp.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import lombok.*;
@Document(collection = "GroupMessages")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class GroupMessages {
    @Id
    private String id;
    private String groupId;
    private String senderId; //User
    private String message_Text;

    @Builder.Default
    private boolean is_Read = false;

    private LocalDate created_At;

    public static class GroupMessageBuilder {
        private LocalDate created_At = LocalDate.now();
    }
}
