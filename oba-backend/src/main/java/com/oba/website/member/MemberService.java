package com.oba.website.member;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> getAll() {
        return memberRepository.findAll();
    }

    public List<Member> getByRole(MemberRole role) {
        return memberRepository.findByRoleOrderByCreatedAtAsc(role);
    }
}
