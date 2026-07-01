package com.chunyinng078.ChallengeApp;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class ChallengeService {

    ChallengeRepository challengeRepository;

    public ChallengeService(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }

    public Challenge getChallenge(String month) {
        Optional<Challenge> challenge = challengeRepository.findByMonthIgnoreCase(month);
        return challenge.orElse(null);
    }

    public boolean addChallenge(Challenge challenge) {
        if (challenge != null) {
            challengeRepository.save(challenge);
            return true;
        }
        return false;
    }

    public boolean updateChallenge(Long id, Challenge updatedChallenge) {
        Optional<Challenge> challenge = challengeRepository.findById(id);
        if (challenge.isPresent()) {
            Challenge newChallenge = challenge.get();
            newChallenge.setMonth(updatedChallenge.getMonth());
            newChallenge.setDescription(updatedChallenge.getDescription());
            challengeRepository.save(newChallenge);
            return true;
        }

        return false;
    }

    public boolean deleteChallenge(Long id) {
        Optional<Challenge> challenge = challengeRepository.findById(id);
        if (challenge.isPresent()) {
            challengeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
