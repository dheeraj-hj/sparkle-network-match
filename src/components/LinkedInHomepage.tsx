
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Bell, Users, Briefcase, Home, Link2 } from "lucide-react";

interface LinkedInHomepageProps {
  onLaunchLinker: () => void;
}

const LinkedInHomepage = ({ onLaunchLinker }: LinkedInHomepageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">in</div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 bg-gray-100 border-none"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <Home className="w-5 h-5" />
              <span className="text-xs mt-1">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <Users className="w-5 h-5" />
              <span className="text-xs mt-1">Network</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs mt-1">Jobs</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs mt-1">Messaging</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <Bell className="w-5 h-5" />
              <span className="text-xs mt-1">Notifications</span>
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-3">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">Software Engineer at TechCorp</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500">Profile views</p>
                  <p className="text-sm font-semibold text-blue-600">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Feed */}
        <div className="md:col-span-2 space-y-4">
          {/* Linker CTA Card */}
          <Card className="gradient-bg text-white border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Link2 className="w-6 h-6" />
                    Linker
                  </h2>
                  <p className="text-blue-100 mt-1">Discover your next professional connection</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-blue-50">
                Swipe through professionals who match your career goals. Find mentors, collaborators, or mentees in your field.
              </p>
              <Button 
                onClick={onLaunchLinker}
                variant="secondary"
                size="lg"
                className="w-full font-semibold"
              >
                🔗 Launch Linker
              </Button>
            </CardContent>
          </Card>

          {/* Sample Posts */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b1e38f02?w=40&h=40&fit=crop&crop=face" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Senior Data Scientist at Google</p>
                  <p className="mt-2 text-sm">
                    Just wrapped up an amazing mentoring session! There's nothing more rewarding than helping someone break into tech. 
                    If you're starting your data science journey, remember: every expert was once a beginner. 🚀
                  </p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 Like</button>
                    <button className="hover:text-blue-600">💬 Comment</button>
                    <button className="hover:text-blue-600">🔄 Repost</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">Ahmed Hassan</h4>
                  <p className="text-sm text-gray-600">DevOps Engineer at Amazon</p>
                  <p className="mt-2 text-sm">
                    Looking for collaborators on an open-source Kubernetes monitoring tool. 
                    If you're passionate about cloud infrastructure and want to contribute to the community, let's connect! 
                    #OpenSource #Kubernetes #DevOps
                  </p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 Like</button>
                    <button className="hover:text-blue-600">💬 Comment</button>
                    <button className="hover:text-blue-600">🔄 Repost</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-sm">People you may know</h3>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Elena Rodriguez</p>
                    <p className="text-xs text-gray-500">Product Manager</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face" />
                    <AvatarFallback>JK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jennifer Kim</p>
                    <p className="text-xs text-gray-500">UX Director</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinkedInHomepage;
