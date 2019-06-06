import {
  CampaignCreated as CampaignCreatedEvent,
  CampaignJoined as CampaignJoinedEvent
} from "../generated/Contract/Contract"

import {Campaign,Join} from "../generated/schema";



export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new Campaign(
    event.transaction.hash.toHex()
  )
  entity._moderator = event.params.moderator
  entity._owner = event.params.owner
  entity._campaign = event.address
  entity._joined = []
  entity.save()
}

export function handleCampaignJoined(event: CampaignJoinedEvent): void {
  let campaign = Campaign.loadb(event.params.joinUser.toString())
  let entity = new Join(
    event.transaction.hash.toHex()
  )
  entity._amount = event.params.amount
  entity._campaign = event.params.joinUser

  entity.save()

  campaign._joined.push(entity.id)
}
