package com.example.groupchat.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.groupchat.models.GroupMessage;
import com.example.groupchat.repositories.GroupMessageRepository;

@Service
@Transactional
public class GroupMessageService {
    private final GroupMessageRepository groupMessageRepository;

    public GroupMessageService(GroupMessageRepository groupMessageRepository) {
        this.groupMessageRepository = groupMessageRepository;
    }

    public List<GroupMessage> getAllMessagesInGroupChat(String id){
        return groupMessageRepository.findByGroupId(id);
    }

    public GroupMessage createMessage(GroupMessage groupMessage){
        return groupMessageRepository.save(groupMessage);
    }
}
