package com.example.post.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.post.models.Post;
import com.example.post.repositories.PostRepository;

@Service
@Transactional
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllUserPostsById(String userId){
        return postRepository.findByUserId(userId);
    }

    public Post createPost(Post post){
        return postRepository.save(post);
    }
}
