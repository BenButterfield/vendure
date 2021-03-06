// tslint:disable
// Generated in 2019-02-26T12:18:47+01:00
export type Maybe<T> = T | null;

export interface OrderListOptions {
    skip?: Maybe<number>;

    take?: Maybe<number>;

    sort?: Maybe<OrderSortParameter>;

    filter?: Maybe<OrderFilterParameter>;
}

export interface OrderSortParameter {
    id?: Maybe<SortOrder>;

    createdAt?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;

    code?: Maybe<SortOrder>;

    state?: Maybe<SortOrder>;

    subTotalBeforeTax?: Maybe<SortOrder>;

    subTotal?: Maybe<SortOrder>;

    shipping?: Maybe<SortOrder>;

    totalBeforeTax?: Maybe<SortOrder>;

    total?: Maybe<SortOrder>;
}

export interface OrderFilterParameter {
    createdAt?: Maybe<DateOperators>;

    updatedAt?: Maybe<DateOperators>;

    code?: Maybe<StringOperators>;

    state?: Maybe<StringOperators>;

    active?: Maybe<BooleanOperators>;

    subTotalBeforeTax?: Maybe<NumberOperators>;

    subTotal?: Maybe<NumberOperators>;

    currencyCode?: Maybe<StringOperators>;

    shipping?: Maybe<NumberOperators>;

    totalBeforeTax?: Maybe<NumberOperators>;

    total?: Maybe<NumberOperators>;
}

export interface DateOperators {
    eq?: Maybe<DateTime>;

    before?: Maybe<DateTime>;

    after?: Maybe<DateTime>;

    between?: Maybe<DateRange>;
}

export interface DateRange {
    start: DateTime;

    end: DateTime;
}

export interface StringOperators {
    eq?: Maybe<string>;

    contains?: Maybe<string>;
}

export interface BooleanOperators {
    eq?: Maybe<boolean>;
}

export interface NumberOperators {
    eq?: Maybe<number>;

    lt?: Maybe<number>;

    lte?: Maybe<number>;

    gt?: Maybe<number>;

    gte?: Maybe<number>;

    between?: Maybe<NumberRange>;
}

export interface NumberRange {
    start: number;

    end: number;
}

export interface ProductCategoryListOptions {
    skip?: Maybe<number>;

    take?: Maybe<number>;

    sort?: Maybe<ProductCategorySortParameter>;

    filter?: Maybe<ProductCategoryFilterParameter>;
}

export interface ProductCategorySortParameter {
    id?: Maybe<SortOrder>;

    createdAt?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    position?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;
}

export interface ProductCategoryFilterParameter {
    createdAt?: Maybe<DateOperators>;

    updatedAt?: Maybe<DateOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    position?: Maybe<NumberOperators>;

    description?: Maybe<StringOperators>;
}

export interface ProductListOptions {
    skip?: Maybe<number>;

    take?: Maybe<number>;

    sort?: Maybe<ProductSortParameter>;

    filter?: Maybe<ProductFilterParameter>;
}

export interface ProductSortParameter {
    id?: Maybe<SortOrder>;

    createdAt?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    slug?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;
}

export interface ProductFilterParameter {
    createdAt?: Maybe<DateOperators>;

    updatedAt?: Maybe<DateOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    slug?: Maybe<StringOperators>;

    description?: Maybe<StringOperators>;
}

export interface SearchInput {
    term?: Maybe<string>;

    facetIds?: Maybe<string[]>;

    groupByProduct?: Maybe<boolean>;

    take?: Maybe<number>;

    skip?: Maybe<number>;

    sort?: Maybe<SearchResultSortParameter>;
}

export interface SearchResultSortParameter {
    name?: Maybe<SortOrder>;

    price?: Maybe<SortOrder>;
}

export interface CreateAddressInput {
    fullName?: Maybe<string>;

    company?: Maybe<string>;

    streetLine1: string;

    streetLine2?: Maybe<string>;

    city?: Maybe<string>;

    province?: Maybe<string>;

    postalCode?: Maybe<string>;

    countryCode: string;

    phoneNumber?: Maybe<string>;

    defaultShippingAddress?: Maybe<boolean>;

    defaultBillingAddress?: Maybe<boolean>;

    customFields?: Maybe<Json>;
}

export interface PaymentInput {
    method: string;

    metadata: Json;
}

export interface CreateCustomerInput {
    title?: Maybe<string>;

    firstName: string;

    lastName: string;

    phoneNumber?: Maybe<string>;

    emailAddress: string;

    customFields?: Maybe<Json>;
}

export interface RegisterCustomerInput {
    emailAddress: string;

    title?: Maybe<string>;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    password?: Maybe<string>;
}

export interface UpdateCustomerInput {
    title?: Maybe<string>;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    emailAddress?: Maybe<string>;

    customFields?: Maybe<Json>;
}

export interface UpdateAddressInput {
    id: string;

    fullName?: Maybe<string>;

    company?: Maybe<string>;

    streetLine1?: Maybe<string>;

    streetLine2?: Maybe<string>;

    city?: Maybe<string>;

    province?: Maybe<string>;

    postalCode?: Maybe<string>;

    countryCode?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    defaultShippingAddress?: Maybe<boolean>;

    defaultBillingAddress?: Maybe<boolean>;

    customFields?: Maybe<Json>;
}

export interface AdjustmentOperationInput {
    code: string;

    arguments: ConfigArgInput[];
}

export interface ConfigArgInput {
    name: string;

    value: string;
}
/** ISO 639-1 language code */
export enum LanguageCode {
    aa = 'aa',
    ab = 'ab',
    af = 'af',
    ak = 'ak',
    sq = 'sq',
    am = 'am',
    ar = 'ar',
    an = 'an',
    hy = 'hy',
    as = 'as',
    av = 'av',
    ae = 'ae',
    ay = 'ay',
    az = 'az',
    ba = 'ba',
    bm = 'bm',
    eu = 'eu',
    be = 'be',
    bn = 'bn',
    bh = 'bh',
    bi = 'bi',
    bs = 'bs',
    br = 'br',
    bg = 'bg',
    my = 'my',
    ca = 'ca',
    ch = 'ch',
    ce = 'ce',
    zh = 'zh',
    cu = 'cu',
    cv = 'cv',
    kw = 'kw',
    co = 'co',
    cr = 'cr',
    cs = 'cs',
    da = 'da',
    dv = 'dv',
    nl = 'nl',
    dz = 'dz',
    en = 'en',
    eo = 'eo',
    et = 'et',
    ee = 'ee',
    fo = 'fo',
    fj = 'fj',
    fi = 'fi',
    fr = 'fr',
    fy = 'fy',
    ff = 'ff',
    ka = 'ka',
    de = 'de',
    gd = 'gd',
    ga = 'ga',
    gl = 'gl',
    gv = 'gv',
    el = 'el',
    gn = 'gn',
    gu = 'gu',
    ht = 'ht',
    ha = 'ha',
    he = 'he',
    hz = 'hz',
    hi = 'hi',
    ho = 'ho',
    hr = 'hr',
    hu = 'hu',
    ig = 'ig',
    is = 'is',
    io = 'io',
    ii = 'ii',
    iu = 'iu',
    ie = 'ie',
    ia = 'ia',
    id = 'id',
    ik = 'ik',
    it = 'it',
    jv = 'jv',
    ja = 'ja',
    kl = 'kl',
    kn = 'kn',
    ks = 'ks',
    kr = 'kr',
    kk = 'kk',
    km = 'km',
    ki = 'ki',
    rw = 'rw',
    ky = 'ky',
    kv = 'kv',
    kg = 'kg',
    ko = 'ko',
    kj = 'kj',
    ku = 'ku',
    lo = 'lo',
    la = 'la',
    lv = 'lv',
    li = 'li',
    ln = 'ln',
    lt = 'lt',
    lb = 'lb',
    lu = 'lu',
    lg = 'lg',
    mk = 'mk',
    mh = 'mh',
    ml = 'ml',
    mi = 'mi',
    mr = 'mr',
    ms = 'ms',
    mg = 'mg',
    mt = 'mt',
    mn = 'mn',
    na = 'na',
    nv = 'nv',
    nr = 'nr',
    nd = 'nd',
    ng = 'ng',
    ne = 'ne',
    nn = 'nn',
    nb = 'nb',
    no = 'no',
    ny = 'ny',
    oc = 'oc',
    oj = 'oj',
    or = 'or',
    om = 'om',
    os = 'os',
    pa = 'pa',
    fa = 'fa',
    pi = 'pi',
    pl = 'pl',
    pt = 'pt',
    ps = 'ps',
    qu = 'qu',
    rm = 'rm',
    ro = 'ro',
    rn = 'rn',
    ru = 'ru',
    sg = 'sg',
    sa = 'sa',
    si = 'si',
    sk = 'sk',
    sl = 'sl',
    se = 'se',
    sm = 'sm',
    sn = 'sn',
    sd = 'sd',
    so = 'so',
    st = 'st',
    es = 'es',
    sc = 'sc',
    sr = 'sr',
    ss = 'ss',
    su = 'su',
    sw = 'sw',
    sv = 'sv',
    ty = 'ty',
    ta = 'ta',
    tt = 'tt',
    te = 'te',
    tg = 'tg',
    tl = 'tl',
    th = 'th',
    bo = 'bo',
    ti = 'ti',
    to = 'to',
    tn = 'tn',
    ts = 'ts',
    tk = 'tk',
    tr = 'tr',
    tw = 'tw',
    ug = 'ug',
    uk = 'uk',
    ur = 'ur',
    uz = 'uz',
    ve = 've',
    vi = 'vi',
    vo = 'vo',
    cy = 'cy',
    wa = 'wa',
    wo = 'wo',
    xh = 'xh',
    yi = 'yi',
    yo = 'yo',
    za = 'za',
    zu = 'zu',
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum AssetType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    BINARY = 'BINARY',
}
/** ISO 4217 currency code */
export enum CurrencyCode {
    AED = 'AED',
    AFN = 'AFN',
    ALL = 'ALL',
    AMD = 'AMD',
    ANG = 'ANG',
    AOA = 'AOA',
    ARS = 'ARS',
    AUD = 'AUD',
    AWG = 'AWG',
    AZN = 'AZN',
    BAM = 'BAM',
    BBD = 'BBD',
    BDT = 'BDT',
    BGN = 'BGN',
    BHD = 'BHD',
    BIF = 'BIF',
    BMD = 'BMD',
    BND = 'BND',
    BOB = 'BOB',
    BRL = 'BRL',
    BSD = 'BSD',
    BTN = 'BTN',
    BWP = 'BWP',
    BYN = 'BYN',
    BZD = 'BZD',
    CAD = 'CAD',
    CHE = 'CHE',
    CHW = 'CHW',
    CLP = 'CLP',
    CNY = 'CNY',
    COP = 'COP',
    CRC = 'CRC',
    CUC = 'CUC',
    CUP = 'CUP',
    CVE = 'CVE',
    CZK = 'CZK',
    DJF = 'DJF',
    DKK = 'DKK',
    DOP = 'DOP',
    DZD = 'DZD',
    EGP = 'EGP',
    ERN = 'ERN',
    ETB = 'ETB',
    EUR = 'EUR',
    FJD = 'FJD',
    FKP = 'FKP',
    GBP = 'GBP',
    GEL = 'GEL',
    GHS = 'GHS',
    GIP = 'GIP',
    GMD = 'GMD',
    GNF = 'GNF',
    GTQ = 'GTQ',
    GYD = 'GYD',
    HKD = 'HKD',
    HNL = 'HNL',
    HRK = 'HRK',
    HTG = 'HTG',
    HUF = 'HUF',
    IDR = 'IDR',
    ILS = 'ILS',
    INR = 'INR',
    IQD = 'IQD',
    IRR = 'IRR',
    ISK = 'ISK',
    JMD = 'JMD',
    JOD = 'JOD',
    JPY = 'JPY',
    KES = 'KES',
    KGS = 'KGS',
    KHR = 'KHR',
    KMF = 'KMF',
    KPW = 'KPW',
    KRW = 'KRW',
    KWD = 'KWD',
    KYD = 'KYD',
    KZT = 'KZT',
    LAK = 'LAK',
    LBP = 'LBP',
    LKR = 'LKR',
    LRD = 'LRD',
    LSL = 'LSL',
    LYD = 'LYD',
    MAD = 'MAD',
    MDL = 'MDL',
    MGA = 'MGA',
    MKD = 'MKD',
    MMK = 'MMK',
    MNT = 'MNT',
    MOP = 'MOP',
    MRU = 'MRU',
    MUR = 'MUR',
    MVR = 'MVR',
    MWK = 'MWK',
    MXN = 'MXN',
    MYR = 'MYR',
    MZN = 'MZN',
    NAD = 'NAD',
    NGN = 'NGN',
    NIO = 'NIO',
    NOK = 'NOK',
    NPR = 'NPR',
    NZD = 'NZD',
    OMR = 'OMR',
    PAB = 'PAB',
    PEN = 'PEN',
    PGK = 'PGK',
    PHP = 'PHP',
    PKR = 'PKR',
    PLN = 'PLN',
    PYG = 'PYG',
    QAR = 'QAR',
    RON = 'RON',
    RSD = 'RSD',
    RUB = 'RUB',
    RWF = 'RWF',
    SAR = 'SAR',
    SBD = 'SBD',
    SCR = 'SCR',
    SDG = 'SDG',
    SEK = 'SEK',
    SGD = 'SGD',
    SHP = 'SHP',
    SLL = 'SLL',
    SOS = 'SOS',
    SRD = 'SRD',
    SSP = 'SSP',
    STN = 'STN',
    SVC = 'SVC',
    SYP = 'SYP',
    SZL = 'SZL',
    THB = 'THB',
    TJS = 'TJS',
    TMT = 'TMT',
    TND = 'TND',
    TOP = 'TOP',
    TRY = 'TRY',
    TTD = 'TTD',
    TWD = 'TWD',
    TZS = 'TZS',
    UAH = 'UAH',
    UGX = 'UGX',
    USD = 'USD',
    UYU = 'UYU',
    UZS = 'UZS',
    VES = 'VES',
    VND = 'VND',
    VUV = 'VUV',
    WST = 'WST',
    XAF = 'XAF',
    XCD = 'XCD',
    XOF = 'XOF',
    XPF = 'XPF',
    YER = 'YER',
    ZAR = 'ZAR',
    ZMW = 'ZMW',
    ZWL = 'ZWL',
}

export enum AdjustmentType {
    TAX = 'TAX',
    PROMOTION = 'PROMOTION',
    SHIPPING = 'SHIPPING',
    REFUND = 'REFUND',
    TAX_REFUND = 'TAX_REFUND',
    PROMOTION_REFUND = 'PROMOTION_REFUND',
    SHIPPING_REFUND = 'SHIPPING_REFUND',
}
/** Permissions for administrators and customers */
export enum Permission {
    Authenticated = 'Authenticated',
    SuperAdmin = 'SuperAdmin',
    Owner = 'Owner',
    Public = 'Public',
    CreateCatalog = 'CreateCatalog',
    ReadCatalog = 'ReadCatalog',
    UpdateCatalog = 'UpdateCatalog',
    DeleteCatalog = 'DeleteCatalog',
    CreateCustomer = 'CreateCustomer',
    ReadCustomer = 'ReadCustomer',
    UpdateCustomer = 'UpdateCustomer',
    DeleteCustomer = 'DeleteCustomer',
    CreateAdministrator = 'CreateAdministrator',
    ReadAdministrator = 'ReadAdministrator',
    UpdateAdministrator = 'UpdateAdministrator',
    DeleteAdministrator = 'DeleteAdministrator',
    CreateOrder = 'CreateOrder',
    ReadOrder = 'ReadOrder',
    UpdateOrder = 'UpdateOrder',
    DeleteOrder = 'DeleteOrder',
    CreateSettings = 'CreateSettings',
    ReadSettings = 'ReadSettings',
    UpdateSettings = 'UpdateSettings',
    DeleteSettings = 'DeleteSettings',
}

export enum DeletionResult {
    DELETED = 'DELETED',
    NOT_DELETED = 'NOT_DELETED',
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

export interface Node {
    id: string;
}

export interface PaginatedList {
    items: Node[];

    totalItems: number;
}

// ====================================================
// Types
// ====================================================

export interface Query {
    activeCustomer?: Maybe<Customer>;

    activeOrder?: Maybe<Order>;

    availableCountries: Country[];

    eligibleShippingMethods: ShippingMethodQuote[];

    me?: Maybe<CurrentUser>;

    nextOrderStates: string[];

    order?: Maybe<Order>;

    orderByCode?: Maybe<Order>;

    productCategories: ProductCategoryList;

    productCategory?: Maybe<ProductCategory>;

    product?: Maybe<Product>;

    products: ProductList;

    search: SearchResponse;

    temp__?: Maybe<boolean>;
}

export interface Customer extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    title?: Maybe<string>;

    firstName: string;

    lastName: string;

    phoneNumber?: Maybe<string>;

    emailAddress: string;

    addresses?: Maybe<Address[]>;

    orders: OrderList;

    user?: Maybe<User>;

    customFields?: Maybe<Json>;
}

export interface Address extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    fullName?: Maybe<string>;

    company?: Maybe<string>;

    streetLine1: string;

    streetLine2?: Maybe<string>;

    city?: Maybe<string>;

    province?: Maybe<string>;

    postalCode?: Maybe<string>;

    country: Country;

    phoneNumber?: Maybe<string>;

    defaultShippingAddress?: Maybe<boolean>;

    defaultBillingAddress?: Maybe<boolean>;

    customFields?: Maybe<Json>;
}

export interface Country extends Node {
    id: string;

    languageCode: LanguageCode;

    code: string;

    name: string;

    enabled: boolean;

    translations: CountryTranslation[];
}

export interface CountryTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface OrderList extends PaginatedList {
    items: Order[];

    totalItems: number;
}

export interface Order extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    code: string;

    state: string;

    active: boolean;

    customer?: Maybe<Customer>;

    shippingAddress?: Maybe<OrderAddress>;

    billingAddress?: Maybe<OrderAddress>;

    lines: OrderLine[];

    adjustments: Adjustment[];

    payments?: Maybe<Payment[]>;

    subTotalBeforeTax: number;

    subTotal: number;

    currencyCode: CurrencyCode;

    shipping: number;

    shippingMethod?: Maybe<ShippingMethod>;

    totalBeforeTax: number;

    total: number;
}

export interface OrderAddress {
    fullName?: Maybe<string>;

    company?: Maybe<string>;

    streetLine1?: Maybe<string>;

    streetLine2?: Maybe<string>;

    city?: Maybe<string>;

    province?: Maybe<string>;

    postalCode?: Maybe<string>;

    country?: Maybe<string>;

    countryCode?: Maybe<string>;

    phoneNumber?: Maybe<string>;
}

export interface OrderLine extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    productVariant: ProductVariant;

    featuredAsset?: Maybe<Asset>;

    unitPrice: number;

    unitPriceWithTax: number;

    quantity: number;

    items: OrderItem[];

    totalPrice: number;

    adjustments: Adjustment[];

    order: Order;
}

export interface ProductVariant extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    sku: string;

    name: string;

    featuredAsset?: Maybe<Asset>;

    assets: Asset[];

    price: number;

    currencyCode: CurrencyCode;

    priceIncludesTax: boolean;

    priceWithTax: number;

    taxRateApplied: TaxRate;

    taxCategory: TaxCategory;

    options: ProductOption[];

    facetValues: FacetValue[];

    translations: ProductVariantTranslation[];

    customFields?: Maybe<Json>;
}

export interface Asset extends Node {
    id: string;

    name: string;

    type: AssetType;

    fileSize: number;

    mimeType: string;

    source: string;

    preview: string;
}

export interface TaxRate extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    name: string;

    enabled: boolean;

    value: number;

    category: TaxCategory;

    zone: Zone;

    customerGroup?: Maybe<CustomerGroup>;
}

export interface TaxCategory extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    name: string;
}

export interface Zone extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    name: string;

    members: Country[];
}

export interface CustomerGroup extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    name: string;
}

export interface ProductOption extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode?: Maybe<LanguageCode>;

    code?: Maybe<string>;

    name?: Maybe<string>;

    translations: ProductOptionTranslation[];

    customFields?: Maybe<Json>;
}

export interface ProductOptionTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface FacetValue extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    facet: Facet;

    name: string;

    code: string;

    translations: FacetValueTranslation[];

    customFields?: Maybe<Json>;
}

export interface Facet extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;

    code: string;

    values: FacetValue[];

    translations: FacetTranslation[];

    customFields?: Maybe<Json>;
}

export interface FacetTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface FacetValueTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface ProductVariantTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface OrderItem extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    unitPrice: number;

    unitPriceWithTax: number;

    unitPriceIncludesTax: boolean;

    taxRate: number;

    adjustments: Adjustment[];
}

export interface Adjustment {
    adjustmentSource: string;

    type: AdjustmentType;

    description: string;

    amount: number;
}

export interface Payment extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    method: string;

    amount: number;

    state: string;

    transactionId?: Maybe<string>;

    metadata?: Maybe<Json>;
}

export interface ShippingMethod extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    code: string;

    description: string;

    checker: AdjustmentOperation;

    calculator: AdjustmentOperation;
}

export interface AdjustmentOperation {
    code: string;

    args: ConfigArg[];

    description: string;
}

export interface ConfigArg {
    name: string;

    type: string;

    value?: Maybe<string>;
}

export interface User extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    identifier: string;

    verified: boolean;

    roles: Role[];

    lastLogin?: Maybe<string>;

    customFields?: Maybe<Json>;
}

export interface Role extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    code: string;

    description: string;

    permissions: Permission[];

    channels: Channel[];
}

export interface Channel extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    code: string;

    token: string;

    defaultTaxZone?: Maybe<Zone>;

    defaultShippingZone?: Maybe<Zone>;

    defaultLanguageCode: LanguageCode;

    currencyCode: CurrencyCode;

    pricesIncludeTax: boolean;
}

export interface ShippingMethodQuote {
    id: string;

    price: number;

    description: string;
}

export interface CurrentUser {
    id: string;

    identifier: string;

    channelTokens: string[];
}

export interface ProductCategoryList extends PaginatedList {
    items: ProductCategory[];

    totalItems: number;
}

export interface ProductCategory extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode?: Maybe<LanguageCode>;

    name: string;

    position: number;

    description: string;

    featuredAsset?: Maybe<Asset>;

    assets: Asset[];

    parent: ProductCategory;

    children?: Maybe<ProductCategory[]>;

    facetValues: FacetValue[];

    descendantFacetValues: FacetValue[];

    ancestorFacetValues: FacetValue[];

    translations: ProductCategoryTranslation[];

    customFields?: Maybe<Json>;
}

export interface ProductCategoryTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;

    description: string;
}

export interface Product extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;

    slug: string;

    description: string;

    featuredAsset?: Maybe<Asset>;

    assets: Asset[];

    variants: ProductVariant[];

    optionGroups: ProductOptionGroup[];

    facetValues: FacetValue[];

    translations: ProductTranslation[];

    customFields?: Maybe<Json>;
}

export interface ProductOptionGroup extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    code: string;

    name: string;

    options: ProductOption[];

    translations: ProductOptionGroupTranslation[];

    customFields?: Maybe<Json>;
}

export interface ProductOptionGroupTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;
}

export interface ProductTranslation {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    languageCode: LanguageCode;

    name: string;

    slug: string;

    description: string;
}

export interface ProductList extends PaginatedList {
    items: Product[];

    totalItems: number;
}

export interface SearchResponse {
    items: SearchResult[];

    totalItems: number;

    facetValues: FacetValue[];
}

export interface SearchResult {
    sku: string;

    slug: string;

    productId: string;

    productName: string;

    productPreview: string;

    productVariantId: string;

    productVariantName: string;

    productVariantPreview: string;

    price: number;

    currencyCode: CurrencyCode;

    description: string;

    facetIds: string[];

    facetValueIds: string[];

    score: number;
}

export interface Mutation {
    addItemToOrder?: Maybe<Order>;

    removeItemFromOrder?: Maybe<Order>;

    adjustItemQuantity?: Maybe<Order>;

    transitionOrderToState?: Maybe<Order>;

    setOrderShippingAddress?: Maybe<Order>;

    setOrderShippingMethod?: Maybe<Order>;

    addPaymentToOrder?: Maybe<Order>;

    setCustomerForOrder?: Maybe<Order>;
    /** Create a new Customer Address */
    createCustomerAddress: Address;

    login: LoginResult;

    logout: boolean;
    /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
    refreshCustomerVerification: boolean;
    /** Register a Customer account with the given credentials */
    registerCustomerAccount: boolean;
    /** Update an existing Customer */
    updateCustomer: Customer;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /** Delete an existing Address */
    deleteCustomerAddress: boolean;
    /** Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true. */
    verifyCustomerAccount: LoginResult;
    /** Update the password of the active Customer */
    updateCustomerPassword?: Maybe<boolean>;
    /** Requests a password reset email to be sent */
    requestPasswordReset?: Maybe<boolean>;
    /** Resets a Customer's password based on the provided token */
    resetPassword: LoginResult;
}

export interface LoginResult {
    user: CurrentUser;
}

export interface AdjustmentOperations {
    conditions: AdjustmentOperation[];

    actions: AdjustmentOperation[];
}

export interface Administrator extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    firstName: string;

    lastName: string;

    emailAddress: string;

    user: User;
}

export interface AdministratorList extends PaginatedList {
    items: Administrator[];

    totalItems: number;
}

export interface AssetList extends PaginatedList {
    items: Asset[];

    totalItems: number;
}

export interface CountryList extends PaginatedList {
    items: Country[];

    totalItems: number;
}

export interface CustomerList extends PaginatedList {
    items: Customer[];

    totalItems: number;
}

export interface DeletionResponse {
    result: DeletionResult;

    message?: Maybe<string>;
}

export interface FacetList extends PaginatedList {
    items: Facet[];

    totalItems: number;
}

export interface GlobalSettings {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    availableLanguages: LanguageCode[];

    serverConfig: ServerConfig;

    customFields?: Maybe<Json>;
}

export interface ServerConfig {
    customFields?: Maybe<Json>;
}

export interface ImportInfo {
    errors?: Maybe<string[]>;

    processed: number;

    imported: number;
}

export interface PaymentMethod extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    code: string;

    enabled: boolean;

    configArgs: ConfigArg[];
}

export interface Promotion extends Node {
    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    name: string;

    enabled: boolean;

    conditions: AdjustmentOperation[];

    actions: AdjustmentOperation[];
}

export interface PromotionList extends PaginatedList {
    items: Promotion[];

    totalItems: number;
}

export interface RoleList extends PaginatedList {
    items: Role[];

    totalItems: number;
}

export interface SearchReindexResponse {
    success: boolean;

    timeTaken: number;

    indexedItemCount: number;
}

export interface ShippingMethodList extends PaginatedList {
    items: ShippingMethod[];

    totalItems: number;
}

export interface TaxRateList extends PaginatedList {
    items: TaxRate[];

    totalItems: number;
}

// ====================================================
// Arguments
// ====================================================

export interface OrderQueryArgs {
    id: string;
}
export interface OrderByCodeQueryArgs {
    code: string;
}
export interface ProductCategoriesQueryArgs {
    languageCode?: Maybe<LanguageCode>;

    options?: Maybe<ProductCategoryListOptions>;
}
export interface ProductCategoryQueryArgs {
    id: string;

    languageCode?: Maybe<LanguageCode>;
}
export interface ProductQueryArgs {
    id: string;

    languageCode?: Maybe<LanguageCode>;
}
export interface ProductsQueryArgs {
    languageCode?: Maybe<LanguageCode>;

    options?: Maybe<ProductListOptions>;
}
export interface SearchQueryArgs {
    input: SearchInput;
}
export interface OrdersCustomerArgs {
    options?: Maybe<OrderListOptions>;
}
export interface AddItemToOrderMutationArgs {
    productVariantId: string;

    quantity: number;
}
export interface RemoveItemFromOrderMutationArgs {
    orderItemId: string;
}
export interface AdjustItemQuantityMutationArgs {
    orderItemId: string;

    quantity: number;
}
export interface TransitionOrderToStateMutationArgs {
    state: string;
}
export interface SetOrderShippingAddressMutationArgs {
    input: CreateAddressInput;
}
export interface SetOrderShippingMethodMutationArgs {
    shippingMethodId: string;
}
export interface AddPaymentToOrderMutationArgs {
    input: PaymentInput;
}
export interface SetCustomerForOrderMutationArgs {
    input: CreateCustomerInput;
}
export interface CreateCustomerAddressMutationArgs {
    input: CreateAddressInput;
}
export interface LoginMutationArgs {
    username: string;

    password: string;

    rememberMe?: Maybe<boolean>;
}
export interface RefreshCustomerVerificationMutationArgs {
    emailAddress: string;
}
export interface RegisterCustomerAccountMutationArgs {
    input: RegisterCustomerInput;
}
export interface UpdateCustomerMutationArgs {
    input: UpdateCustomerInput;
}
export interface UpdateCustomerAddressMutationArgs {
    input: UpdateAddressInput;
}
export interface DeleteCustomerAddressMutationArgs {
    id: string;
}
export interface VerifyCustomerAccountMutationArgs {
    token: string;

    password: string;
}
export interface UpdateCustomerPasswordMutationArgs {
    currentPassword: string;

    newPassword: string;
}
export interface RequestPasswordResetMutationArgs {
    emailAddress: string;
}
export interface ResetPasswordMutationArgs {
    token: string;

    password: string;
}
