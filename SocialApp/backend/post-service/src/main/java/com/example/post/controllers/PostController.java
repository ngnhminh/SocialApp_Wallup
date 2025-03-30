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

import com.example.post.models.Post;
import com.example.post.services.PostService;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Post>> getAllUserPostsById(@PathVariable String id) {
        List<Post> postList = postService.getAllUserPostsById(id);
        return postList.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(postList);
    }

    @PostMapping
    public ResponseEntity<Post> createUser(@RequestBody Post post){
        Post savedUser = postService.createPost(post);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedUser);
    }

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        Post savedPost = postService.createPost(post);
        return  ResponseEntity.status(HttpStatus.SC_CREATED).body(savedPost);
    }

}
