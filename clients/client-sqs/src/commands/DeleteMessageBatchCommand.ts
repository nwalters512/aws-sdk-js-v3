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

import { DeleteMessageBatchRequest, DeleteMessageBatchResult } from "../models/models_0";
import { de_DeleteMessageBatchCommand, se_DeleteMessageBatchCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessageBatchCommand}.
 */
export interface DeleteMessageBatchCommandInput extends DeleteMessageBatchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageBatchCommand}.
 */
export interface DeleteMessageBatchCommandOutput extends DeleteMessageBatchResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes up to ten messages from the specified queue. This is a batch version of
 *                     <code>
 *                <a>DeleteMessage</a>.</code> The result of the action on each
 *             message is reported individually in the response.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and
 *                 unsuccessful actions, you should check for batch errors even when the call returns
 *                 an HTTP status code of <code>200</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // DeleteMessageBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // DeleteMessageBatchRequestEntryList // required
 *     { // DeleteMessageBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       ReceiptHandle: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DeleteMessageBatchCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMessageBatchResult
 * //   Successful: [ // DeleteMessageBatchResultEntryList // required
 * //     { // DeleteMessageBatchResultEntry
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // BatchResultErrorEntryList // required
 * //     { // BatchResultErrorEntry
 * //       Id: "STRING_VALUE", // required
 * //       SenderFault: true || false, // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteMessageBatchCommandInput - {@link DeleteMessageBatchCommandInput}
 * @returns {@link DeleteMessageBatchCommandOutput}
 * @see {@link DeleteMessageBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link BatchEntryIdsNotDistinct} (client fault)
 *  <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 *
 * @throws {@link EmptyBatchRequest} (client fault)
 *  <p>The batch request doesn't contain any entries.</p>
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidBatchEntryId} (client fault)
 *  <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the
 *             specification.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>The specified queue doesn't exist.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>The rate of requests per second exceeds the Amazon Web Services KMS request quota for an
 *                     account and Region. </p>
 *             </li>
 *             <li>
 *                <p>A burst or sustained high rate of requests to change the state of the same KMS
 *                     key. This condition is often known as a "hot key."</p>
 *             </li>
 *             <li>
 *                <p>Requests for operations on KMS keys in a Amazon Web Services CloudHSM key store
 *                     might be throttled at a lower-than-expected rate when the Amazon Web Services
 *                     CloudHSM cluster associated with the Amazon Web Services CloudHSM key store is
 *                     processing numerous commands, including those unrelated to the Amazon Web Services CloudHSM key store.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link TooManyEntriesInBatchRequest} (client fault)
 *  <p>The batch request contains more entries than permissible.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class DeleteMessageBatchCommand extends $Command<
  DeleteMessageBatchCommandInput,
  DeleteMessageBatchCommandOutput,
  SQSClientResolvedConfig
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
  constructor(readonly input: DeleteMessageBatchCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMessageBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "DeleteMessageBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSQS",
        operation: "DeleteMessageBatch",
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
  private serialize(input: DeleteMessageBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMessageBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageBatchCommandOutput> {
    return de_DeleteMessageBatchCommand(output, context);
  }
}
