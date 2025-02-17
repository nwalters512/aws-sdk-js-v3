// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListMetadataTransferJobsRequest, ListMetadataTransferJobsResponse } from "../models/models_0";
import { de_ListMetadataTransferJobsCommand, se_ListMetadataTransferJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMetadataTransferJobsCommand}.
 */
export interface ListMetadataTransferJobsCommandInput extends ListMetadataTransferJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetadataTransferJobsCommand}.
 */
export interface ListMetadataTransferJobsCommandOutput extends ListMetadataTransferJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the metadata transfer jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListMetadataTransferJobsCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListMetadataTransferJobsCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListMetadataTransferJobsRequest
 *   sourceType: "STRING_VALUE", // required
 *   destinationType: "STRING_VALUE", // required
 *   filters: [ // ListMetadataTransferJobsFilters
 *     { // ListMetadataTransferJobsFilter Union: only one key present
 *       workspaceId: "STRING_VALUE",
 *       state: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMetadataTransferJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetadataTransferJobsResponse
 * //   metadataTransferJobSummaries: [ // MetadataTransferJobSummaries // required
 * //     { // MetadataTransferJobSummary
 * //       metadataTransferJobId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //       status: { // MetadataTransferJobStatus
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //         queuedPosition: Number("int"),
 * //       },
 * //       progress: { // MetadataTransferJobProgress
 * //         totalCount: Number("int"),
 * //         succeededCount: Number("int"),
 * //         skippedCount: Number("int"),
 * //         failedCount: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetadataTransferJobsCommandInput - {@link ListMetadataTransferJobsCommandInput}
 * @returns {@link ListMetadataTransferJobsCommandOutput}
 * @see {@link ListMetadataTransferJobsCommandInput} for command's `input` shape.
 * @see {@link ListMetadataTransferJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 */
export class ListMetadataTransferJobsCommand extends $Command<
  ListMetadataTransferJobsCommandInput,
  ListMetadataTransferJobsCommandOutput,
  IoTTwinMakerClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListMetadataTransferJobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetadataTransferJobsCommandInput, ListMetadataTransferJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMetadataTransferJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "ListMetadataTransferJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "ListMetadataTransferJobs",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListMetadataTransferJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMetadataTransferJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetadataTransferJobsCommandOutput> {
    return de_ListMetadataTransferJobsCommand(output, context);
  }
}
