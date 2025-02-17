// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRoleMembershipsCommand,
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput,
} from "../commands/ListRoleMembershipsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListRoleMembershipsCommandInput,
  ...args: any
): Promise<ListRoleMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoleMembershipsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRoleMemberships(
  config: QuickSightPaginationConfiguration,
  input: ListRoleMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoleMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoleMembershipsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
