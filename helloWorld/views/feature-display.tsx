/*
  The purpose of this component is to be the result of your scenario.
  Its responsibility is to retrieve the scenario state from a previous action
  of a user.
*/

import { RootComponent, Prop } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'display',
  group: 'feature'
})
export class FeatureDisplay {
  // Create a referenceId Property
  @Prop() referenceId: string
  render() {
    return (
      // Add the referenceId
      <display-attached-pull-requests referenceId={this.referenceId} />
    )
  }
}
