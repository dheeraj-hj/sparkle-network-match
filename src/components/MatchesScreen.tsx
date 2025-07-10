
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Sparkles, Heart } from "lucide-react";
import { Profile } from "@/data/mockProfiles";

interface MatchesScreenProps {
  matches: Profile[];
  onBack: () => void;
  onMessage: (profile: Profile) => void;
}

const MatchesScreen = ({ matches, onBack, onMessage }: MatchesScreenProps) => {
  const generateConversationStarter = (profile: Profile) => {
    const starters = [
      `You're both passionate about ${profile.skills[0]} — what initially drew you to this field?`,
      `I noticed you work in ${profile.industry} — I'd love to hear about your journey there!`,
      `Your experience with ${profile.skills[1]} caught my eye. What's the most exciting project you've worked on recently?`,
      `I see we both value professional growth. What's one piece of advice that changed your career trajectory?`,
      `Your background in ${profile.company} is impressive! What's it like working there?`,
      `I noticed we share an interest in ${profile.skills[2]}. What resources helped you master it?`,
      `Your role as ${profile.title} sounds fascinating. What's the most rewarding part of your work?`
    ];
    
    return starters[Math.floor(Math.random() * starters.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-xl font-bold">Your Matches</h1>
          <div className="w-16" />
        </div>

        {matches.length === 0 ? (
          <Card className="text-center p-8">
            <CardContent>
              <div className="text-6xl mb-4">💫</div>
              <h2 className="text-xl font-bold mb-2">No matches yet!</h2>
              <p className="text-gray-600 mb-4">
                Keep swiping to find your perfect professional connections.
              </p>
              <Button onClick={onBack} className="gradient-bg text-white border-0">
                Continue Swiping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-lg font-semibold">{matches.length} Professional Matches</span>
              </div>
              <p className="text-sm text-gray-600">
                Start meaningful conversations with your connections
              </p>
            </div>

            {matches.map((profile) => (
              <Card key={profile.id} className="shadow-lg border-0 overflow-hidden animate-fade-in">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Profile Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={profile.photo} 
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Profile Info */}
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{profile.name}</h3>
                          <p className="text-sm text-gray-600">{profile.title}</p>
                          <p className="text-xs text-gray-500">{profile.company}</p>
                          
                          {/* Shared Skills */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {profile.skills.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          onClick={() => onMessage(profile)}
                          size="sm"
                          className="gradient-bg text-white border-0 ml-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Conversation Starter */}
                  <div className="px-4 pb-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-medium text-purple-800">AI Conversation Starter</span>
                      </div>
                      <p className="text-sm text-gray-700 italic">
                        "{generateConversationStarter(profile)}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Button 
                onClick={onBack}
                variant="outline"
                className="w-full"
              >
                Continue Swiping for More Matches
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesScreen;
