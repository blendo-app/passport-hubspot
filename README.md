# passport-hubspot
Passport strategy for authenticating with HubSpot using the OAuth 2.0 API.

## Installation

    npm i passport-hubspot-oauth2.0

## Usage

#### Configure Strategy

    passport.use(new HubSpotStrategy({
        clientID: HUBSPOT_APP_ID,
        clientSecret: HUBSPOT_APP__SECRET,
        callbackURL: "http://myapp.dev/hubspot/callback"
      }, function(req, accessToken, refreshToken, profile, done) {
        // Verify callback.
      };
    ));


You can also define [Hubspot Scope](http://developers.hubspot.com/docs/methods/oauth2/initiate-oauth-integration) while configuring your Strategy. 


    passport.use(new HubSpotStrategy({
        clientID: HUBSPOT_APP_ID,
        clientSecret: HUBSPOT_APP__SECRET,
        callbackURL: "http://myapp.dev/hubspot/callback"
        scope: [contacts]
      }, function(req, accessToken, refreshToken, profile, done) {
        // Verify callback.
      };
    ));
    
    
** By default your Strategy is built based on those Scopes ['contacts', 'content', 'reports', 'social', 'automation', 'timeline'];

## License
[The MIT License](http://opensource.org/licenses/MIT)