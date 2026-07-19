package com.oba.website.member;

import com.oba.website.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Member>>> getMembers(
            @RequestParam(required = false) MemberRole role) {
        List<Member> members = role != null
                ? memberService.getByRole(role)
                : memberService.getAll();
        return ResponseEntity.ok(ApiResponse.ok(members));
    }
}
