// smithy-typescript generated code
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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { HostLabelInput } from "../models/models_0";
import {
  de_EndpointWithHostLabelOperationCommand,
  se_EndpointWithHostLabelOperationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandInput extends HostLabelInput {}
/**
 * @public
 *
 * The output of {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, EndpointWithHostLabelOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, EndpointWithHostLabelOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // HostLabelInput
 *   label: "STRING_VALUE", // required
 * };
 * const command = new EndpointWithHostLabelOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointWithHostLabelOperationCommandInput - {@link EndpointWithHostLabelOperationCommandInput}
 * @returns {@link EndpointWithHostLabelOperationCommandOutput}
 * @see {@link EndpointWithHostLabelOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointWithHostLabelOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class EndpointWithHostLabelOperationCommand extends $Command<
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: EndpointWithHostLabelOperationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EndpointWithHostLabelOperationCommandInput, EndpointWithHostLabelOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "EndpointWithHostLabelOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonProtocol",
        operation: "EndpointWithHostLabelOperation",
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
    input: EndpointWithHostLabelOperationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EndpointWithHostLabelOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EndpointWithHostLabelOperationCommandOutput> {
    return de_EndpointWithHostLabelOperationCommand(output, context);
  }
}
