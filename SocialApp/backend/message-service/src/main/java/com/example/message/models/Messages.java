package com.example.message.models;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "Messages")
public class Messages {
    @Id
    private String id;

    private String senderId; //User người gửi 

    private String receiverId; //User người nhận
    private String messageText;

    @Builder.Default
    private Boolean isRead = false;
    
    @Builder.Default
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate createdAt = LocalDate.now();
}
