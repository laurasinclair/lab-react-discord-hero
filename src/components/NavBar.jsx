import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'
import './NavBar.sass'

export default function NavBar(props) {
	return (
		<nav className="navbar">
			<div className="navbar_nav container">
				<div className="logo">
					<a href="#">
						<img src={discordLogo} width="200" alt={props.title} />
					</a>
				</div>

				<div className="menu-icon">
					<a href="#">
						<img src={menuIcon} alt="⌯" />
					</a>
				</div>
			</div>
		</nav>
	)
}
