'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head></head>
      <body>
        <h2>Something went wrong!</h2>
        <h3>{error.message}</h3>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
