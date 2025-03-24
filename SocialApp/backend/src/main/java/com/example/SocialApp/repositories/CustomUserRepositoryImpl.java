package com.example.SocialApp.repositories; // Đặt đúng package!

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.SocialApp.models.User;

@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User findUserWithMostPosts() {
        List<User> users = entityManager.createQuery(
            "SELECT u FROM User u ORDER BY SIZE(u.posts) DESC", User.class)
            .setMaxResults(1)
            .getResultList();
        
        return users.isEmpty() ? null : users.get(0);
    }
}
