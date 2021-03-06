import {
  findBlock,
  getTimeBetweenBlocks,
  isDifficultyAdjustmentBlock,
} from './blocks';
import { DIFFICULTY_ADJUSMENT_INTERVAL } from './constants';
import { hashBlock } from './helpers';
import { Block } from './types';

describe('findBlock', () => {
  test('returns a hashed block', () => {
    const block: Block = findBlock({
      index: 0,
      data: {
        coinbaseTransaction: {
          id: '',
          blockIndex: 0,
          txOut: { address: '', amount: 1 },
        },
        transactions: [],
      },
      prevHash: '',
      timestamp: Date.now(),
      difficulty: 1,
    });

    expect(block.hash).toBe(hashBlock(block));
  });
});

describe('isDifficultyAdjustmentBlock', () => {
  test('returns false when the block is the genesis block', () => {
    const block: Block = findBlock({
      index: 0,
      data: {
        coinbaseTransaction: {
          id: '',
          blockIndex: 0,
          txOut: { address: '', amount: 1 },
        },
        transactions: [],
      },
      prevHash: '',
      timestamp: Date.now(),
      difficulty: 1,
    });

    expect(isDifficultyAdjustmentBlock(block)).toBe(false);
  });

  test('returns true when a block should be used to adjust the difficulty', () => {
    const index = DIFFICULTY_ADJUSMENT_INTERVAL * 10;

    const block: Block = findBlock({
      index,
      data: {
        coinbaseTransaction: {
          id: '',
          blockIndex: 0,
          txOut: { address: '', amount: 1 },
        },
        transactions: [],
      },
      prevHash: 'test',
      timestamp: Date.now(),
      difficulty: 1,
    });

    expect(isDifficultyAdjustmentBlock(block)).toBe(true);
  });
});

describe('getTimeBetweenBlocks', () => {
  test('returns the time in ms between 2 blocks', () => {
    const timestamp1 = Date.now();
    const timestamp2 = Date.now();

    const block1: Block = findBlock({
      index: 0,
      data: {
        coinbaseTransaction: {
          id: '',
          blockIndex: 0,
          txOut: { address: '', amount: 1 },
        },
        transactions: [],
      },
      prevHash: '',
      timestamp: timestamp1,
      difficulty: 1,
    });

    const block2: Block = findBlock({
      index: 0,
      data: {
        coinbaseTransaction: {
          id: '',
          blockIndex: 0,
          txOut: { address: '', amount: 1 },
        },
        transactions: [],
      },
      prevHash: '',
      timestamp: timestamp2,
      difficulty: 1,
    });

    expect(getTimeBetweenBlocks(block2, block1)).toBe(timestamp2 - timestamp1);
  });
});
