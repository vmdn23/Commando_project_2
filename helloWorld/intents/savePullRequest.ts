import { SaveState, Toauth2Context, TSaveStateCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class SavePullRequestIntent {
  static intentName: string = 'savePullRequest'
  static intentType: any = SaveState

  
  static action(
    _context: Toauth2Context,
    _params: any,
    body: { pullRequest: any, repository: any },
    state: any,
    callback: TSaveStateCallback
  ){
    callback({
      state: {
        ...state,
          // We append the pullRequest we want to attach to the existing pullRequests
        pullRequests: [
          ...(state.pullRequests || []),
          {
            number: body.pullRequest.number,
            fullName: body.repository.full_name
          }
        ]
      }
    })
  }  
}

