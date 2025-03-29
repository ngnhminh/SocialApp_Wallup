package com.example.groupchat.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

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
    private String messageText;

    @Builder.Default
    private boolean isRead = false;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate createdAt = LocalDate.now();
    
}
