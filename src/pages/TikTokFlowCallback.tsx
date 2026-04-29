import { useEffect, useState } from "react";

const TikTokFlowCallback = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAuthCode(params.get("auth_code") || params.get("code"));
    setState(params.get("state"));
    setError(params.get("error") || params.get("error_description"));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {error ? (
            <>
              <div className="mb-4 text-red-500 text-3xl">⚠️</div>
              <h1 className="text-2xl font-bold mb-3">Authorization Failed</h1>
              <p className="text-muted-foreground mb-4">
                TikTok returned an error during authorization:
              </p>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">{error}</pre>
              <p className="mt-4 text-sm">
                Please return to TikTokFlow CLI and try <code>tiktokflow auth login</code> again.
              </p>
            </>
          ) : authCode ? (
            <>
              <div className="mb-4 text-green-500 text-3xl">✓</div>
              <h1 className="text-2xl font-bold mb-3">Authorization Successful</h1>
              <p className="text-muted-foreground mb-4">
                TikTokFlow has been authorized to access your TikTok Ads account.
              </p>
              <div className="bg-muted p-4 rounded mb-4">
                <p className="text-sm font-semibold mb-2">Authorization code received:</p>
                <code className="text-xs break-all">{authCode.substring(0, 20)}...</code>
              </div>
              <p className="text-sm text-muted-foreground">
                You can now close this window and return to your TikTokFlow CLI.
                The token exchange will complete automatically.
              </p>
            </>
          ) : (
            <>
              <div className="mb-4 text-blue-500 text-3xl">⏳</div>
              <h1 className="text-2xl font-bold mb-3">Processing...</h1>
              <p className="text-muted-foreground">
                Waiting for TikTok authorization response.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                If this page doesn't update, please return to TikTokFlow CLI and check the logs.
              </p>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          TikTokFlow OAuth Callback Endpoint<br />
          Operated by an independent developer. Not affiliated with TikTok or ByteDance Ltd.
        </p>
      </div>
    </div>
  );
};

export default TikTokFlowCallback;
