import logo from "./logo.svg"
import "./App.css"
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/users'>Users</Link>
            </li> */}
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          {/* <Route path='/users'>
            <Users />
          </Route> */}
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function Topics() {
  let match = useRouteMatch()
  return (
    <Router>
      <div>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to={`${match.url}/props-v-state`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}

export default App
