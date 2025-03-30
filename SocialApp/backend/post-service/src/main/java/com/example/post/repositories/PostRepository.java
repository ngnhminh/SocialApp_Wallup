package com.example.post.repositories;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.post.models.Post;

@Repository
public interface PostRepository extends MongoRepository<Post, String>{
    List<Post> findByUserId(String userId);
}

