import { useState } from 'react'
import './App.sass'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
	return (
		<>
			<NavBar />

			<Hero 
        title="Imagine a place..."
        text="...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."
      />
		</>
	)
}

export default App
