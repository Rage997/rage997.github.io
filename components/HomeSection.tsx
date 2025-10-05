import Image from 'next/image'

interface HomeSectionProps {
  isActive: boolean
}

export default function HomeSection({ isActive }: HomeSectionProps) {
  return (
    <section id="home-section" className={isActive ? 'active' : 'inactive'}>
      <div id="image01" className="image">
        <span className="frame">
          <Image
            src="/images/avatar.jpeg"
            alt="Niccolò Zuppichini"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </span>
      </div>
      <h1 id="text02">
        <strong>Niccolò Zuppichini</strong>
      </h1>
      <p id="text04">
        <span>Computer Scientist</span>
      </p>
      <p id="text28">
        <span>MSc Computational Science & BSc Informatics</span>
      </p>
    </section>
  )
}