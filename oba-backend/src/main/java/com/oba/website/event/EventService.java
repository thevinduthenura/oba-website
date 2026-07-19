package com.oba.website.event;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventService {
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAll() { 
        return eventRepository.findAll(); 
    }

    public List<Event> getByStatus(EventStatus status) { 
        return eventRepository.findByStatusOrderByDateDesc(status); 
    }
}
