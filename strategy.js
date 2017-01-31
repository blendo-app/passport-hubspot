/**
 * Module dependencies.
 */
var OAuth2Strategy = require('passport-oauth2').Strategy
  , util = require('util');


function Strategy(options, verify) {
	
	options = options || {};
  	options.authorizationURL = options.authorizationURL || 'https://app.hubspot.com/oauth/authorize';
  	options.tokenURL = options.tokenURL || 'https://api.hubapi.com/oauth/v1/token';

  	OAuth2Strategy.call(this, options, verify);

  	this.name = 'hubspot';
  	this._oauth2._useAuthorizationHeaderForGET = true;
  	this._scope = ['contacts', 'content', 'reports', 'social', 'automation', 'timeline'];
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;