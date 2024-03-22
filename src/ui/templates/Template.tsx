import { Grid } from "@/ui";

export default function Template({
  hero,
  content,
}: {
  hero: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center">{hero}</div>
      <Grid>
        <div className="px-4 md:px-20">{content}</div>
      </Grid>
    </>
  );
}
