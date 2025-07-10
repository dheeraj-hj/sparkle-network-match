
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Search, Heart, X, RotateCcw, MapPin, Briefcase, Star, Info, MessageCircle } from "lucide-react";
import { mockProfiles, searchProfiles, Profile } from "@/data/mockProfiles";
import { OnboardingData } from "./Onboarding";

interface SwipeInterfaceProps {
  userProfile: OnboardingData;
  onBack: () => void;
  onMatch: (profile: Profile) => void;
}

const SwipeInterface = ({ userProfile, onBack, onMatch }: SwipeInterfaceProps) => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showWhyMatch, setShowWhyMatch] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);

  useEffect(() => {
    // Filter profiles based on user's role - show opposite role primarily
    let filteredProfiles = mockProfiles;
    
    if (userProfile.role === 'contributor') {
      // Contributors see mostly seekers
      filteredProfiles = mockProfiles.filter(p => p.userIntent === 'seeker' || p.userIntent === 'browsing');
    } else if (userProfile.role === 'seeker') {
      // Seekers see mostly contributors
      filteredProfiles = mockProfiles.filter(p => p.userIntent === 'contributor' || p.userIntent === 'browsing');
    }
    
    setProfiles(filteredProfiles);
  }, [userProfile]);

  const currentProfile = profiles[currentProfileIndex];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const searchResults = searchProfiles(query, mockProfiles);
      setProfiles(searchResults);
      setCurrentProfileIndex(0);
    } else {
      // Reset to original filtered profiles
      let filteredProfiles = mockProfiles;
      if (userProfile.role === 'contributor') {
        filteredProfiles = mockProfiles.filter(p => p.userIntent === 'seeker' || p.userIntent === 'browsing');
      } else if (userProfile.role === 'seeker') {
        filteredProfiles = mockProfiles.filter(p => p.userIntent === 'contributor' || p.userIntent === 'browsing');
      }
      setProfiles(filteredProfiles);
      setCurrentProfileIndex(0);
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (!currentProfile) return;

    setSwipeDirection(direction);
    
    setTimeout(() => {
      if (direction === 'right') {
        setLikedProfiles(prev => [...prev, currentProfile.id]);
        // Simulate match (50% chance for demo)
        if (Math.random() > 0.5) {
          onMatch(currentProfile);
          return;
        }
      }
      
      setCurrentProfileIndex(prev => prev + 1);
      setSwipeDirection(null);
    }, 300);
  };

  const handleRefresh = () => {
    setCurrentProfileIndex(0);
    setSearchQuery("");
    handleSearch("");
  };

  const generateWhyMatch = () => {
    if (!currentProfile) return "";
    
    const commonSkills = currentProfile.skills.filter(skill => 
      userProfile.topicsComfortable?.includes(skill) || 
      userProfile.industries?.some(industry => skill.toLowerCase().includes(industry.toLowerCase()))
    );

    const reasons = [];
    
    if (commonSkills.length > 0) {
      reasons.push(`You both have expertise in ${commonSkills.slice(0, 2).join(" & ")}`);
    }
    
    if (userProfile.role === 'seeker' && currentProfile.helpOffered) {
      const matchingHelp = currentProfile.helpOffered.filter(help => 
        userProfile.lookingFor?.includes(help)
      );
      if (matchingHelp.length > 0) {
        reasons.push(`They offer ${matchingHelp[0].toLowerCase()} which you're seeking`);
      }
    }
    
    if (userProfile.role === 'contributor' && currentProfile.lookingFor) {
      const matchingNeed = currentProfile.lookingFor.filter(need => 
        userProfile.helpOffered?.includes(need)
      );
      if (matchingNeed.length > 0) {
        reasons.push(`They're looking for ${matchingNeed[0].toLowerCase()} which you offer`);
      }
    }
    
    reasons.push(`You're both passionate about professional growth`);
    
    return reasons.slice(0, 3).join(". ") + ".";
  };

  if (!currentProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto pt-8">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-xl font-bold">Linker</h1>
            <div className="w-16" />
          </div>
          
          <Card className="text-center p-8">
            <CardContent>
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-xl font-bold mb-2">You've seen everyone!</h2>
              <p className="text-gray-600 mb-4">
                Check back later for new profiles or try adjusting your search.
              </p>
              <Button onClick={handleRefresh} className="gradient-bg text-white border-0">
                <RotateCcw className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-xl font-bold">Linker</h1>
          <div className="w-16" />
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Looking for a data science mentor..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 bg-white border-gray-200"
          />
        </div>

        {/* Profile Card */}
        <div className="relative mb-6">
          <Card className={`swipe-card ${swipeDirection === 'right' ? 'swipe-right' : swipeDirection === 'left' ? 'swipe-left' : ''} shadow-lg border-0 overflow-hidden`}>
            <div className="relative h-96 bg-gradient-to-b from-transparent to-black/50">
              <img 
                src={currentProfile.photo} 
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">{currentProfile.name}</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowWhyMatch(true)}
                    className="text-white hover:bg-white/20"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-lg opacity-90">{currentProfile.title}</p>
                <p className="text-sm opacity-75">{currentProfile.company}</p>
                <div className="flex items-center gap-4 mt-2 text-sm opacity-75">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {currentProfile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {currentProfile.experience}y exp
                  </span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Sparkle Summary</span>
              </div>
              <p className="text-gray-700">{currentProfile.sparkeSummary}</p>
              
              <div>
                <h4 className="font-medium mb-2">Skills & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {currentProfile.userIntent === 'contributor' && currentProfile.helpOffered && (
                <div>
                  <h4 className="font-medium mb-2 text-green-600">Offers</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.helpOffered.map((help) => (
                      <Badge key={help} variant="outline" className="text-xs border-green-200 text-green-700">
                        {help}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {currentProfile.userIntent === 'seeker' && currentProfile.lookingFor && (
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">Looking For</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.lookingFor.map((looking) => (
                      <Badge key={looking} variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {looking}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-red-300 hover:bg-red-50"
          >
            <X className="w-6 h-6 text-gray-600 hover:text-red-600" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleRefresh}
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50"
          >
            <RotateCcw className="w-4 h-4 text-gray-600 hover:text-blue-600" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleSwipe('right')}
            className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-green-300 hover:bg-green-50"
          >
            <Heart className="w-6 h-6 text-gray-600 hover:text-green-600" />
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500">
          {currentProfileIndex + 1} of {profiles.length} • Swipe or use buttons
        </p>

        {/* Why Match Dialog */}
        <Dialog open={showWhyMatch} onOpenChange={setShowWhyMatch}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Why this match?</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-700">{generateWhyMatch()}</p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Shared Context</h4>
                <p className="text-sm text-blue-700">
                  Based on your {userProfile.role} profile and their interests, you have strong alignment for a meaningful professional connection.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SwipeInterface;
