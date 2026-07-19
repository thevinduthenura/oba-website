package com.oba.website.news;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface NewsRepository extends JpaRepository<NewsPost, Long> {
    List<NewsPost> findAllByOrderByPublishedAtDesc();
}
