import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    public void FindUser() {
        User user = userRepo.findByUsername("john_doe");
        System.out.println(user);
    }
}
