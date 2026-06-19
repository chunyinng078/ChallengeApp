package com.chunyinng078.ChallengeApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChallengeController {
    private List<Challenge> challenges = new ArrayList<>();

    public ChallengeController() {
        challenges.add(new Challenge(1L, "Jan", "Learn Spring Boot"));
    }


    @GetMapping("/challenges")
    public List<Challenge> getAllChallenges() {
        return challenges;
    }
}
