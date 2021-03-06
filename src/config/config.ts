/**
 * Configuration module.
 * Here we export environmental variables
 * or throw if they were not set.
 *
 * Intended to be imported at the start of the application.
 */

import { getEnvOrThrow } from './helpers';

const logLevel = getEnvOrThrow('LOG_LEVEL', {
  defaultValue: 'info',
}) as string;

const persistencePath = getEnvOrThrow('PERSISTENCE_PATH', {
  defaultValue: 'node_data',
}) as string;

const graphQLServerPort = getEnvOrThrow('GRAPHQL_SERVER_PORT', {
  defaultValue: 4000,
  valueType: 'number',
}) as number;

const p2pServerPort = getEnvOrThrow('P2P_SERVER_PORT', {
  defaultValue: 4100,
  valueType: 'number',
}) as number;

const p2pNodeUrl = getEnvOrThrow('P2P_NODE_URL', {
  defaultValue: `ws://localhost:${p2pServerPort}`,
}) as string;

export const env = {
  logLevel,
  graphQLServerPort,
  persistencePath,
  p2pNodeUrl,
  p2pServerPort,
};
