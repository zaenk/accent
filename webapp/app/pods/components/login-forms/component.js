// Vendor
import Component from '@ember/component';
import {computed} from '@ember/object';
import config from 'accent-webapp/config/environment';

export default Component.extend({
  username: '',
  providerIds: computed('providers.[].id', function() {
    return this.providers.map(({id}) => id);
  }),

  googleLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('google');
  }),
  dummyLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('dummy');
  }),
  githubLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('github');
  }),
  slackLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('slack');
  }),
  discordLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('discord');
  }),
  microsoftLoginEnabled: computed('providerIds', function() {
    return this.providerIds.includes('microsoft');
  }),

  googleUrl: computed(() => `${config.API.AUTHENTICATION_PATH}/google`),
  githubUrl: computed(() => `${config.API.AUTHENTICATION_PATH}/github`),
  slackUrl: computed(() => `${config.API.AUTHENTICATION_PATH}/slack`),
  discordUrl: computed(() => `${config.API.AUTHENTICATION_PATH}/discord`),
  microsoftUrl: computed(() => `${config.API.AUTHENTICATION_PATH}/microsoft`),
  dummyUrl: computed('username', function() {
    return `${
      config.API.AUTHENTICATION_PATH
    }/dummy/callback?email=${this.username}`;
  })
});
