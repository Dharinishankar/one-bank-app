import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
 import '@aws-amplify/ui-react/styles.css'
// import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';

import awscofig  from './aws-exports';

 Amplify.configure(awscofig);
 Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => console.log(err));

function App({ signOut, user}) {
 
  return (
    <>
      <h1>Hello00000{user.username}</h1>
      <h2>test3{user.attributes.email}</h2>
      <h2>test4{awscofig.aws_cognito_username_attributes}</h2>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);  