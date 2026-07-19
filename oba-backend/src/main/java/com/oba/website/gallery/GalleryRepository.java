package com.oba.website.gallery;
import org.springframework.data.jpa.repository.JpaRepository;
public interface GalleryRepository extends JpaRepository<GalleryImage, Long> {}
