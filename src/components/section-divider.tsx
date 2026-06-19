export function SectionDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
