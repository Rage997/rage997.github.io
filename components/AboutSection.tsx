interface AboutSectionProps {
  isActive: boolean
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  return (
    <section id="about-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text05">About</h3>
      <p id="text06">
        <span className="p">
          I am <span className="bold">Niccolò</span>, a graduate Master Student in
          Computational Science at <a href="https://www.usi.ch/en" className="link-dark" target="_blank" rel="noopener noreferrer">
            Università della Svizzera Italiana</a> (USI). <br />
          I have strong expertise in Data Science, Software Engineer, and Computer Graphics. <br />
          I love problem-solving and I am interested in philosophy and in the history of mathematics.
          <br />
          <br />
          <em>
            Till your mud settles and the water is clear? Can you remain unmoving? Till the right
            action arises by itself?"
          </em><b>Lao Tzu</b>
        </span>
      </p>
    </section>
  )
}