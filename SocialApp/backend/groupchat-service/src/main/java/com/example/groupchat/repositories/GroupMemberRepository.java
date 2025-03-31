package com.example.groupchat.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.groupchat.models.GroupMember;

@Repository
public interface GroupMemberRepository extends MongoRepository<GroupMember, String>{
    List<GroupMember> findByGroupChatId(String groupChatId);
}
