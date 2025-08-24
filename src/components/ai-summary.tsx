"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateProductSummary } from "@/ai/flows/generate-product-summary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface AiSummaryProps {
  productDetails: string;
}

export function AiSummary({ productDetails }: AiSummaryProps) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError("");
    setSummary("");
    try {
      const result = await generateProductSummary({ productDetails });
      setSummary(result.summary);
    } catch (e) {
      setError("Failed to generate summary. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        onClick={handleGenerateSummary}
        disabled={isLoading}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? "Generating..." : "Generate AI Summary"}
      </Button>
      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
      {summary && (
        <Card className="mt-4 bg-secondary/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wand2 className="h-5 w-5 text-primary" />
              AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{summary}</p>
          </CardContent>
        </Card>
      )}
      {isLoading && !summary && (
         <Card className="mt-4 bg-secondary/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
               <Wand2 className="h-5 w-5 text-primary" />
               AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
