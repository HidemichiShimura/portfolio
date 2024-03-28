export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-lg">{children}</div>;
}
