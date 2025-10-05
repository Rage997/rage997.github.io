export default function Footer() {
  return (
    <footer id="footer">
      <ul id="icons01" className="icons">
        <li>
          <a className="n01" href="https://github.com/Rage997" target="_blank" rel="noopener noreferrer">
            <svg>
              <use xlinkHref="#icon-907"></use>
            </svg>
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a className="n03" href="https://www.linkedin.com/in/niccol%C3%B2-zuppichini-16529a139/" target="_blank" rel="noopener noreferrer">
            <svg>
              <use xlinkHref="#icon-90b"></use>
            </svg>
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a className="n04" href="mailto:nick.zup@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg>
              <use xlinkHref="#icon-90a"></use>
            </svg>
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}