package com.example.groupchat.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.groupchat.models.GroupChat;
import com.example.groupchat.repositories.GroupChatRepository;

@Service
@Transactional
public class GroupChatService {
    private final GroupChatRepository groupChatRepository;

    public GroupChatService(GroupChatRepository groupChatRepository) {
        this.groupChatRepository = groupChatRepository;
    }

    public Optional<GroupChat> getGroupChatId(String id){
        return groupChatRepository.findById(id);
    }

    public GroupChat createGroupChat(GroupChat grpchat){
        return groupChatRepository.save(grpchat);
    }

    public boolean deleteGroupChat(String groupId){
        if(groupChatRepository.existsById(groupId)){
            groupChatRepository.deleteById(groupId);
            return true;
        }
        return false;
    }
}
