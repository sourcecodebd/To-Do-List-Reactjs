import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Tasks from './components/Tasks/Tasks';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import InCompletedTasks from './components/InCompletedTasks/InCompletedTasks';
import TotalTasks from './components/TotalTasks/TotalTasks';
import CompletedDetails from './components/CompletedDetails/CompletedDetails';
import InCompletedDetails from './components/InCompletedDetails/InCompletedDetails';
import TotalDetails from './components/TotalDetails/TotalDetails';
import { useState } from 'react';
import { LinearProgress, Stack } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {
              !loading ?
                <Home />
                :
                <div style={{ backgroundColor: 'black' }}>
                  {
                    setTimeout(() => {
                      setLoading(false)
                    }, 2000)
                  }
                  <Stack sx={{ width: '100%', color: 'grey.500' }}>
                    <LinearProgress color="secondary" />
                  </Stack>
                </div>
            }
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/total-tasks">
            <TotalTasks />
          </Route>
          <Route path="/completed-tasks">
            <CompletedTasks />
          </Route>
          <Route path="/incompleted-tasks">
            <InCompletedTasks />
          </Route>
          <Route exact path="/total-details/:totalId">
            <TotalDetails />
          </Route>
          <Route path="/completed-details/:completedId">
            <CompletedDetails />
          </Route>
          <Route path="/incompleted-details/:incompletedId">
            <InCompletedDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
