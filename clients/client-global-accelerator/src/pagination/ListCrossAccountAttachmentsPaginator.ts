// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCrossAccountAttachmentsCommand,
  ListCrossAccountAttachmentsCommandInput,
  ListCrossAccountAttachmentsCommandOutput,
} from "../commands/ListCrossAccountAttachmentsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCrossAccountAttachmentsCommandInput,
  ...args: any
): Promise<ListCrossAccountAttachmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCrossAccountAttachmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCrossAccountAttachments(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCrossAccountAttachmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListCrossAccountAttachmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCrossAccountAttachmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
