import { FetchData, Toauth2Context, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class ListRepositoriesIntent {
  static intentName: string = 'listRepositories'
  static intentType: any = FetchData

  
  static action(context: Toauth2Context, params: any, body: any, callback: TFetchDataCallback) {
    //... your code goes here
    // use the client defined in client.ts to fetch real object like that:
     Client(context.authAccess.accessToken).get('user/repos').then(({ data }) => {
         callback({ data })
       })
       .catch((error) => {
         callback({ error: error.toString() })
       })
    //callback({ data: []})
  }
}

