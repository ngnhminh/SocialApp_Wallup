package com.example.message.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.message.models.Message;

@Repository
public interface MessageRepository extends MongoRepository<Message, String>{
    List<Message> findBySenderIdAndReceiverId(String senderId, String receiverId);
}
