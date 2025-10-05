export default function Header() {
  return (
    <header id="header">
      <ul id="icons02" className="icons">
        <li>
          <a className="n01" href="#home">
            <svg>
              <use xlinkHref="#icon-902"></use>
            </svg>
            <span className="label">Home</span>
          </a>
        </li>
      </ul>
      <ul id="buttons02" className="buttons">
        <li><a href="#about" className="button n01">About</a></li>
        <li><a href="#projects" className="button n03">Projects</a></li>
        <li><a href="#thesis" className="button n04">Thesis</a></li>
        <li><a href="#blog" className="button n05">Blog</a></li>
      </ul>
      <hr id="divider01" />
    </header>
  )
}