package com.chunyinng078.ChallengeApp;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class ChallengeService {

    private List<Challenge> challenges = new ArrayList<>();

    private Long nextId =0L;

    public ChallengeService() {

    }

    public List<Challenge> getAllChallenges() {
        return challenges;
    }

    public Challenge getChallenges(String month) {
        for (Challenge challenge:challenges){
            if(challenge.getMonth().equals(month)){
                return challenge;
            }
        }
        return null;
    }

    public boolean addChallenge(Challenge challenge) {
        if (challenge != null){
            challenge.setId(nextId++);
            challenges.add(challenge);
            return true;
        }
        return false;
        
    }
}
