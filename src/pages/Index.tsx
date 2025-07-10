
import { useState } from "react";
import LinkedInHomepage from "@/components/LinkedInHomepage";
import Onboarding, { OnboardingData } from "@/components/Onboarding";
import SwipeInterface from "@/components/SwipeInterface";
import MatchScreen from "@/components/MatchScreen";
import MatchesScreen from "@/components/MatchesScreen";
import { Profile } from "@/data/mockProfiles";
import { useToast } from "@/hooks/use-toast";

type AppState = 'linkedin' | 'onboarding' | 'swiping' | 'match' | 'matches';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('linkedin');
  const [userProfile, setUserProfile] = useState<OnboardingData | null>(null);
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
  const [allMatches, setAllMatches] = useState<Profile[]>([]);
  const { toast } = useToast();

  const handleLaunchLinker = () => {
    console.log("Launching Linker app");
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log("Onboarding completed:", data);
    setUserProfile(data);
    setAppState('swiping');
    toast({
      title: "Welcome to Linker! 🔗",
      description: "Start swiping to find your perfect professional match",
    });
  };

  const handleMatch = (profile: Profile) => {
    console.log("Match found:", profile);
    setMatchedProfile(profile);
    setAllMatches(prev => [...prev, profile]);
    setAppState('match');
    toast({
      title: "It's a Match! 🎉",
      description: `You and ${profile.name} both swiped right!`,
    });
  };

  const handleBackToLinkedIn = () => {
    setAppState('linkedin');
    setUserProfile(null);
    setMatchedProfile(null);
  };

  const handleContinueSwiping = () => {
    setAppState('swiping');
    setMatchedProfile(null);
  };

  const handleViewMatches = () => {
    setAppState('matches');
  };

  const handleBackToSwiping = () => {
    setAppState('swiping');
  };

  const handleMessage = (profile?: Profile) => {
    toast({
      title: "Message Feature",
      description: `Starting conversation${profile ? ` with ${profile.name}` : ''}...`,
    });
  };

  return (
    <div className="min-h-screen">
      {appState === 'linkedin' && (
        <LinkedInHomepage onLaunchLinker={handleLaunchLinker} />
      )}
      
      {appState === 'onboarding' && (
        <Onboarding 
          onComplete={handleOnboardingComplete}
          onBack={handleBackToLinkedIn}
        />
      )}
      
      {appState === 'swiping' && userProfile && (
        <SwipeInterface 
          userProfile={userProfile}
          onBack={handleBackToLinkedIn}
          onMatch={handleMatch}
          onViewMatches={handleViewMatches}
          matchCount={allMatches.length}
        />
      )}

      {appState === 'matches' && (
        <MatchesScreen
          matches={allMatches}
          onBack={handleBackToSwiping}
          onMessage={handleMessage}
        />
      )}
      
      {appState === 'match' && matchedProfile && (
        <MatchScreen 
          profile={matchedProfile}
          onContinue={handleContinueSwiping}
          onMessage={() => handleMessage(matchedProfile)}
        />
      )}
    </div>
  );
};

export default Index;
