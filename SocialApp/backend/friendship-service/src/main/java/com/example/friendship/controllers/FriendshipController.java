package com.example.friendship.controllers;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.friendship.services.FriendshipService;

@RestController
@RequestMapping("/api/friendships")
public class FriendshipController {
    private static final HttpStatusCode NOT_FOUND = null;
    private final FriendshipService friendshipService;

    public FriendshipController(FriendshipService friendshipService) {
        this.friendshipService = friendshipService;
    }

    @DeleteMapping("/unfriend/{userId1}/{userId2}")
    public ResponseEntity<String> Unfriend(@PathVariable String userId1, @PathVariable String userId2) {
        boolean success = friendshipService.unfriend(userId1, userId2);
        return success ? ResponseEntity.ok("Hủy kết bạn thành công") : ResponseEntity.status(NOT_FOUND).body("Không tìm thấy bạn bè");
    }
}
