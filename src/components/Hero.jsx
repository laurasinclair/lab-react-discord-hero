import './Hero.sass'
import Button from './Button'

export default function Hero (props) {
	return (
		<div className="hero container row">
			<div className="col">
				<div className="container">
					<h1>{props.title}</h1>

					<p className="">{props.text}</p>

					<Button link="#" variant="light" display="block" text="Download for Mac" />

					<Button link="#" variant="dark" display="block" text="Open Discord in your browser" />
				</div>
			</div>
		</div>
	)
}
