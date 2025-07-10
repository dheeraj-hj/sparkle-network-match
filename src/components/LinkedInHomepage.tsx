
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Bell, Users, Briefcase, Home, Plus, ThumbsUp, MessageSquare, Repeat2, Send, MoreHorizontal, Link2 } from "lucide-react";

interface LinkedInHomepageProps {
  onLaunchLinker: () => void;
}

const LinkedInHomepage = ({ onLaunchLinker }: LinkedInHomepageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-2 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            <div className="relative flex-1 max-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10 bg-gray-100 border-none text-sm h-9"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="p-2">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pb-16">
        {/* Profile Header */}
        <div className="bg-white mb-2">
          <div className="relative">
            <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="px-4 pb-4">
              <div className="flex items-end -mt-8">
                <Avatar className="w-16 h-16 border-4 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <h2 className="font-semibold text-lg">John Doe</h2>
                  <p className="text-sm text-gray-600">Software Engineer at TechCorp</p>
                  <p className="text-xs text-gray-500">500+ connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post */}
        <Card className="mb-2">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Button variant="outline" className="w-full justify-start text-gray-500 font-normal">
                  Start a post
                </Button>
              </div>
            </div>
            <div className="flex justify-between mt-3 pt-3 border-t">
              <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                <Plus className="w-4 h-4 mr-1" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                <MessageSquare className="w-4 h-4 mr-1" />
                Video
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                <Briefcase className="w-4 h-4 mr-1" />
                Job
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feed Posts */}
        <Card className="mb-2">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b1e38f02?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">Sarah Chen</h4>
                    <p className="text-xs text-gray-600">Senior Data Scientist at Google • 1st</p>
                    <p className="text-xs text-gray-500">2h • 🌍</p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <p className="mt-2 text-sm">
                  Just wrapped up an amazing mentoring session! There's nothing more rewarding than helping someone break into tech. 
                  If you're starting your data science journey, remember: every expert was once a beginner. 🚀
                  <br /><br />
                  #DataScience #Mentoring #TechCareers
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <ThumbsUp className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">42</span>
                  </div>
                  <span className="text-xs text-gray-500">8 comments</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    Repost
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <Send className="w-4 h-4 mr-1" />
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-2">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">Ahmed Hassan</h4>
                    <p className="text-xs text-gray-600">DevOps Engineer at Amazon • 2nd</p>
                    <p className="text-xs text-gray-500">5h • 🌍</p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <p className="mt-2 text-sm">
                  Looking for collaborators on an open-source Kubernetes monitoring tool. 
                  If you're passionate about cloud infrastructure and want to contribute to the community, let's connect! 
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="secondary" className="text-xs">#OpenSource</Badge>
                  <Badge variant="secondary" className="text-xs">#Kubernetes</Badge>
                  <Badge variant="secondary" className="text-xs">#DevOps</Badge>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <ThumbsUp className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">28</span>
                  </div>
                  <span className="text-xs text-gray-500">12 comments</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <Repeat2 className="w-4 h-4 mr-1" />
                    Repost
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center text-gray-600 flex-1">
                    <Send className="w-4 h-4 mr-1" />
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2 text-blue-600">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">My Network</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Plus className="w-5 h-5" />
            <span className="text-xs mt-1">Post</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Bell className="w-5 h-5" />
            <span className="text-xs mt-1">Notifications</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Briefcase className="w-5 h-5" />
            <span className="text-xs mt-1">Jobs</span>
          </Button>
        </div>
      </div>

      {/* Floating Linker Button - Like Meta AI in WhatsApp */}
      <Button
        onClick={onLaunchLinker}
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full gradient-bg text-white border-0 shadow-lg z-50 hover:scale-105 transition-transform"
      >
        <Link2 className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default LinkedInHomepage;
