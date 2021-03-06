import { CoinbaseTransaction, Transaction } from '../transactions';

/**
 * A nonce is an integer contained in a block that has to be
 * searched so that the block's hash passes the proof of work.
 */
export type Nonce = number;

export type Block = {
  /**
   * The index of the block in the blockchain.
   */
  readonly index: number;
  readonly nonce: Nonce;
  readonly data: BlockData;
  /**
   * The hash of the previous block in the blockchain.
   */
  readonly prevHash: string;
  readonly hash: string;
  /**
   * The timestamp when the miner started to mine
   * this block.
   */
  readonly timestamp: number;
  /**
   * The difficulty (amount of work) of the hash of the block.
   */
  readonly difficulty: number;
};

export type BlockData = {
  readonly coinbaseTransaction: CoinbaseTransaction;
  readonly transactions: ReadonlyArray<Transaction>;
};

/**
 * The arguments to be passed to the function `findBlock`.
 */
export type FindBlockArgs = {
  readonly index: number;
  readonly data: BlockData;
  readonly prevHash: string;
  readonly timestamp: number;
  readonly difficulty: number;
};
