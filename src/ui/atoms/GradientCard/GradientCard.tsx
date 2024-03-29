export default function GradientCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full min-w-full rounded-lg bg-[linear-gradient(35deg,rgba(121,82,179,0.5)_0%,transparent_25%,transparent_75%,rgba(121,82,179,0.5)_100%)]">
      {children}
    </div>
  );
}
