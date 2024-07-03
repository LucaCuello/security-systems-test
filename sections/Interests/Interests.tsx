import Card from "@/components/Card/Card";

export default function Interests() {
  return (
    <Card type="secondary" delay={0.2}>
      <h2>Interests</h2>
      <p>
        As a composer, my work is deeply influenced by a variety of interests
        that continually inspire and shape my creative process. Here are some of
        the areas I am most passionate about:
      </p>
      <ul>
        <li>
          <strong>Film Scoring: </strong>
          Crafting musical narratives that enhance the emotional and
          storytelling elements of films.
        </li>
        <li>
          <strong>Classical Music: </strong>
          Composing and conducting symphonies, concertos, and other classical
          forms.
        </li>
        <li>
          <strong>Jazz: </strong>A lifelong love for jazz, both as a performer
          and an enthusiast, has significantly influenced my compositional
          style.
        </li>
        <li>
          <strong>Musical Innovation: </strong>
          Continuously experimenting with new techniques and technologies in
          music composition and production.
        </li>
      </ul>
    </Card>
  );
}
