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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  CreatePersistentContactAssociationRequest,
  CreatePersistentContactAssociationResponse,
} from "../models/models_0";
import {
  de_CreatePersistentContactAssociationCommand,
  se_CreatePersistentContactAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePersistentContactAssociationCommand}.
 */
export interface CreatePersistentContactAssociationCommandInput extends CreatePersistentContactAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePersistentContactAssociationCommand}.
 */
export interface CreatePersistentContactAssociationCommandOutput
  extends CreatePersistentContactAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables rehydration of chats for the lifespan of a contact. For more information about chat
 *    rehydration, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreatePersistentContactAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreatePersistentContactAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreatePersistentContactAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   RehydrationType: "ENTIRE_PAST_SESSION" || "FROM_SEGMENT", // required
 *   SourceContactId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreatePersistentContactAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePersistentContactAssociationResponse
 * //   ContinuedFromContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePersistentContactAssociationCommandInput - {@link CreatePersistentContactAssociationCommandInput}
 * @returns {@link CreatePersistentContactAssociationCommandOutput}
 * @see {@link CreatePersistentContactAssociationCommandInput} for command's `input` shape.
 * @see {@link CreatePersistentContactAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreatePersistentContactAssociationCommand extends $Command<
  CreatePersistentContactAssociationCommandInput,
  CreatePersistentContactAssociationCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: CreatePersistentContactAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePersistentContactAssociationCommandInput, CreatePersistentContactAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePersistentContactAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreatePersistentContactAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "CreatePersistentContactAssociation",
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
  private serialize(
    input: CreatePersistentContactAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreatePersistentContactAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePersistentContactAssociationCommandOutput> {
    return de_CreatePersistentContactAssociationCommand(output, context);
  }
}
