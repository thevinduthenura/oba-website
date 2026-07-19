package com.oba.website.gallery;

import com.oba.website.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {
    private final GalleryRepository galleryRepository;

    public GalleryController(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<GalleryImage>>> getGallery() {
        return ResponseEntity.ok(ApiResponse.ok(galleryRepository.findAll()));
    }
}
