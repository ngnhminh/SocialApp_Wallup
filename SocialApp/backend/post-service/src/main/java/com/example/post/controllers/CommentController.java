package com.example.post.controllers;

import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.post.models.Comment;
import com.example.post.services.CommentService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Comment>> getAllCommentsOfUserInOnePostWithId(@PathVariable String UserId, @PathVariable String PostId) {
        List<Comment> commentList = commentService.getAllCommentsOfUserInOnePostWithId(UserId, PostId);
        return commentList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(commentList);
    }

    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment cmt){
        Comment savedComment = commentService.createComment(cmt);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedComment);
    }
}
