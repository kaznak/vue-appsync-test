import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Amplify from 'aws-amplify'
import appSyncConfig from './AppSyncAccess'

const amplifyConfig = {
    'aws_appsync_graphqlEndpoint': appSyncConfig.graphqlEndpoint,
    'aws_appsync_region': appSyncConfig.region,
    'aws_appsync_authenticationType': appSyncConfig.authenticationType,
    'aws_appsync_apiKey': appSyncConfig.apiKey
}
Amplify.configure(amplifyConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
