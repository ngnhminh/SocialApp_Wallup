package com.example.post.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.post.models.Comment;
import com.example.post.repositories.CommentRepository;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> getAllCommentsOfUserInOnePostWithId(String userId, String postId){
        return commentRepository.findByPostIdAndUserId(userId, postId);
    }

    public Comment createComment(Comment comment){
        return commentRepository.save(comment);
    }
}
