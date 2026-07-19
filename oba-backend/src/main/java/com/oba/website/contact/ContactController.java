package com.oba.website.contact;

import com.oba.website.common.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> sendMessage(@Valid @RequestBody ContactMessage message) {
        message.setId(null); // ensure no id is sent from client
        contactRepository.save(message);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }
}
