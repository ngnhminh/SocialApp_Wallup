package com.example.post.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.post.models.Comment;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findByUserId(String postId);
    List<Comment> findByPostIdAndUserId(String userId, String postId);
}
