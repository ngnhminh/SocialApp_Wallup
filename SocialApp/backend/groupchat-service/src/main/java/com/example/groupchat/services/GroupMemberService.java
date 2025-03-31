package com.example.groupchat.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.groupchat.models.GroupMember;
import com.example.groupchat.repositories.GroupMemberRepository;

@Service
@Transactional
public class GroupMemberService {
    private final GroupMemberRepository groupMemberRepository;

    public GroupMemberService(GroupMemberRepository groupMemberRepository) {
        this.groupMemberRepository = groupMemberRepository;
    }

    public List<GroupMember> getAllGroupMembersByGroupId(String groupChatId){
        return groupMemberRepository.findByGroupChatId(groupChatId);
    }

    public GroupMember addGroupMember(GroupMember member){
        return groupMemberRepository.save(member);
    }

    public boolean deleteGroupMember(String memberId){
        if(groupMemberRepository.existsById(memberId)){
            groupMemberRepository.deleteById(memberId);
            return true;
        }
        return false;
    }
}
