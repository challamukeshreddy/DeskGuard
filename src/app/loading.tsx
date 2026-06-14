export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/8 p-6 backdrop-blur">
        <div className="mb-5 h-6 w-40 animate-pulse rounded bg-white/15" />
        <div className="space-y-3">
          <div className="h-4 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
