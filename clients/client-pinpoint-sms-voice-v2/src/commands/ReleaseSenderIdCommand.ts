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

import { ReleaseSenderIdRequest, ReleaseSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_ReleaseSenderIdCommand, se_ReleaseSenderIdCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReleaseSenderIdCommand}.
 */
export interface ReleaseSenderIdCommandInput extends ReleaseSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseSenderIdCommand}.
 */
export interface ReleaseSenderIdCommandOutput extends ReleaseSenderIdResult, __MetadataBearer {}

/**
 * @public
 * <p>Releases an existing sender ID in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ReleaseSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ReleaseSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ReleaseSenderIdRequest
 *   SenderId: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 * };
 * const command = new ReleaseSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // ReleaseSenderIdResult
 * //   SenderIdArn: "STRING_VALUE", // required
 * //   SenderId: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE", // required
 * //   MessageTypes: [ // MessageTypeList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   MonthlyLeasingPrice: "STRING_VALUE", // required
 * //   Registered: true || false, // required
 * //   RegistrationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReleaseSenderIdCommandInput - {@link ReleaseSenderIdCommandInput}
 * @returns {@link ReleaseSenderIdCommandOutput}
 * @see {@link ReleaseSenderIdCommandInput} for command's `input` shape.
 * @see {@link ReleaseSenderIdCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class ReleaseSenderIdCommand extends $Command<
  ReleaseSenderIdCommandInput,
  ReleaseSenderIdCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: ReleaseSenderIdCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReleaseSenderIdCommandInput, ReleaseSenderIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleaseSenderIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "ReleaseSenderIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "ReleaseSenderId",
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
  private serialize(input: ReleaseSenderIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReleaseSenderIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleaseSenderIdCommandOutput> {
    return de_ReleaseSenderIdCommand(output, context);
  }
}
