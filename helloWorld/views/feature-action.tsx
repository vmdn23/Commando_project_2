/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent, BearerState, Intent, IntentType } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  // Connect savePullRequest Intent
  @Intent('savePullRequest', IntentType.SaveState) savePullRequest: any
  @BearerState() attachedPullRequests: Array<any> = []

  attachPullRequest = ({ data, complete }): void => {
    // Use the savePullRequest intent to store the current state
    this.savePullRequest({ body: data })
      .then(() => {
        this.attachedPullRequests = [...this.attachedPullRequests, data.pullRequest]
        complete()
      })
      .catch(error => {
        throw error
      })
  }

  render() {
    return (
      <bearer-navigator
        btnProps={{ content: 'Attach Pull Requests', kind: 'primary' }}
	direction="right"
	// connect our attachPullRequest function with the navigator
	complete={this.attachPullRequest}
      >

      	<bearer-navigator-auth-screen />
	<bearer-navigator-screen navigationTitle="Repositories" name="repository">
	<list-repositories />
	</bearer-navigator-screen>
        <bearer-navigator-screen
          // data will be passed to list-pull-requests as 'this' keyword
          renderFunc={({ data }) => <list-pull-requests {...data} />}
	  name="pullRequest"
	  navigationTitle={data => data.repository.full_name}
	/>
      </bearer-navigator>
    )
  }
}
