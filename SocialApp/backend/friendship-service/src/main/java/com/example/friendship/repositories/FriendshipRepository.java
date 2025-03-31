package com.example.friendship.repositories;

import com.example.friendship.models.Friendship;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface FriendshipRepository extends JpaRepository<Friendship, String> {
    
    Optional<Friendship> findByUserId1AndUserId2(String userId1, String userId2);
}
