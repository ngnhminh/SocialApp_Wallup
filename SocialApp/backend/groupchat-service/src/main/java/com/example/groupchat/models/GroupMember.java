package com.example.groupchat.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import lombok.*;
@Document(collection = "GroupMembers")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class GroupMember {
    @Id
    private String id;
    private String groupChatId;
    private String userId;
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Builder.Default
    private LocalDate joinedAt = LocalDate.now();
    
}
