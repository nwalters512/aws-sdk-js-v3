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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetResourceProfileRequest, GetResourceProfileResponse } from "../models/models_0";
import { de_GetResourceProfileCommand, se_GetResourceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceProfileCommand}.
 */
export interface GetResourceProfileCommandInput extends GetResourceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceProfileCommand}.
 */
export interface GetResourceProfileCommandOutput extends GetResourceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetResourceProfileCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetResourceProfileCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetResourceProfileRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetResourceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceProfileResponse
 * //   profileUpdatedAt: new Date("TIMESTAMP"),
 * //   sensitivityScore: Number("int"),
 * //   sensitivityScoreOverridden: true || false,
 * //   statistics: { // ResourceStatistics
 * //     totalBytesClassified: Number("long"),
 * //     totalDetections: Number("long"),
 * //     totalDetectionsSuppressed: Number("long"),
 * //     totalItemsClassified: Number("long"),
 * //     totalItemsSensitive: Number("long"),
 * //     totalItemsSkipped: Number("long"),
 * //     totalItemsSkippedInvalidEncryption: Number("long"),
 * //     totalItemsSkippedInvalidKms: Number("long"),
 * //     totalItemsSkippedPermissionDenied: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceProfileCommandInput - {@link GetResourceProfileCommandInput}
 * @returns {@link GetResourceProfileCommandOutput}
 * @see {@link GetResourceProfileCommandInput} for command's `input` shape.
 * @see {@link GetResourceProfileCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetResourceProfileCommand extends $Command<
  GetResourceProfileCommandInput,
  GetResourceProfileCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: GetResourceProfileCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceProfileCommandInput, GetResourceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetResourceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "GetResourceProfile",
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
  private serialize(input: GetResourceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceProfileCommandOutput> {
    return de_GetResourceProfileCommand(output, context);
  }
}
