import type { DEFAULT_OPERATIONS, RESOURCES } from './constants';

export type DefaultOperations = (typeof DEFAULT_OPERATIONS)[number];
export type Resource = keyof typeof RESOURCES;

export type ResourceScope<
	R extends Resource,
	Operation extends string = DefaultOperations,
> = `${R}:${Operation}`;

export type WildcardScope = `${Resource}:*` | '*';

export type AnnotationTagScope = ResourceScope<'annotationTag'>;
export type AuditLogsScope = ResourceScope<'auditLogs', 'manage'>;
export type BannerScope = ResourceScope<'banner', 'dismiss'>;
export type CommunityScope = ResourceScope<'community', 'register'>;
export type CommunityPackageScope = ResourceScope<
	'communityPackage',
	'install' | 'uninstall' | 'update' | 'list' | 'manage'
>;
export type CredentialScope = ResourceScope<'credential', DefaultOperations | 'share' | 'move'>;
export type ExternalSecretScope = ResourceScope<'externalSecret', 'list' | 'use'>;
export type ExternalSecretProviderScope = ResourceScope<
	'externalSecretsProvider',
	DefaultOperations | 'sync'
>;
export type EventBusDestinationScope = ResourceScope<
	'eventBusDestination',
	DefaultOperations | 'test'
>;
export type LdapScope = ResourceScope<'ldap', 'manage' | 'sync'>;
export type LicenseScope = ResourceScope<'license', 'manage'>;
export type LogStreamingScope = ResourceScope<'logStreaming', 'manage'>;
export type OrchestrationScope = ResourceScope<'orchestration', 'read' | 'list'>;
export type ProjectScope = ResourceScope<'project'>;
export type SamlScope = ResourceScope<'saml', 'manage'>;
export type SecurityAuditScope = ResourceScope<'securityAudit', 'generate'>;
export type SourceControlScope = ResourceScope<'sourceControl', 'pull' | 'push' | 'manage'>;
export type TagScope = ResourceScope<'tag'>;
export type UserScope = ResourceScope<'user', DefaultOperations | 'resetPassword' | 'changeRole'>;
export type VariableScope = ResourceScope<'variable'>;
export type WorkersViewScope = ResourceScope<'workersView', 'manage'>;
export type WorkflowScope = ResourceScope<
	'workflow',
	DefaultOperations | 'share' | 'execute' | 'move'
>;

export type Scope =
	| AnnotationTagScope
	| AuditLogsScope
	| BannerScope
	| CommunityScope
	| CommunityPackageScope
	| CredentialScope
	| ExternalSecretProviderScope
	| ExternalSecretScope
	| EventBusDestinationScope
	| LdapScope
	| LicenseScope
	| LogStreamingScope
	| OrchestrationScope
	| ProjectScope
	| SamlScope
	| SecurityAuditScope
	| SourceControlScope
	| TagScope
	| UserScope
	| VariableScope
	| WorkersViewScope
	| WorkflowScope;

export type ScopeLevel = 'global' | 'project' | 'resource';
export type GetScopeLevel<T extends ScopeLevel> = Record<T, Scope[]>;
export type GlobalScopes = GetScopeLevel<'global'>;
export type ProjectScopes = GetScopeLevel<'project'>;
export type ResourceScopes = GetScopeLevel<'resource'>;
export type ScopeLevels = GlobalScopes & (ProjectScopes | (ProjectScopes & ResourceScopes));

export type MaskLevel = 'sharing';
export type GetMaskLevel<T extends MaskLevel> = Record<T, Scope[]>;
export type SharingMasks = GetMaskLevel<'sharing'>;
export type MaskLevels = SharingMasks;

export type ScopeMode = 'oneOf' | 'allOf';
export type ScopeOptions = { mode: ScopeMode };
