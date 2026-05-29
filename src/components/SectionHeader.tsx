export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-end mb-stack-lg gap-4">
      <div>
        <h3 className="text-ink font-display-md text-display-md">{title}</h3>
        {subtitle && <p className="text-on-surface-variant font-body-md mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
