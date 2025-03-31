package com.example.groupchat.controllers;

import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupchat.models.GroupChat;
import com.example.groupchat.services.GroupChatService;

@RestController
@RequestMapping("/api/groupchats")
public class GroupChatController {
    private final GroupChatService groupChatService;

    public GroupChatController(GroupChatService groupChatService) {
        this.groupChatService = groupChatService;
    }

    @PostMapping
    public ResponseEntity<GroupChat> createGroupChat(@RequestBody GroupChat groupChat){
        GroupChat savedGroupChat = groupChatService.createGroupChat(groupChat);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedGroupChat);
    }

    @DeleteMapping("/groupchat/{groupChatId}")
    public ResponseEntity<String> deleteGroupChat(@PathVariable String groupChatId) {
        boolean deleted = groupChatService.deleteGroupChat(groupChatId);
        return deleted ? ResponseEntity.ok("Xoa nhom thanh cong") 
                       : ResponseEntity.badRequest().body("Xoa nhom khong thanh cong");
    }

    @GetMapping("/{id}")
    public ResponseEntity<GroupChat> getGroupChat(@PathVariable String id) {
        return groupChatService.getGroupChatId(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build());
    }
}
