package com.example.groupchat.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.groupchat.models.GroupChat;

@Repository
public interface GroupChatRepository extends MongoRepository<GroupChat, String> {
}
