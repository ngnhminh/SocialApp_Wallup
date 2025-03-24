import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
    User findByUsername(String username);
}

public interface CustomUserRepository{
    User findUserWithMostPosts();
}
