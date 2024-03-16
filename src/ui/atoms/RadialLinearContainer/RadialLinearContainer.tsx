export default function RadialLinearContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="animate-radial-gradient bg-radial-gradient flex items-center justify-center bg-[radial-gradient(circle,#7952B3,transparent,transparent)] bg-[length:100px_100px] bg-no-repeat md:bg-[length:350px_350px]">
      {children}
    </section>
  );
}
