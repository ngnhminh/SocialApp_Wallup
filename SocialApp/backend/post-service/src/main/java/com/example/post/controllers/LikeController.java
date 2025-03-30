package com.example.post.controllers;

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

import com.example.post.models.Like;
import com.example.post.services.LikeService;

@RestController
@RequestMapping("/api/likes")
public class LikeController {
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Like>> getAllUserPostsById(@PathVariable String id) {
        List<Like> likeList = likeService.getAllLikeByPostId(id);
        return likeList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(likeList);
    }

    @PostMapping
    public ResponseEntity<Like> createLike(@RequestBody Like like){
        Like savedLike = likeService.createLike(like);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedLike);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLike(@PathVariable String id) {
        boolean deleted = likeService.deletetLikeByLikeId(id);
        if (deleted) {
            return ResponseEntity.ok("UnLike thành công");
        } else {
            return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).body("Chưa like bài này");
        }
    }
}
