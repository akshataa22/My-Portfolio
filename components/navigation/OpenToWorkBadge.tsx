export function OpenToWorkBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sage/15 px-3 py-1 text-xs font-medium text-ink">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-sage" />
      </span>
      Open to work
    </span>
  );
}
