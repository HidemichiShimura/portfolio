import { Grid } from "@/ui";

export default function Template({
  hero,
  content,
  footer,
}: {
  hero: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center">{hero}</div>
      <Grid>
        <div className="px-4 pb-44 md:px-20">{content}</div>
      </Grid>
      {footer}
    </>
  );
}
