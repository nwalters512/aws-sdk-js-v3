// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupRelatedMetricsCommand,
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "../commands/ListAnomalyGroupRelatedMetricsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAnomalyGroupRelatedMetricsCommandInput,
  ...args: any
): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalyGroupRelatedMetricsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnomalyGroupRelatedMetrics(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupRelatedMetricsCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalyGroupRelatedMetricsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalyGroupRelatedMetricsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutMetricsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutMetrics | LookoutMetricsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
