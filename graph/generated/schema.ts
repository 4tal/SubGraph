import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Campaign extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");

    let owner = this.get("_owner").toString()

    assert(id !== null, "Cannot save Campaign entity without an ID");
    assert(
        id.kind == ValueKind.STRING,
        "Cannot save Campaign entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Campaign", id.toString(), this);
    store.set("Campaign", owner, this);
  }

  static load(id: string): Campaign | null {
    return store.get("Campaign", id) as Campaign | null;
  }
  static loadb(owner: string): Campaign | null {
    return store.get("Campaign", owner) as Campaign | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _web3(): Bytes {
    let value = this.get("_web3");
    return value.toBytes();
  }

  set _web3(value: Bytes) {
    this.set("_web3", Value.fromBytes(value));
  }

  get _moderator(): Bytes {
    let value = this.get("_moderator");
    return value.toBytes();
  }

  set _moderator(value: Bytes) {
    this.set("_moderator", Value.fromBytes(value));
  }

  get _owner(): Bytes {
    let value = this.get("_owner");
    return value.toBytes();
  }

  set _owner(value: Bytes) {
    this.set("_owner", Value.fromBytes(value));
  }

  get _campaign(): Bytes {
    let value = this.get("_campaign");
    return value.toBytes();
  }

  set _campaign(value: Bytes) {
    this.set("_campaign", Value.fromBytes(value));
  }

  get _joined(): Array<string> | null {
    let value = this.get("_joined");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set _joined(value: Array<string> | null) {
    if (value === null) {
      this.unset("_joined");
    } else {
      this.set("_joined", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Join extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Join entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Join entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Join", id.toString(), this);
  }

  static load(id: string): Join | null {
    return store.get("Join", id) as Join | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _campaign(): Bytes {
    let value = this.get("_campaign");
    return value.toBytes();
  }

  set _campaign(value: Bytes) {
    this.set("_campaign", Value.fromBytes(value));
  }

  get _idan(): Bytes {
    let value = this.get("_idan");
    return value.toBytes();
  }

  set _idan(value: Bytes) {
    this.set("_idan", Value.fromBytes(value));
  }
}
