"use client";

import { Button } from '@/components/ui/button';
import { AlertOctagon, RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6">
              <AlertOctagon className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Application Error</h2>
            <p className="text-muted-foreground mb-8">
              A critical error has occurred. Please try refreshing the page.
            </p>
            <Button 
              onClick={reset}
              className="inline-flex items-center"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Refresh page
            </Button>
            {process.env.NODE_ENV === 'development' && error.message && (
              <div className="mt-8 p-4 bg-muted rounded-lg text-left">
                <p className="text-sm font-mono text-muted-foreground break-all">
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}