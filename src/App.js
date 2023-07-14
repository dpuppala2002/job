import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProductedRoute from './components/ProductedRoute'
import JobItemDetails from './components/JobItemDetails'
import Jobs from './components/Jobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProductedRoute exact path="/" component={Home} />
    <ProductedRoute exact path="/jobs" component={Jobs} />
    <ProductedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not found" component={NotFound} />
    <Redirect to="not found" />
  </Switch>
)

export default App
