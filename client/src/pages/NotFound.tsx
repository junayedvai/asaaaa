import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-light-golden via-off-white to-white px-4">
      <Card className="w-full max-w-lg mx-4 shadow-[0_22px_52px_rgba(26,26,26,0.14)] border-2 border-golden bg-white/90 backdrop-blur-sm rounded-2xl">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-light-golden rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-golden" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-black mb-2">404</h1>

          <h2 className="text-xl font-semibold text-gray mb-4">
            Page Not Found
          </h2>

          <p className="text-gray mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-gradient-to-r from-golden to-dark-golden hover:brightness-110 text-white px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
