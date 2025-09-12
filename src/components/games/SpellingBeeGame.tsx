"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SpellingBeeGameProps {
  onComplete: (score: number) => void;
  onBack: () => void;
}

export default function SpellingBeeGame({ onComplete, onBack }: SpellingBeeGameProps) {
  const [score] = useState(92);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Button onClick={onBack} variant="outline" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <Card className="shadow-xl">
          <CardHeader className="bg-yellow-500 text-white text-center">
            <CardTitle className="text-2xl">🐝 Spelling Bee Challenge</CardTitle>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <h2 className="text-xl mb-4">Progressive spelling challenges</h2>
            <p className="text-gray-600 mb-8">Test your spelling skills with increasing difficulty!</p>
            <Button 
              onClick={() => onComplete(score)}
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Complete Demo ({score}%)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}