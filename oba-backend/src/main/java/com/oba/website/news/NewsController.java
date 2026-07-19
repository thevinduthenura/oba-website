package com.oba.website.news;

import com.oba.website.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    private final NewsRepository newsRepository;

    public NewsController(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<NewsPost>>> getNews() {
        return ResponseEntity.ok(ApiResponse.ok(newsRepository.findAllByOrderByPublishedAtDesc()));
    }
}
