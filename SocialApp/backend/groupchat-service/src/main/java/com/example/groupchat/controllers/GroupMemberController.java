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
import com.example.groupchat.models.GroupMember;
import com.example.groupchat.models.GroupMessage;
import com.example.groupchat.services.GroupMemberService;

@RestController
@RequestMapping("/api/groupmembers")
public class GroupMemberController {
    private final GroupMemberService groupMemberService;

    public GroupMemberController(GroupMemberService groupMemberService) {
            this.groupMemberService = groupMemberService;
        }

    @PostMapping
    public ResponseEntity<GroupMember> addGroupMember(@RequestBody GroupMember groupMember){
        GroupMember savedGroupMember = groupMemberService.addGroupMember(groupMember);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedGroupMember);
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<List<GroupMember>> getAllMemberByGroupId(@PathVariable String groupId) {
         List<GroupMember> groupMemberList = groupMemberService.getAllGroupMembersByGroupId(groupId);
        return groupMemberList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(groupMemberList);
    }

    @DeleteMapping("/groupmember/{groupMemberId}")
    public ResponseEntity<String> deleteGroupMember(@PathVariable String groupMemberId) {
        boolean deleted = groupMemberService.deleteGroupMember(groupMemberId);
        return deleted ? ResponseEntity.ok("Xoa thanh vien thanh cong") 
                       : ResponseEntity.badRequest().body("Xoa thanh vien khong thanh cong");
    }

}
