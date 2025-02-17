// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { emitWarningIfUnsupportedVersion as awsCheckVersion } from "@aws-sdk/core";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import {
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
} from "@smithy/config-resolver";
import { Hash } from "@smithy/hash-node";
import { fileStreamHasher as streamHasher } from "@smithy/hash-stream-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@smithy/middleware-retry";
import { loadConfig as loadNodeConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";
import { ChecksumConstructor as __ChecksumConstructor, HashConstructor as __HashConstructor } from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { RestJsonProtocolClientConfig } from "./RestJsonProtocolClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@smithy/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestJsonProtocolClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  awsCheckVersion(process.version);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    md5: config?.md5 ?? Hash.bind(null, "md5"),
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    retryMode:
      config?.retryMode ??
      loadNodeConfig({
        ...NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
      }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? streamHasher,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
  };
};
