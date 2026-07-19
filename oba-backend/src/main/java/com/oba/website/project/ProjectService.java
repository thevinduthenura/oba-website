package com.oba.website.project;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAll() { 
        return projectRepository.findAll(); 
    }

    public List<Project> getByStatus(ProjectStatus status) { 
        return projectRepository.findByStatusOrderByStartDateDesc(status); 
    }
}
