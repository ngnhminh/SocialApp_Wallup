package com.example.post.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.post.models.Like;

@Repository
public interface LikeRepository extends MongoRepository<Like, String>{
    List<Like> findByPostId(String postId);
}
