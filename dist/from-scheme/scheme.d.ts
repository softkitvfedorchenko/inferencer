declare const _default: {
    openapi: string;
    paths: {
        "/api/platform/v1/auth/signup": {
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "201": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    "409": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    allOf: ({
                                        $ref: string;
                                        properties?: undefined;
                                    } | {
                                        properties: {
                                            status: {
                                                type: string;
                                                default: number;
                                            };
                                        };
                                        $ref?: undefined;
                                    })[];
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/tenant-signup": {
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "201": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    "409": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    allOf: ({
                                        $ref: string;
                                        properties?: undefined;
                                    } | {
                                        properties: {
                                            status: {
                                                type: string;
                                                default: number;
                                            };
                                        };
                                        $ref?: undefined;
                                    })[];
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/approve-signup": {
            post: {
                operationId: string;
                summary: string;
                description: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/signin": {
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/sso/saml/login": {
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/sso/saml/ac": {
            post: {
                operationId: string;
                parameters: never[];
                responses: {
                    "200": {
                        description: string;
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/refresh-access-token": {
            post: {
                operationId: string;
                parameters: never[];
                responses: {
                    "200": {
                        description: string;
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/auth/saml/sso/metadata": {
            get: {
                operationId: string;
                parameters: {
                    name: string;
                    required: boolean;
                    in: string;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/v1/roles": {
            get: {
                operationId: string;
                parameters: ({
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    schema: {
                        type: string;
                        items?: undefined;
                    };
                } | {
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    schema: {
                        type: string;
                        items: {
                            type: string;
                            enum?: undefined;
                        };
                    };
                } | {
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    schema: {
                        type: string;
                        items: {
                            type: string;
                            enum: string[];
                        };
                    };
                })[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    allOf: ({
                                        $ref: string;
                                        properties?: undefined;
                                    } | {
                                        properties: {
                                            data: {
                                                type: string;
                                                items: {
                                                    $ref: string;
                                                };
                                            };
                                            meta: {
                                                properties: {
                                                    select: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                    filter: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                oneOf: ({
                                                                    type: string;
                                                                    items?: undefined;
                                                                } | {
                                                                    type: string;
                                                                    items: {
                                                                        type: string;
                                                                    };
                                                                })[];
                                                            };
                                                            name: {
                                                                oneOf: ({
                                                                    type: string;
                                                                    items?: undefined;
                                                                } | {
                                                                    type: string;
                                                                    items: {
                                                                        type: string;
                                                                    };
                                                                })[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        $ref?: undefined;
                                    })[];
                                };
                            };
                        };
                    };
                };
                tags: string[];
                security: {
                    bearer: never[];
                }[];
            };
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "201": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                tags: string[];
                security: {
                    bearer: never[];
                }[];
            };
        };
        "/api/platform/v1/roles/{id}": {
            get: {
                operationId: string;
                parameters: {
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    example: string;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                tags: string[];
                security: {
                    bearer: never[];
                }[];
            };
            put: {
                operationId: string;
                parameters: {
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    example: string;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                tags: string[];
                security: {
                    bearer: never[];
                }[];
            };
            delete: {
                operationId: string;
                parameters: ({
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    example: string;
                    schema: {
                        type: string;
                        minimum?: undefined;
                    };
                } | {
                    name: string;
                    required: boolean;
                    in: string;
                    description: string;
                    example: string;
                    schema: {
                        minimum: number;
                        type: string;
                    };
                })[];
                responses: {
                    "204": {
                        description: string;
                    };
                };
                tags: string[];
                security: {
                    bearer: never[];
                }[];
            };
        };
        "/api/platform/v1/tenants/configuration/saml": {
            post: {
                operationId: string;
                parameters: never[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/api/platform/health": {
            get: {
                operationId: string;
                parameters: never[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: string;
                                    properties: {
                                        status: {
                                            type: string;
                                            example: string;
                                        };
                                        info: {
                                            type: string;
                                            example: {
                                                database: {
                                                    status: string;
                                                };
                                            };
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                            nullable: boolean;
                                        };
                                        error: {
                                            type: string;
                                            example: {};
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                            nullable: boolean;
                                        };
                                        details: {
                                            type: string;
                                            example: {
                                                database: {
                                                    status: string;
                                                };
                                            };
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    "503": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: string;
                                    properties: {
                                        status: {
                                            type: string;
                                            example: string;
                                        };
                                        info: {
                                            type: string;
                                            example: {
                                                database: {
                                                    status: string;
                                                };
                                            };
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                            nullable: boolean;
                                        };
                                        error: {
                                            type: string;
                                            example: {
                                                redis: {
                                                    status: string;
                                                    message: string;
                                                };
                                            };
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                            nullable: boolean;
                                        };
                                        details: {
                                            type: string;
                                            example: {
                                                database: {
                                                    status: string;
                                                };
                                                redis: {
                                                    status: string;
                                                    message: string;
                                                };
                                            };
                                            additionalProperties: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                    };
                                                };
                                                additionalProperties: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
    };
    info: {
        title: string;
        description: string;
        version: string;
        contact: {
            name: string;
            url: string;
            email: string;
        };
    };
    tags: never[];
    servers: {
        url: string;
        description: string;
    }[];
    components: {
        securitySchemes: {
            bearer: {
                scheme: string;
                bearerFormat: string;
                type: string;
            };
        };
        schemas: {
            ErrorResponse: {
                type: string;
                properties: {
                    type: {
                        type: string;
                        description: string;
                    };
                    title: {
                        type: string;
                        description: string;
                    };
                    status: {
                        type: string;
                        description: string;
                    };
                    detail: {
                        type: string;
                        description: string;
                    };
                    data: {
                        type: string;
                        description: string;
                    };
                    instance: {
                        type: string;
                        description: string;
                    };
                    errorCode: {
                        type: string;
                        description: string;
                    };
                };
                required: string[];
            };
            SignUpByEmailRequest: {
                type: string;
                properties: {
                    repeatedPassword: {
                        type: string;
                        description: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                };
                required: string[];
            };
            SignUpByEmailResponseDTO: {
                type: string;
                properties: {
                    message: {
                        type: string;
                    };
                    approvalId: {
                        type: string;
                        description: string;
                    };
                };
                required: string[];
            };
            SignUpByEmailWithTenantCreationRequest: {
                type: string;
                properties: {
                    companyName: {
                        type: string;
                    };
                    companyIdentifier: {
                        type: string;
                    };
                    repeatedPassword: {
                        type: string;
                        description: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                };
                required: string[];
            };
            ApproveSignUpRequest: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    code: {
                        type: string;
                    };
                };
                required: string[];
            };
            SignInRequest: {
                type: string;
                properties: {
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                };
                required: string[];
            };
            SignInResponseDTO: {
                type: string;
                properties: {
                    message: {
                        type: string;
                    };
                    accessToken: {
                        type: string;
                    };
                    refreshToken: {
                        type: string;
                    };
                };
                required: string[];
            };
            InitiateSamlLoginRequest: {
                type: string;
                properties: {
                    redirectUrl: {
                        type: string;
                    };
                    samlConfigurationId: {
                        type: string;
                    };
                };
                required: string[];
            };
            PaginatedMetaDocumented: {
                type: string;
                properties: {
                    itemsPerPage: {
                        type: string;
                        title: string;
                    };
                    totalItems: {
                        type: string;
                        title: string;
                    };
                    currentPage: {
                        type: string;
                        title: string;
                    };
                    totalPages: {
                        type: string;
                        title: string;
                    };
                    sortBy: {
                        type: string;
                        title: string;
                        items: {
                            type: string;
                            items: {
                                oneOf: ({
                                    type: string;
                                    enum?: undefined;
                                } | {
                                    type: string;
                                    enum: string[];
                                })[];
                            };
                        };
                    };
                    searchBy: {
                        title: string;
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    search: {
                        type: string;
                        title: string;
                    };
                    select: {
                        title: string;
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    filter: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
            };
            PaginatedLinksDocumented: {
                type: string;
                properties: {
                    first: {
                        type: string;
                        title: string;
                    };
                    previous: {
                        type: string;
                        title: string;
                    };
                    current: {
                        type: string;
                        title: string;
                    };
                    next: {
                        type: string;
                        title: string;
                    };
                    last: {
                        type: string;
                        title: string;
                    };
                };
            };
            PaginatedDocumented: {
                type: string;
                properties: {
                    data: {
                        title: string;
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    meta: {
                        title: string;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                    links: {
                        title: string;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                };
                required: string[];
            };
            UserRoleWithoutPermission: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    roleType: {
                        enum: string[];
                        type: string;
                    };
                    tenantId: {
                        type: string;
                    };
                };
                required: string[];
            };
            CreateUserRole: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                };
                required: string[];
            };
            PermissionCategory: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    permissions: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
                required: string[];
            };
            Permission: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    action: {
                        type: string;
                        description: string;
                    };
                    permissionCategoryId: {
                        type: string;
                    };
                    permissionCategory: {
                        nullable: boolean;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                };
                required: string[];
            };
            UserRole: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    roleType: {
                        type: string;
                        enum: string[];
                    };
                    permissions: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    tenantId: {
                        type: string;
                    };
                    tenant: {
                        nullable: boolean;
                        description: string;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                };
                required: string[];
            };
            UserTenantAccount: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    tenantId: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    userProfileId: {
                        type: string;
                    };
                    userStatus: {
                        type: string;
                        enum: string[];
                    };
                    roles: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    userProfile: {
                        $ref: string;
                    };
                    tenant: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            UserProfile: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                    userTenantsAccounts: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
                required: string[];
            };
            SAMLConfiguration: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    tenantId: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    entryPoint: {
                        type: string;
                    };
                    certificate: {
                        type: string;
                    };
                    enabled: {
                        type: string;
                    };
                    tenant: {
                        nullable: boolean;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                };
                required: string[];
            };
            Tenant: {
                type: string;
                properties: {
                    createdAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    updatedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    deletedAt: {
                        format: string;
                        type: string;
                        description: string;
                    };
                    version: {
                        type: string;
                        description: string;
                    };
                    id: {
                        type: string;
                    };
                    tenantFriendlyIdentifier: {
                        type: string;
                    };
                    tenantName: {
                        type: string;
                    };
                    tenantStatus: {
                        type: string;
                        enum: string[];
                    };
                    ownerId: {
                        type: string;
                    };
                    owner: {
                        $ref: string;
                    };
                    samlConfigurations: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    tenantUsersAccount: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
                required: string[];
            };
            UpdateUserRole: {
                type: string;
                properties: {
                    version: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tenant: {
                        nullable: boolean;
                        description: string;
                        allOf: {
                            $ref: string;
                        }[];
                    };
                };
                required: string[];
            };
            IdpMappingDto: {
                type: string;
                properties: {
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    email: {
                        type: string;
                    };
                    role: {
                        type: string;
                    };
                };
                required: string[];
            };
            SetupSamlConfiguration: {
                type: string;
                properties: {
                    entryPoint: {
                        type: string;
                    };
                    certificate: {
                        type: string;
                    };
                    fieldsMapping: {
                        $ref: string;
                    };
                    enabled: {
                        type: string;
                    };
                };
                required: string[];
            };
            SetupSamlConfigurationResponseDTO: {
                type: string;
                properties: {
                    message: {
                        type: string;
                    };
                    id: {
                        type: string;
                    };
                };
                required: string[];
            };
        };
    };
};
export default _default;
//# sourceMappingURL=scheme.d.ts.map