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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { PutVoiceConnectorOriginationRequest, PutVoiceConnectorOriginationResponse } from "../models/models_1";
import {
  de_PutVoiceConnectorOriginationCommand,
  se_PutVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandInput extends PutVoiceConnectorOriginationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandOutput
  extends PutVoiceConnectorOriginationResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorOrigination.html">PutVoiceConnectorOrigination</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutVoiceConnectorOriginationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Origination: { // Origination
 *     Routes: [ // OriginationRouteList
 *       { // OriginationRoute
 *         Host: "STRING_VALUE",
 *         Port: Number("int"),
 *         Protocol: "TCP" || "UDP",
 *         Priority: Number("int"),
 *         Weight: Number("int"),
 *       },
 *     ],
 *     Disabled: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorOriginationResponse
 * //   Origination: { // Origination
 * //     Routes: [ // OriginationRouteList
 * //       { // OriginationRoute
 * //         Host: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Protocol: "TCP" || "UDP",
 * //         Priority: Number("int"),
 * //         Weight: Number("int"),
 * //       },
 * //     ],
 * //     Disabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorOriginationCommandInput - {@link PutVoiceConnectorOriginationCommandInput}
 * @returns {@link PutVoiceConnectorOriginationCommandOutput}
 * @see {@link PutVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class PutVoiceConnectorOriginationCommand extends $Command<
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: PutVoiceConnectorOriginationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutVoiceConnectorOriginationCommandInput, PutVoiceConnectorOriginationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVoiceConnectorOriginationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorOriginationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "PutVoiceConnectorOrigination",
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
  private serialize(input: PutVoiceConnectorOriginationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutVoiceConnectorOriginationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorOriginationCommandOutput> {
    return de_PutVoiceConnectorOriginationCommand(output, context);
  }
}
