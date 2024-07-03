import Card from "@/components/Card/Card";

export default function Quote() {
  return (
    <Card type="tertiary" hasBlockquote delay={0.6}>
      <blockquote>
        Music is the heartbeat of storytelling; it transcends words and connects
        us to the soul of the narrative.
      </blockquote>
    </Card>
  );
}
