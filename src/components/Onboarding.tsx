
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Users, Search, Coffee, ChevronRight } from "lucide-react";

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
  onBack: () => void;
}

export interface OnboardingData {
  role: 'contributor' | 'seeker' | 'browsing';
  helpOffered?: string[];
  topicsComfortable?: string[];
  lookingFor?: string[];
  industries?: string[];
}

const Onboarding = ({ onComplete, onBack }: OnboardingProps) => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [helpOffered, setHelpOffered] = useState<string[]>([]);
  const [topicsComfortable, setTopicsComfortable] = useState<string[]>([]);
  const [lookingFor, setLookingFor] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (step === 1 && selectedRole) {
      if (selectedRole === "browsing") {
        // Skip step 2 for browsers
        onComplete({ role: selectedRole as 'browsing' });
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      const data: OnboardingData = {
        role: selectedRole as 'contributor' | 'seeker' | 'browsing',
        ...(selectedRole === 'contributor' && { helpOffered, topicsComfortable }),
        ...(selectedRole === 'seeker' && { lookingFor, industries })
      };
      onComplete(data);
    }
  };

  const handleCheckboxChange = (value: string, checked: boolean, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  const canProceed = step === 1 ? selectedRole : 
    (selectedRole === 'contributor' ? helpOffered.length > 0 : lookingFor.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="text-sm text-gray-600">
            Step {step} of {selectedRole === "browsing" ? 1 : 2}
          </div>
        </div>

        {step === 1 && (
          <Card className="card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Welcome to Linker! 🔗
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Let's personalize your networking experience. What describes you best?
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={selectedRole} onValueChange={handleRoleSelect}>
                <div className="space-y-4">
                  <div className={`border-2 rounded-lg p-4 transition-all ${selectedRole === 'contributor' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="contributor" id="contributor" />
                      <Label htmlFor="contributor" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">🔹 Contributor</h3>
                            <p className="text-gray-600 text-sm">
                              I want to mentor, give referrals, collaborate, or guide others
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className={`border-2 rounded-lg p-4 transition-all ${selectedRole === 'seeker' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="seeker" id="seeker" />
                      <Label htmlFor="seeker" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Search className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">🔹 Seeker</h3>
                            <p className="text-gray-600 text-sm">
                              I'm looking for mentorship, job help, guidance, or collaborators
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className={`border-2 rounded-lg p-4 transition-all ${selectedRole === 'browsing' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="browsing" id="browsing" />
                      <Label htmlFor="browsing" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <Coffee className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">Just Browsing</h3>
                            <p className="text-gray-600 text-sm">
                              I want to explore and see what's available
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
              </RadioGroup>

              <Button 
                onClick={handleNext} 
                disabled={!selectedRole}
                className="w-full mt-6 gradient-bg text-white border-0"
                size="lg"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && selectedRole === 'contributor' && (
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Great! Tell us how you'd like to help 🤝
              </CardTitle>
              <p className="text-gray-600">
                Select the types of help you're willing to offer to others
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">What kind of help are you willing to offer?</h3>
                <div className="space-y-2">
                  {['Mentorship', 'Referrals', 'Career Guidance', 'Technical Reviews', 'Interview Practice', 'Portfolio Reviews'].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={helpOffered.includes(option)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(option, checked as boolean, setHelpOffered)
                        }
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">What topics are you most comfortable guiding in?</h3>
                <div className="space-y-2">
                  {['Software Engineering', 'Data Science', 'Product Management', 'Design', 'DevOps', 'Cybersecurity', 'Marketing', 'Sales'].map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <Checkbox
                        id={topic}
                        checked={topicsComfortable.includes(topic)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(topic, checked as boolean, setTopicsComfortable)
                        }
                      />
                      <Label htmlFor={topic}>{topic}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleNext} 
                disabled={!canProceed}
                className="w-full gradient-bg text-white border-0"
                size="lg"
              >
                Complete Setup
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && selectedRole === 'seeker' && (
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Perfect! What are you looking for? 🎯
              </CardTitle>
              <p className="text-gray-600">
                Help us match you with the right people
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">What are you currently looking for?</h3>
                <div className="space-y-2">
                  {['Mentorship', 'Job Referrals', 'Career Transition Help', 'Collaboration', 'Networking', 'Skill Development', 'Interview Preparation'].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={lookingFor.includes(option)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(option, checked as boolean, setLookingFor)
                        }
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">What industries/fields are you interested in?</h3>
                <div className="space-y-2">
                  {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Design', 'Consulting', 'Startups'].map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <Checkbox
                        id={industry}
                        checked={industries.includes(industry)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(industry, checked as boolean, setIndustries)
                        }
                      />
                      <Label htmlFor={industry}>{industry}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleNext} 
                disabled={!canProceed}
                className="w-full gradient-bg text-white border-0"
                size="lg"
              >
                Complete Setup
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
