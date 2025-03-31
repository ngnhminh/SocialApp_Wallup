package com.example.message.controllers;

import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.message.models.Message;
import com.example.message.services.MessageService;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private final MessageService  messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/{senderid}/{receiverId}")
    public ResponseEntity<List<Message>> getAllMessagesOfBoxChat(@PathVariable String senderId, @PathVariable String receiverId) {
        List<Message> messageList = messageService.getMessageBySenderIdAndReceiverId(senderId, receiverId);
        return messageList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(messageList);
    }

    @PostMapping
    public ResponseEntity<Message> createMessage(@RequestBody Message message){
        Message savedComment = messageService.createMessage(message);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedComment);
    }
}
