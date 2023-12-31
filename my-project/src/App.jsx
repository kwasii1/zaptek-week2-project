import './App.css'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
	
	return (
		<>
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</Router>
		
		</>
		)
	}
	
	export default App
	