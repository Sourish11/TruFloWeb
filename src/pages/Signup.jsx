import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardHeader } from "../components/ui/Card";

export default function Signup() {
  const { signup, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    
    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters long.");
      return;
    }
    
    setIsLoading(true);
    try {
      await signup(email, password);
      if (!error) {
        navigate('/app');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen hero-bg flex items-center justify-center p-4 relative">
      <div className="container-narrow relative z-10">
        <Card glass className="w-full max-w-lg mx-auto">
          <CardHeader className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Start your journey
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Create your TruFlo account and unlock your potential
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                label="Email address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <Input
                type="password"
                label="Password"
                placeholder="Create a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText="Must be at least 6 characters"
                required
              />
              
              <Input
                type="password"
                label="Confirm password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              
              {(localError || error) && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-800 rounded-xl">
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    {localError || error}
                  </p>
                </div>
              )}
              
              <Button
                type="submit"
                loading={isLoading}
                className="w-full"
                size="lg"
              >
                Create Account
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}