import React, { Suspense, lazy, Fragment } from 'react';
import Loader from 'react-loader'

const Main = lazy(() => import('../src/Layout/Base'));

function App() {
  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
            </div>
          </div>
        }>
          {/*<Route path="/main" component={Main} />*/}
          {/*<Router>*/}
          {/*  <Route path='/' component={Main} />*/}
          {/*</Router>*/}
          <Main />
        </Suspense>

        {/*<Route exact path="/" render={() => (*/}
        {/*  <Link to="/main/recipes" />*/}
        {/*)} />*/}

      </div>
    </Fragment>
  );
}

export default App;