interface ThesisSectionProps {
  isActive: boolean
}

export default function ThesisSection({ isActive }: ThesisSectionProps) {
  return (
    <section id="thesis-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text21">Thesis</h3>
      <p id="text11">
        <span className="p">
          <a href="https://github.com/Rage997/MasterThesis/blob/main/latex/thesis.pdf" target="_blank" rel="noopener noreferrer">
            <strong>Master Thesis</strong>
          </a>:<br /> <em>Alien species modelling via relational event models</em>
        </span>
      </p>
      <p id="text07">
        <span className="p">
          <a href="https://github.com/Rage997/BachelorProject/blob/main/bachelorproject.pdf" target="_blank" rel="noopener noreferrer">
            <strong>Bachelor Project</strong>
          </a>:<br /> <em>A robust pipeline to process 3D objects</em>
        </span>
      </p>
    </section>
  )
}