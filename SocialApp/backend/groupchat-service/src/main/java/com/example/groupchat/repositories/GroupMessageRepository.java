package com.example.groupchat.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.groupchat.models.GroupMessage;


@Repository
public interface GroupMessageRepository extends MongoRepository<GroupMessage, String>{
    List<GroupMessage> findByGroupId(String groupId);
}
