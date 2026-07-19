package com.oba.website.event;

import com.oba.website.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Event>>> getEvents(
            @RequestParam(required = false) EventStatus status) {
        List<Event> events = status != null ? eventService.getByStatus(status) : eventService.getAll();
        return ResponseEntity.ok(ApiResponse.ok(events));
    }
}
