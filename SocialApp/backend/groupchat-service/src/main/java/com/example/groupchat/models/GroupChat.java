package com.example.groupchat.models;
import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "GroupChats")
public class GroupChat {
    @Id
    private String id;
    private String groupName;
    private String createdBy; //User
    private LocalDate createdAt;
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate createAt = LocalDate.now();
    
}
