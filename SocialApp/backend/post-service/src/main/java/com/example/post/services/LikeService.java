package com.example.post.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.post.models.Like;
import com.example.post.repositories.LikeRepository;

@Service
@Transactional
public class LikeService {
    private final LikeRepository likeRepository;

    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    //Hàm lấy tất cả like trong bài viết
    public List<Like> getAllLikeByPostId(String id){
        return likeRepository.findByPostId(id);
    }

    //hàm tạo Like
    public Like createLike(Like like){
        return likeRepository.save(like);
    }

    //Hàm xóa like
    public boolean deletetLikeByLikeId(String id){
        if(likeRepository.existsById(id)){
            likeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
