export default function Loading() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <span className="font-display-md text-5xl font-extrabold v-gradient-text animate-pulse">
          V
        </span>
        <div className="absolute inset-0 blur-2xl bg-accent/20 -z-10" />
      </div>
      <div className="h-1 w-32 rounded-full fill-subtle overflow-hidden">
        <div className="h-full w-1/2 bg-accent rounded-full animate-[loading_1.2s_ease-in-out_infinite]" />
      </div>
      <style>{`@keyframes loading{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}`}</style>
    </div>
  );
}
