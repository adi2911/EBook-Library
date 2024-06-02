import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import LoginWidget from './Auth/LoginWidget';
import { BookCheckoutPage } from './Components/BookCheckout/BookCheckoutPage';
import { ReviewListPage } from './Components/BookCheckout/Components/ReviewListPage/ReviewListPage';
import { Homepage } from './Components/Homepage/Hompage';
import { Footer } from './Components/Navigation/Footer';
import Navbar from './Components/Navigation/Navbar';
import { SearchBooksPage } from './Components/SearchBooks/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';




const oktaAuth = new OktaAuth(oktaConfig);


export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/reviewlist/:bookId'>
            <ReviewListPage/>
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
          <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/shelf'> <ShelfPage/> </SecureRoute>
          <SecureRoute path='/messages'> <MessagesPage/> </SecureRoute>
          <SecureRoute path='/admin'> <ManageLibraryPage/> </SecureRoute>
        </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
}
