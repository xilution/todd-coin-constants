import {
  DIFFICULTY,
  MINING_REWARD,
  MAX_TRANSACTIONS_PER_BLOCK,
  FIRST_PAGE,
  DEFAULT_PAGE_SIZE,
  MAXIMUM_PAGE_SIZE,
  DEFAULT_PARTICIPANT_KEY_TIME_TO_LIVE_IN_DAYS,
} from "../src";

describe("Index Tests", () => {
  it("should export constants", () => {
    expect(DIFFICULTY).toEqual(4);
    expect(MINING_REWARD).toEqual(10);
    expect(MAX_TRANSACTIONS_PER_BLOCK).toEqual(100);
    expect(FIRST_PAGE).toEqual(0);
    expect(DEFAULT_PAGE_SIZE).toEqual(10);
    expect(MAXIMUM_PAGE_SIZE).toEqual(100);
    expect(DEFAULT_PARTICIPANT_KEY_TIME_TO_LIVE_IN_DAYS).toEqual(365);
  });
});
