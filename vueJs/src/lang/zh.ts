export default {
  route: {
    dashboard: '首页',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    draggableDialog: '可拖拽对话框',
    draggableKanban: '可拖拽看板',
    draggableList: '可拖拽列表',
    draggableSelect: '可拖拽选择',
    charts: '图表',
    barChart: '柱状图表',
    lineChart: '折线图',
    mixedChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单 1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    table: '表格',
    dynamicTable: '动态表格',
    draggableTable: '可拖拽表格',
    inlineEditTable: '表格内编辑',
    complexTable: '综合表格',
    tab: '分栏',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: '导出 Zip',
    theme: '换肤',
    clipboard: '粘贴板',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心',
    tasks: '任务中心',
    admin: '管理页',
    users: '用户管理',
    roles: '角色管理',
    tenants: '租户管理',
    settings: '配置管理',
    apigateway: '网关管理',
    group: '路由分组',
    global: '全局配置',
    route: '路由配置',
    aggregateRoute: '聚合路由',
    identityServer: '身份认证服务器',
    clients: '客户端管理',
    apiresources: 'Api资源管理',
    identityresources: '身份资源管理'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    register: '注册',
    notAccount: '没有账户?',
    existsAccount: '已有账户?',
    forgotPassword: '忘记密码?',
    userLogin: '用户密码登录',
    phoneLogin: '手机免密登录',
    resetpassword: '重置密码',
    tenantName: '租户',
    username: '账号',
    password: '密码',
    phoneNumber: '手机号码',
    phoneVerifyCode: '手机验证码',
    sendVerifyCode: '发送验证码',
    afterSendVerifyCode: ' s后重新发送',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
    tokenExprition: '身份令牌已过期,请重新登录!',
    confirmLogout: '确认登出',
    relogin: '重新登录',
    cancel: '取消',
    tenantIsNotAvailable: '给定的租户不可用: {name}'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    createRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用 window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色',
    globalSetting: '公共设置',
    tenantSetting: '租户设置',
    userSetting: '用户设置',
    passwordSecurity: '密码安全',
    systemSetting: '系统配置',
    userAccount: '用户账户'
  },
  task: {
    title: '任务管理'
  },
  users: {
    queryFilter: '查询过滤:',
    filterString: '过滤字符',
    searchList: '搜索列表',
    createUser: '新增用户',
    userName: '用户账户',
    name: '用户名称',
    surname: '用户简称',
    email: '邮件地址',
    phoneNumber: '联系电话',
    lockoutEnd: '锁定时间',
    creationTime: '创建时间',
    operaActions: '操作方法',
    updateUser: '编辑用户',
    updateUserBy: '编辑用户  {name}',
    otherOpera: '更多操作',
    lockUser: '锁定用户',
    deleteUser: '删除用户',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteUser: '是否删除用户 {name} ?',
    userHasBeenDeleted: '用户 {name} 已删除!',
    twoFactorEnabled: '双因素认证',
    lockoutEnabled: '登录失败锁定',
    createUserSuccess: '用户 {name} 添加成功!',
    updateUserSuccess: '用户 {name} 修改成功!'
  },
  userProfile: {
    basic: '基本信息',
    security: '安全选项',
    roles: '用户角色',
    roleList: '角色列表',
    hasRoles: '已有角色',
    permission: '分配权限',
    password: '用户密码',
    confirmPassword: '确认用户密码',
    pleaseInputName: '请输入用户名称',
    pleaseInputUserName: '请输入用户登录账户',
    pleaseInputSurname: '请输入用户简称',
    pleaseInputPhoneNumber: '请输入联系方式',
    pleaseInputEmail: '请输入邮件地址',
    pleaseInputPassword: '请输入用户密码',
    pleaseConfirmPassword: '请再次输入用户密码'
  },
  roles: {
    refreshList: '刷新列表',
    id: '角色标识',
    name: '角色名称',
    type: '角色类型',
    system: '内置角色',
    custom: '用户定义',
    isDefault: '默认角色',
    isPublic: '公共角色',
    isPrivate: '私有角色',
    operaActions: '操作方法',
    updateRole: '编辑角色',
    deleteRole: '删除角色',
    createRole: '新建角色',
    permission: '分配权限',
    otherOpera: '更多操作',
    setDefault: '设为默认',
    unSetDefault: '取消默认',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteRole: '是否删除角色 {name} ?',
    roleHasBeenDeleted: '角色 {name} 已删除!',
    roleHasBeenSetDefault: '{name} 已设置为默认角色!',
    createRoleSuccess: '角色 {name} 添加成功!',
    pleaseInputRoleName: '请输入角色名称',
    roleNameIsRequired: '角色名称不能为空!'
  },
  operaActions: '操作方法',
  queryFilter: '查询过滤',
  filterString: '过滤字符',
  searchList: '查询列表',
  creationTime: '创建时间',
  successful: '提交成功',
  pleaseInputBy: '请输入{key}',
  pleaseSelectBy: '请选择{key}',
  none: '未定义',
  questingDeleteByMessage: '是否要删除{message}?',
  delNotRecoverData: '请注意,删除后不可恢复!',
  whetherDeleteData: '是否删除选择的记录 {name} ?',
  dataHasBeenDeleted: '选定的记录 {name} 已删除!',
  fieldLengthMustBeRange: '字段的长度必须在{min}到{max}之间!',
  enabled: '启用',
  disbled: '停用',
  lastModificationTime: '修改时间',
  apiGateWay: {
    createGroup: '新建分组',
    updateGroup: '编辑分组',
    updateGroupByApp: '编辑分组  {name}',
    deleteGroup: '删除分组',
    createGlobal: '新建配置',
    updateGlobal: '编辑配置',
    updateGlobalByApp: '编辑配置  {name}',
    deleteGlobal: '删除路由',
    createRoute: '新建路由',
    updateRoute: '编辑路由',
    updateRouteByApp: '编辑路由  {name}',
    deleteRoute: '删除路由',
    deleteRouteByName: '删除路由  {name}',
    deleteRouteSuccess: '路由 {name} 已删除!',
    groupName: '路由组名',
    pleaseInputGroupName: '请输入路由组名称',
    appId: '应用标识',
    pleaseInputAppId: '请输入应用标识',
    appName: '应用名称',
    pleaseInputAppName: '请输入应用名称',
    appIpAddress: '应用地址',
    description: '分组描述',
    isActive: '启用状态',
    active: '启用',
    dnActive: '禁用',
    basicOptions: '基础配置',
    routingForward: '路由转发',
    requestProcessing: '请求处理',
    httpOptions: 'Http选项',
    rateLimitOptions: '流量控制',
    authorization: '安全认证',
    qoSOptions: '服务质量',
    loadBalancerOptions: '负载均衡',
    serviceDiscovery: '服务发现',
    baseUrl: '访问路径',
    downstreamScheme: '下游协议',
    requestIdKey: '访问标识',
    maxConnectionsPerServer: '每台服务器最大连接数',
    useProxy: '使用代理',
    useTracing: '调用链追踪',
    allowAutoRedirect: '允许重定向',
    useCookieContainer: '使用Cookie容器',
    clientIdHeader: '客户端请求头',
    httpStatusCode: 'Http错误代码',
    quotaExceededMessage: '过载错误消息',
    rateLimitCounterPrefix: '速率限制器前缀',
    disableRateLimitHeaders: '禁用速率限制头',
    timeoutValue: '超时时间(ms)',
    durationOfBreak: '熔断时间(ms)',
    exceptionsAllowedBeforeBreaking: '允许的最大异常次数',
    loadBalancerType: '轮询方式',
    leastConnection: '总是空闲服务器',
    roundRobin: '服务器轮询',
    noLoadBalance: '发往首个服务器',
    loadBalancerKey: '轮询标识',
    loadBalancerExpiry: '到期时间',
    discoverType: '实例类型',
    discoverHost: '主机地址',
    discoverPort: '主机端口',
    discoverToken: '访问标识',
    configurationKey: '配置标识',
    pollingInterval: '轮询间隔',
    namespace: '命名空间',
    discoverScheme: '协议类型',
    downstreamHttpVersion: '下游服务版本',
    reRouteName: '路由名称',
    appIdHasRequired: '应用标识不能为空!',
    upstreamPathTemplate: '上游请求路径',
    upstreamHttpMethod: '上游请求方式',
    upstreamHost: '上游主机地址',
    downstreamHostAndPorts: '下游请求地址',
    downstreamPathTemplate: '下游请求路径',
    serviceName: '服务名称',
    serviceNamespace: '命名空间',
    addDownHost: '添加下游主机',
    priority: '优先级',
    downHostPortFormat: '输入格式: Ip地址:端口号',
    aggrefateKey: '聚合标识',
    downstreamHttpMethod: '下游请求方法',
    changeDownstreamPathTemplate: '下游路径声明转换',
    downstreamHeaderTransform: '添加下游响应标头',
    addHeadersToRequest: '添加请求标头转换',
    addClaimsToRequest: '添加请求声明转换',
    addQueriesToRequest: '添加查询参数转换',
    upstreamHeaderTransform: '添加上游请求标头',
    routeClaimsRequirement: '路由必要声明',
    delegatingHandlers: '委托处理程序',
    reRouteIsCaseSensitive: '忽略大小写',
    dangerousAcceptAnyServerCertificateValidator: '忽略SSL错误',
    enableRateLimiting: '启用流量控制',
    rateLimitCount: '最大请求数量',
    period: '速率限制时间',
    periodTimespan: '允许错开时间重试(s)',
    clientWhitelist: '客户端白名单',
    ipAllowedList: 'Ip白名单',
    ipBlockedList: 'Ip黑名单',
    authenticationProviderKey: '身份认证程序',
    allowedScopes: '允许认证范围',
    createAggregateRoute: '新建聚合',
    aggregateRouteName: '聚合名称',
    reRouteKeys: '路由标识列表',
    aggregateOptions: '聚合选项',
    routeKeysConfig: '路由配置',
    updateAggregateRoute: '编辑聚合',
    updateAggregateRouteByName: '编辑聚合  {name}',
    deleteAggregateRoute: '删除聚合',
    deleteAggregateRouteByName: '删除聚合  {name}',
    deleteAggregateRouteSuccess: '聚合路由 {name} 已删除!',
    createAggregateRouteKey: '新建聚合参数',
    deleteAggregateRouteConfig: '删除配置',
    deleteAggregateRouteConfigByKey: '删除路由配置  {key}',
    deleteAggregateRouteConfigSuccess: '路由配置 {key} 已删除!',
    createAggregateRouteConfigSuccess: '路由配置 {key} 已添加!',
    createAggregateRouteConfig: '新建路由配置',
    aggregateRouteKey: '路由标识',
    aggregateParameter: '聚合参数',
    aggregateJsonPath: 'Json路径'
  },
  identityServer: {
    otherOpera: '更多操作',
    enabled: '启用客户端',
    disbled: '停用客户端',
    clientStatus: '客户端状态',
    deleteClient: '删除客户端',
    updateClient: '编辑客户端',
    updateClientByName: '编辑客户端  {name}',
    deleteClientById: '是否要删除客户端: {id}',
    deleteClientSuccess: '客户端: {id} 已删除!',
    createClientSuccess: '客户端: {id} 已添加!',
    updateClientSuccess: '客户端: {id} 已修改!',
    clientClaim: '客户端声明',
    clientProperty: '客户端属性',
    clientSecret: '客户端密钥',
    clientPermission: '客户端权限',
    deleteSecret: '删除密钥',
    deleteSecretByType: '是否要删除客户端密钥: {type}',
    deleteSecretSuccess: '客户端密钥: {type} 已删除!',
    createSecretSuccess: '客户端密钥: {type} 已添加!',
    createSecret: '添加客户端密钥',
    deleteClaim: '删除声明',
    deleteClaimByType: '是否要删除客户端声明: {type}',
    deleteClaimSuccess: '客户端声明: {type} 已删除!',
    createClaimSuccess: '客户端声明: {type} 已添加!',
    createClaim: '添加客户端声明',
    deleteProperty: '删除属性',
    deleteClientPropertyByType: '是否要删除客户端属性: {key}',
    deleteClientPropertySuccess: '客户端属性: {key} 已删除!',
    createClientPropertySuccess: '客户端属性: {key} 已添加!',
    createClientProperty: '添加客户端属性',
    createClient: '添加客户端',
    clientId: '客户端标识',
    clientName: '客户端名称',
    description: '客户端说明',
    cloneClint: '克隆客户端',
    copyAllowedGrantType: '复制客户端授权类型',
    copyRedirectUri: '复制客户端重定向Uri',
    copyAllowedScope: '复制客户端作用域',
    copyClaim: '复制客户端声明',
    copyAllowedCorsOrigin: '复制客户端跨域来源',
    copyPostLogoutRedirectUri: '复制客户端注销重定向Uri',
    copyPropertie: '复制客户端属性',
    copyIdentityProviderRestriction: '复制身份提供程序限制',
    protocolType: '协议类型',
    requireClientSecret: '需要客户端密钥',
    requirePkce: '需要Pkce',
    allowPlainTextPkce: '允许纯文本Pkce',
    allowOfflineAccess: '允许离线访问',
    allowedScopes: '允许的作用域',
    redirectUris: '重定向Uri',
    allowedGrantTypes: '允许的授权类型',
    allowAccessTokensViaBrowser: '允许通过浏览器访问令牌',
    identityTokenLifetime: '身份令牌有效期(s)',
    accessTokenLifetime: '访问令牌有效期(s)',
    authorizationCodeLifetime: '授权码有效期(s)',
    absoluteRefreshTokenLifetime: '绝对刷新令牌有效期(s)',
    slidingRefreshTokenLifetime: '滚动刷新令牌有效期(s)',
    deviceCodeLifetime: '设备授权码有效期(s)',
    clientClaimsPrefix: '客户端声明前缀',
    basicOptions: '基本设置',
    frontChannelLogoutUri: '前端通道注销 Uri',
    frontChannelLogoutSessionRequired: '需要前端通道注销会话',
    backChannelLogoutUri: '后端通道退出 Uri',
    backChannelLogoutSessionRequired: '需要后端通道注销会话',
    enableLocalLogin: '启用本地登录',
    postLogoutRedirectUris: '注销重定向 Uri',
    identityProviderRestrictions: '身份提供程序限制',
    userSsoLifetime: '用户 SSO 生命周期',
    accessTokenType: '访问令牌类型',
    refreshTokenUsage: '刷新令牌使用情况',
    refreshTokenExpiration: '刷新令牌过期方式',
    allowedCorsOrigins: '允许跨域来源',
    updateAccessTokenClaimsOnRefresh: '刷新时更新访问令牌声明',
    includeJwtId: '包括 Jwt 标识',
    alwaysSendClientClaims: '始终发送客户端声明',
    alwaysIncludeUserClaimsInIdToken: '始终在标识令牌中包含用户声明',
    pairWiseSubjectSalt: '配对主体盐',
    requireConsent: '需要同意',
    allowRememberConsent: '允许记住同意',
    clientUri: '客户端 Uri',
    logoUri: '徽标 Uri',
    userCodeType: '用户代码类型',
    secretType: '密钥类型',
    secretValue: '密钥值',
    secretHashType: '哈希类型',
    hashOnlySharedSecret: '哈希类型仅适用于 SharedSecret 类型',
    secretDescription: '密钥说明',
    expiration: '过期日期',
    claimType: '声明类型',
    claimValue: '声明值',
    propertyKey: '属性名称',
    propertyValue: '属性值',
    createApiResource: '添加Api资源',
    updateApiResource: '编辑Api资源',
    updateApiResourceByName: '编辑Api资源  {name}',
    deleteApiResourceByName: '删除Api资源  {name}',
    createApiResourceSuccess: 'Api资源  {name} 已添加!',
    deleteApiResourceSuccess: 'Api资源  {name} 已删除!',
    updateApiResourceSuccess: 'Api资源  {name} 已修改!',
    createApiSecret: '添加Api密钥',
    deleteApiSecret: '删除Api密钥',
    deleteApiSecretByType: '删除Api密钥  {type}',
    createApiSecretSuccess: 'Api密钥  {type} 已添加!',
    deleteApiSecretSuccess: 'Api密钥  {type} 已删除!',
    apiResourceSecret: 'Api 密钥',
    createApiScope: '添加Api作用域',
    deleteApiScope: '删除Api作用域',
    deleteApiScopeByName: '删除Api作用域  {name}',
    createApiScopeSuccess: 'Api作用域  {name} 已添加!',
    deleteApiScopeSuccess: 'Api作用域  {name} 已删除!',
    apiResourceScope: 'Api 作用域',
    deleteApiResource: '删除资源',
    resourceName: '资源名称',
    resourceDisplayName: '显示名称',
    enabledResource: '启用资源',
    resourceStatus: '资源状态',
    resourceDescription: '资源说明',
    resourceUserClaims: '用户声明',
    apiScopeName: '名称',
    apiScopeDisplayName: '显示名称',
    apiScopeDescription: '描述',
    apiScopeRequired: '必须',
    apiScopeEmphasize: '强调',
    apiScopeShowInDiscoveryDocument: '在发现文档显示',
    createIdentityResource: '添加身份资源',
    updateIdentityResource: '编辑身份资源',
    identityResourceProperties: '资源属性',
    deleteIdentityResource: '删除资源',
    updateIdentityResourceByName: '编辑身份资源  {name}',
    deleteIdentityResourceByName: '删除身份资源  {name}',
    createIdentityResourceSuccess: '身份资源  {name} 已添加!',
    deleteIdentityResourceSuccess: '身份资源  {name} 已删除!',
    updateIdentityResourceSuccess: '身份资源  {name} 已修改!',
    identityResourceRequired: '必须',
    identityResourceEmphasize: '强调',
    identityResourceShowInDiscoveryDocument: '在发现文档显示',
    deleteIdentityPropertyByKey: '是否要删除身份资源属性: {key}',
    deleteIdentityPropertySuccess: '身份资源属性: {key} 已删除!',
    createIdentityPropertySuccess: '身份资源属性: {key} 已添加!',
    createIdentityProperty: '添加身份资源属性'
  },
  tenant: {
    createTenant: '创建租户',
    updateTenant: '编辑租户',
    deleteTenant: '删除租户',
    createTenantSuccess: '租户  {name} 已添加!',
    deleteTenantByName: '删除租户  {name}',
    deleteTenantSuccess: '租户  {name} 已删除!',
    tenantNameChanged: '租户名称  {name} 已变更!',
    id: '租户标识',
    name: '租户名称',
    changeTenantName: '变更租户名称',
    connectionOptions: '连接配置',
    adminEmailAddress: '管理员邮件',
    adminPassword: '管理员密码',
    connectionName: '连接名称',
    connectionString: '连接字符串',
    setTenantConnection: '设置连接',
    deleteConnection: '删除连接',
    setTenantConnectionSuccess: '租户连接  {name} 已添加!',
    deleteTenantConnectionName: '删除租户连接  {name}',
    deleteTenantConnectionSuccess: '租户连接  {name} 已删除!'
  },
  global: {
    name: '名称',
    displayName: '显示名称',
    description: '说明',
    operaActions: '操作方法',
    queryFilter: '查询过滤',
    filterString: '过滤字符',
    searchList: '查询列表',
    creationTime: '创建时间',
    successful: '提交成功',
    pleaseInputBy: '请输入{key}',
    pleaseSelectBy: '请选择{key}',
    none: '未定义',
    charLengthRange: '长度在 {min} 到 {max} 个字符!',
    questingDeleteByMessage: '是否要删除{message}?',
    delNotRecoverData: '请注意,删除后不可恢复!',
    whetherDeleteData: '是否删除选择的记录 {name} ?',
    dataHasBeenDeleted: '选定的记录 {name} 已删除!',
    fieldLengthMustBeRange: '字段的长度必须在{min}到{max}之间!',
    enabled: '启用',
    disbled: '停用',
    status: '状态',
    lastModificationTime: '修改时间',
    otherOpera: '更多操作',
    cancel: '取 消',
    confirm: '确 定',
    correctEmailAddress: '正确的邮件地址',
    correctPhoneNumber: '正确的手机号码',
    operatingFast: '您的操作过快,请稍后再试!'
  },
  messages: {
    noNotifications: '没有通知',
    noMessages: '没有消息'
  }
}
