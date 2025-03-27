package com.example.SocialApp.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
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

    private String receiverId;//User người nhận
    private String message_Text;

    @Builder.Default
    private Boolean is_Read = false;

    private LocalDate created_At;

    public static class MessageBuilder {
        private LocalDate create_At = LocalDate.now();
    }
}
