package com.oba.website.project;

import com.oba.website.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Project>>> getProjects(
            @RequestParam(required = false) ProjectStatus status) {
        List<Project> projects = status != null ? projectService.getByStatus(status) : projectService.getAll();
        return ResponseEntity.ok(ApiResponse.ok(projects));
    }
}
