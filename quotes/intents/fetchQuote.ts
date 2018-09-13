import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class FetchQuoteIntent {
  static intentName: string = 'fetchQuote'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
    //... your code goes here
    Client(context.authAccess.accessToken).get('/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(({ data[0] }) => {
        callback({ data : [response.data]})
      })
      .catch(error => {
      	callback({ error: error.toString() })
      })
  }
}

