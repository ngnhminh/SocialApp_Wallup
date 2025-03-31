package com.example.friendship.services;

import com.example.friendship.repositories.FriendshipRepository;
import com.example.friendship.models.Friendship;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class FriendshipService {
    private final FriendshipRepository friendshipRepository;

    public FriendshipService(FriendshipRepository friendshipRepository) {
        this.friendshipRepository = friendshipRepository;
    }

    // Thêm bạn bè 
    public Friendship addFriend(Friendship friendship) {
        return friendshipRepository.save(friendship);
    }

    // Unfriend
    public boolean unfriend(String userId1, String userId2) {
        Optional<Friendship> friendship = friendshipRepository.findByUserId1AndUserId2(userId1, userId2);
        if (friendship.isPresent()) {
            friendshipRepository.delete(friendship.get());
            return true;
        }
        return false;
    }
}
