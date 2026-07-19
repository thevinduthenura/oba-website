package com.oba.website.contact;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.OffsetDateTime;

@Entity
@Table(name = "contact_messages")
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, length = 200)
    private String name;

    @Email
    @NotBlank
    @Column(nullable = false, length = 200)
    private String email;

    @NotBlank
    @Column(nullable = false, length = 400)
    private String subject;

    @NotBlank
    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(name = "received_at", nullable = false, updatable = false)
    private OffsetDateTime receivedAt = OffsetDateTime.now();

    public ContactMessage() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public OffsetDateTime getReceivedAt() {
        return receivedAt;
    }

    public void setReceivedAt(OffsetDateTime receivedAt) {
        this.receivedAt = receivedAt;
    }
}
