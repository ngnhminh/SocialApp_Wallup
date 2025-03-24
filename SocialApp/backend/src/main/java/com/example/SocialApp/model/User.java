import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lambok.Data;
@Document(collection = "Users")

@Data
public class User {
    @Id
    private int id;
    private String username;
    private String email;
    private String password;
    private String full_name;
    private String avatar_url;
    private String bio;
    private LocalDate created_at;
    private LocalDate updated_at;
}
