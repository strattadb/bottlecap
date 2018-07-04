import { Blockchain } from '../blockchains';
import { Block } from '../blocks';
import { Mempool } from '../mempool';
import { Transaction } from '../transactions';
import { Message, MessageType, ServerInfo } from './types';

export const parseMessage = (data: string): Message | null => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const createQueryActiveBlockchainMessage = (): Message => ({
  type: MessageType.QueryActiveBlockchain,
  content: null,
});

export const createQueryLatestBlockMessage = (): Message => ({
  type: MessageType.QueryLatestBlock,
  content: null,
});

export const createQueryMempoolMessage = (): Message => ({
  type: MessageType.QueryMempool,
  content: null,
});

export const createQueryPeersMessage = (): Message => ({
  type: MessageType.QueryPeers,
  content: null,
});

export const createSendServerInfoMessage = (
  serverInfo: ServerInfo,
): Message => ({
  type: MessageType.SendServerInfo,
  content: serverInfo,
});

export const createSendActiveBlockchainMessage = (
  activeBlockchain: Blockchain,
): Message => ({
  type: MessageType.SendActiveBlockchain,
  content: activeBlockchain,
});

export const createSendLatestBlockMessage = (latestBlock: Block): Message => ({
  type: MessageType.SendLatestBlock,
  content: latestBlock,
});

export const createSendTransactionMessage = (
  transaction: Transaction,
): Message => ({
  type: MessageType.SendTransaction,
  content: transaction,
});

export const createSendMempoolMessage = (mempool: Mempool): Message => ({
  type: MessageType.SendMempool,
  content: mempool,
});

export const createSendPeersMessage = (peerUrls: string[]): Message => ({
  type: MessageType.SendPeers,
  content: peerUrls,
});