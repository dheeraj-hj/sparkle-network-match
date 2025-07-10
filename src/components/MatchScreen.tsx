
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { Profile } from "@/data/mockProfiles";

interface MatchScreenProps {
  profile: Profile;
  onContinue: () => void;
  onMessage: () => void;
}

const MatchScreen = ({ profile, onContinue, onMessage }: MatchScreenProps) => {
  const generateConversationStarter = () => {
    const starters = [
      `You're both passionate about ${profile.skills[0]} — what initially drew you to this field?`,
      `I noticed you work in ${profile.industry} — I'd love to hear about your journey there!`,
      `Your experience with ${profile.skills[1]} caught my eye. What's the most exciting project you've worked on recently?`,
      `I see we both value professional growth. What's one piece of advice that changed your career trajectory?`,
      `Your background in ${profile.company} is impressive! What's it like working there?`
    ];
    
    return starters[Math.floor(Math.random() * starters.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        {/* Match Animation */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full animate-pulse"></div>
            <div className="relative bg-white rounded-full p-6 m-2">
              <Heart className="w-16 h-16 text-pink-500 animate-[pulse_1s_ease-in-out_infinite]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-4">
            It's a Match! 🎉
          </h1>
          <p className="text-gray-600 mt-2">
            You both swiped right - time to connect!
          </p>
        </div>

        {/* Match Details */}
        <Card className="shadow-2xl border-0 mb-6 animate-fade-in">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage src={profile.photo} alt={profile.name} />
                <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{profile.name}</CardTitle>
            <p className="text-gray-600">{profile.title} at {profile.company}</p>
            <p className="text-sm text-gray-500">{profile.location}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-800">AI Conversation Starter</span>
              </div>
              <p className="text-gray-700 italic">
                "{generateConversationStarter()}"
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Shared Interests</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {profile.userIntent === 'contributor' && profile.helpOffered && (
              <div>
                <h4 className="font-medium mb-2 text-green-600">They Can Help With</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.helpOffered.slice(0, 2).map((help) => (
                    <Badge key={help} variant="outline" className="border-green-200 text-green-700">
                      {help}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {profile.userIntent === 'seeker' && profile.lookingFor && (
              <div>
                <h4 className="font-medium mb-2 text-blue-600">They're Looking For</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.lookingFor.slice(0, 2).map((looking) => (
                    <Badge key={looking} variant="outline" className="border-blue-200 text-blue-700">
                      {looking}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onMessage}
            className="w-full gradient-bg text-white border-0 h-12 text-lg"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Send Message
          </Button>
          
          <Button 
            onClick={onContinue}
            variant="outline"
            className="w-full h-12"
            size="lg"
          >
            Keep Swiping
          </Button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Great connections start with great conversations 💫
        </p>
      </div>
    </div>
  );
};

export default MatchScreen;
