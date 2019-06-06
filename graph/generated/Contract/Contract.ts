import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignCreated extends EthereumEvent {
  get params(): CampaignCreated__Params {
    return new CampaignCreated__Params(this);
  }
}

export class CampaignCreated__Params {
  _event: CampaignCreated;

  constructor(event: CampaignCreated) {
    this._event = event;
  }

  get relevantNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get moderator(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CampaignJoined extends EthereumEvent {
  get params(): CampaignJoined__Params {
    return new CampaignJoined__Params(this);
  }
}

export class CampaignJoined__Params {
  _event: CampaignJoined;

  constructor(event: CampaignJoined) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get joinUser(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }
}

export class JoinCampaignCall extends EthereumCall {
  get inputs(): JoinCampaignCallInputs {
    return new JoinCampaignCallInputs(this);
  }

  get outputs(): JoinCampaignCallOutputs {
    return new JoinCampaignCallOutputs(this);
  }
}

export class JoinCampaignCallInputs {
  _call: JoinCampaignCall;

  constructor(call: JoinCampaignCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _joinUser(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class JoinCampaignCallOutputs {
  _call: JoinCampaignCall;

  constructor(call: JoinCampaignCall) {
    this._call = call;
  }
}

export class CreateCampaignCall extends EthereumCall {
  get inputs(): CreateCampaignCallInputs {
    return new CreateCampaignCallInputs(this);
  }

  get outputs(): CreateCampaignCallOutputs {
    return new CreateCampaignCallOutputs(this);
  }
}

export class CreateCampaignCallInputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }

  get relevantNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _moderator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateCampaignCallOutputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }
}
