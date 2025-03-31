package com.example.message.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.message.models.Message;
import com.example.message.repositories.MessageRepository;

@Service
@Transactional
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    //Lấy thông tin chat 2 người 
    public List<Message> getMessageBySenderIdAndReceiverId(String senderId, String receiverId){
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }

    //Tạo tin nhắn mới
    public Message createMessage(Message message){
        return messageRepository.save(message);
    }
}
