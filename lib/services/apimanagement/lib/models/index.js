/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.ErrorFieldContract = require('./errorFieldContract');
exports.ErrorResponse = require('./errorResponse');
exports.Resource = require('./resource');
exports.PolicyContract = require('./policyContract');
exports.PolicyCollection = require('./policyCollection');
exports.PolicySnippetContract = require('./policySnippetContract');
exports.PolicySnippetsCollection = require('./policySnippetsCollection');
exports.RegionContract = require('./regionContract');
exports.ApiExportResult = require('./apiExportResult');
exports.ApiVersionSetContractDetails = require('./apiVersionSetContractDetails');
exports.ApiEntityBaseContract = require('./apiEntityBaseContract');
exports.ApiContractProperties = require('./apiContractProperties');
exports.ApiContract = require('./apiContract');
exports.ApiCreateOrUpdatePropertiesWsdlSelector = require('./apiCreateOrUpdatePropertiesWsdlSelector');
exports.ApiCreateOrUpdateParameter = require('./apiCreateOrUpdateParameter');
exports.ApiUpdateContract = require('./apiUpdateContract');
exports.OAuth2AuthenticationSettingsContract = require('./oAuth2AuthenticationSettingsContract');
exports.AuthenticationSettingsContract = require('./authenticationSettingsContract');
exports.SubscriptionKeyParameterNamesContract = require('./subscriptionKeyParameterNamesContract');
exports.ApiRevisionContract = require('./apiRevisionContract');
exports.ApiRevisionInfoContract = require('./apiRevisionInfoContract');
exports.ApiReleaseContract = require('./apiReleaseContract');
exports.OperationContract = require('./operationContract');
exports.ParameterContract = require('./parameterContract');
exports.RepresentationContract = require('./representationContract');
exports.RequestContract = require('./requestContract');
exports.ResponseContract = require('./responseContract');
exports.OperationEntityBaseContract = require('./operationEntityBaseContract');
exports.OperationUpdateContract = require('./operationUpdateContract');
exports.SchemaContract = require('./schemaContract');
exports.LoggerContract = require('./loggerContract');
exports.DiagnosticContract = require('./diagnosticContract');
exports.ProductEntityBaseParameters = require('./productEntityBaseParameters');
exports.ProductTagResourceContractProperties = require('./productTagResourceContractProperties');
exports.OperationTagResourceContractProperties = require('./operationTagResourceContractProperties');
exports.ApiTagResourceContractProperties = require('./apiTagResourceContractProperties');
exports.TagTagResourceContractProperties = require('./tagTagResourceContractProperties');
exports.TagResourceContract = require('./tagResourceContract');
exports.ProductContract = require('./productContract');
exports.AuthorizationServerContract = require('./authorizationServerContract');
exports.AuthorizationServerUpdateContract = require('./authorizationServerUpdateContract');
exports.TokenBodyParameterContract = require('./tokenBodyParameterContract');
exports.AuthorizationServerContractBaseProperties = require('./authorizationServerContractBaseProperties');
exports.BackendAuthorizationHeaderCredentials = require('./backendAuthorizationHeaderCredentials');
exports.X509CertificateName = require('./x509CertificateName');
exports.BackendServiceFabricClusterProperties = require('./backendServiceFabricClusterProperties');
exports.BackendProperties = require('./backendProperties');
exports.BackendCredentialsContract = require('./backendCredentialsContract');
exports.BackendProxyContract = require('./backendProxyContract');
exports.BackendTlsProperties = require('./backendTlsProperties');
exports.BackendBaseParameters = require('./backendBaseParameters');
exports.BackendContract = require('./backendContract');
exports.BackendUpdateParameters = require('./backendUpdateParameters');
exports.BackendReconnectContract = require('./backendReconnectContract');
exports.CertificateContract = require('./certificateContract');
exports.CertificateCreateOrUpdateParameters = require('./certificateCreateOrUpdateParameters');
exports.CertificateInformation = require('./certificateInformation');
exports.CertificateConfiguration = require('./certificateConfiguration');
exports.HostnameConfiguration = require('./hostnameConfiguration');
exports.VirtualNetworkConfiguration = require('./virtualNetworkConfiguration');
exports.ApiManagementServiceSkuProperties = require('./apiManagementServiceSkuProperties');
exports.AdditionalLocation = require('./additionalLocation');
exports.ApiManagementServiceBackupRestoreParameters = require('./apiManagementServiceBackupRestoreParameters');
exports.ApiManagementServiceBaseProperties = require('./apiManagementServiceBaseProperties');
exports.ApiManagementServiceIdentity = require('./apiManagementServiceIdentity');
exports.ApimResource = require('./apimResource');
exports.ApiManagementServiceResource = require('./apiManagementServiceResource');
exports.ApiManagementServiceUpdateParameters = require('./apiManagementServiceUpdateParameters');
exports.ApiManagementServiceGetSsoTokenResult = require('./apiManagementServiceGetSsoTokenResult');
exports.ApiManagementServiceCheckNameAvailabilityParameters = require('./apiManagementServiceCheckNameAvailabilityParameters');
exports.ApiManagementServiceNameAvailabilityResult = require('./apiManagementServiceNameAvailabilityResult');
exports.ApiManagementServiceApplyNetworkConfigurationParameters = require('./apiManagementServiceApplyNetworkConfigurationParameters');
exports.ApiManagementServiceUploadCertificateParameters = require('./apiManagementServiceUploadCertificateParameters');
exports.HostnameConfigurationOld = require('./hostnameConfigurationOld');
exports.ApiManagementServiceUpdateHostnameParameters = require('./apiManagementServiceUpdateHostnameParameters');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.EmailTemplateParametersContractProperties = require('./emailTemplateParametersContractProperties');
exports.EmailTemplateContract = require('./emailTemplateContract');
exports.EmailTemplateUpdateParameters = require('./emailTemplateUpdateParameters');
exports.GroupContractProperties = require('./groupContractProperties');
exports.GroupContract = require('./groupContract');
exports.GroupCreateParameters = require('./groupCreateParameters');
exports.GroupUpdateParameters = require('./groupUpdateParameters');
exports.UserIdentityContract = require('./userIdentityContract');
exports.UserEntityBaseParameters = require('./userEntityBaseParameters');
exports.UserContract = require('./userContract');
exports.IdentityProviderContract = require('./identityProviderContract');
exports.IdentityProviderUpdateParameters = require('./identityProviderUpdateParameters');
exports.IdentityProviderBaseParameters = require('./identityProviderBaseParameters');
exports.LoggerUpdateContract = require('./loggerUpdateContract');
exports.RecipientsContractProperties = require('./recipientsContractProperties');
exports.NotificationContract = require('./notificationContract');
exports.RecipientUserContract = require('./recipientUserContract');
exports.RecipientUserCollection = require('./recipientUserCollection');
exports.RecipientEmailContract = require('./recipientEmailContract');
exports.RecipientEmailCollection = require('./recipientEmailCollection');
exports.ConnectivityStatusContract = require('./connectivityStatusContract');
exports.NetworkStatusContract = require('./networkStatusContract');
exports.NetworkStatusContractByLocation = require('./networkStatusContractByLocation');
exports.OpenidConnectProviderContract = require('./openidConnectProviderContract');
exports.OpenidConnectProviderUpdateContract = require('./openidConnectProviderUpdateContract');
exports.PortalSigninSettings = require('./portalSigninSettings');
exports.TermsOfServiceProperties = require('./termsOfServiceProperties');
exports.PortalSignupSettings = require('./portalSignupSettings');
exports.SubscriptionsDelegationSettingsProperties = require('./subscriptionsDelegationSettingsProperties');
exports.RegistrationDelegationSettingsProperties = require('./registrationDelegationSettingsProperties');
exports.PortalDelegationSettings = require('./portalDelegationSettings');
exports.ProductUpdateParameters = require('./productUpdateParameters');
exports.SubscriptionContract = require('./subscriptionContract');
exports.PropertyContract = require('./propertyContract');
exports.PropertyUpdateParameters = require('./propertyUpdateParameters');
exports.PropertyEntityBaseParameters = require('./propertyEntityBaseParameters');
exports.QuotaCounterValueContractProperties = require('./quotaCounterValueContractProperties');
exports.QuotaCounterContract = require('./quotaCounterContract');
exports.QuotaCounterCollection = require('./quotaCounterCollection');
exports.QuotaCounterValueContract = require('./quotaCounterValueContract');
exports.ReportRecordContract = require('./reportRecordContract');
exports.RequestReportRecordContract = require('./requestReportRecordContract');
exports.SubscriptionCreateParameters = require('./subscriptionCreateParameters');
exports.SubscriptionUpdateParameters = require('./subscriptionUpdateParameters');
exports.TagContract = require('./tagContract');
exports.TagCreateUpdateParameters = require('./tagCreateUpdateParameters');
exports.TagDescriptionContract = require('./tagDescriptionContract');
exports.TagDescriptionCreateParameters = require('./tagDescriptionCreateParameters');
exports.AccessInformationContract = require('./accessInformationContract');
exports.AccessInformationUpdateParameters = require('./accessInformationUpdateParameters');
exports.DeployConfigurationParameters = require('./deployConfigurationParameters');
exports.OperationResultLogItemContract = require('./operationResultLogItemContract');
exports.OperationResultContract = require('./operationResultContract');
exports.SaveConfigurationParameter = require('./saveConfigurationParameter');
exports.TenantConfigurationSyncStateContract = require('./tenantConfigurationSyncStateContract');
exports.GenerateSsoUrlResult = require('./generateSsoUrlResult');
exports.UserCreateParameters = require('./userCreateParameters');
exports.UserTokenParameters = require('./userTokenParameters');
exports.UserTokenResult = require('./userTokenResult');
exports.UserUpdateParameters = require('./userUpdateParameters');
exports.ApiVersionSetContract = require('./apiVersionSetContract');
exports.ApiVersionSetEntityBase = require('./apiVersionSetEntityBase');
exports.ApiVersionSetUpdateParameters = require('./apiVersionSetUpdateParameters');
exports.RegionListResult = require('./regionListResult');
exports.ApiCollection = require('./apiCollection');
exports.TagResourceCollection = require('./tagResourceCollection');
exports.ApiRevisionCollection = require('./apiRevisionCollection');
exports.ApiReleaseCollection = require('./apiReleaseCollection');
exports.OperationCollection = require('./operationCollection');
exports.ProductCollection = require('./productCollection');
exports.SchemaCollection = require('./schemaCollection');
exports.DiagnosticCollection = require('./diagnosticCollection');
exports.LoggerCollection = require('./loggerCollection');
exports.AuthorizationServerCollection = require('./authorizationServerCollection');
exports.BackendCollection = require('./backendCollection');
exports.CertificateCollection = require('./certificateCollection');
exports.OperationListResult = require('./operationListResult');
exports.ApiManagementServiceListResult = require('./apiManagementServiceListResult');
exports.EmailTemplateCollection = require('./emailTemplateCollection');
exports.GroupCollection = require('./groupCollection');
exports.UserCollection = require('./userCollection');
exports.IdentityProviderList = require('./identityProviderList');
exports.NotificationCollection = require('./notificationCollection');
exports.OpenIdConnectProviderCollection = require('./openIdConnectProviderCollection');
exports.SubscriptionCollection = require('./subscriptionCollection');
exports.PropertyCollection = require('./propertyCollection');
exports.ReportCollection = require('./reportCollection');
exports.RequestReportCollection = require('./requestReportCollection');
exports.TagCollection = require('./tagCollection');
exports.TagDescriptionCollection = require('./tagDescriptionCollection');
exports.UserIdentityCollection = require('./userIdentityCollection');
exports.ApiVersionSetCollection = require('./apiVersionSetCollection');