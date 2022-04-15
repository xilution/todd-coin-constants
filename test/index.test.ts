import {
  DIFFICULTY,
  MINING_REWARD,
  GENESIS_REWARD,
  MAX_TRANSACTIONS_PER_BLOCK,
  FIRST_PAGE,
  DEFAULT_PAGE_SIZE,
  MAXIMUM_PAGE_SIZE,
  GENESIS_HASH,
  GENESIS_PARTICIPANT_ID,
  GENESIS_PARTICIPANT_PUBLIC_KEY,
  GENESIS_BLOCK_ID,
  GENESIS_TRANSACTION_ID,
  GENESIS_NONCE,
} from "../src";

describe("Index Tests", () => {
  it("export constants", () => {
    expect(DIFFICULTY).toEqual(4);
    expect(MINING_REWARD).toEqual(10);
    expect(GENESIS_REWARD).toEqual(50);
    expect(MAX_TRANSACTIONS_PER_BLOCK).toEqual(100);
    expect(FIRST_PAGE).toEqual(0);
    expect(DEFAULT_PAGE_SIZE).toEqual(10);
    expect(MAXIMUM_PAGE_SIZE).toEqual(250);
    expect(GENESIS_HASH).toEqual(
      "0000000000000000000000000000000000000000000000000000000000000000"
    );
    expect(GENESIS_PARTICIPANT_ID).toEqual(
      "0dd9bf1d-544c-4d9a-beb3-8bc0d8024db4"
    );
    expect(GENESIS_PARTICIPANT_PUBLIC_KEY).toEqual(
      "049976c498d31064539767b4ca5e7383e9c2d1f9305bccdcd476e0e8c24872dfa7d1940bf433d6a431c23813594882126d49b21ebadd1fe00ef50dd8262000d73b"
    );
    expect(GENESIS_BLOCK_ID).toEqual("6daed5b3-86fb-4c68-945f-87fac9cbe846");
    expect(GENESIS_TRANSACTION_ID).toEqual(
      "13b155a6-da09-4e9c-ba13-9c78bdc87443"
    );
    expect(GENESIS_NONCE).toEqual(0);
  });
});
