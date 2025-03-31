package com.example.groupchat.controllers;

import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupchat.models.GroupMessage;
import com.example.groupchat.services.GroupMessageService;

@RestController
@RequestMapping("/api/groupmessages")
public class GroupMessageController {
    private final GroupMessageService groupmessageService;

    public GroupMessageController(GroupMessageService groupmessageService) {
        this.groupmessageService = groupmessageService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<GroupMessage>> getAllMessagesInGroupChat(@PathVariable String id) {
        List<GroupMessage> groupMessageList = groupmessageService.getAllMessagesInGroupChat(id);
        return groupMessageList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(groupMessageList);
    }

    @PostMapping
    public ResponseEntity<GroupMessage> createGroupMessage(@RequestBody GroupMessage groupMessage){
        GroupMessage savedGroupMessage = groupmessageService.createMessage(groupMessage);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedGroupMessage);
    }
}
