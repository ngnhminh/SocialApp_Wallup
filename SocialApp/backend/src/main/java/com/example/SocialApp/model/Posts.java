import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lambok.Data;
public class Posts {
    @Id
    private int id;
    private String UserId;
    private String Content;
    private String Image_url;
    private LocalDate created_at;
}
