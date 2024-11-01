/* eslint-disable no-use-before-define */
export type CategoryNameEnum = 'Sony' | '智能手錶保護貼';

export type Product = {
    code: string;
    name?: string;
    url: string;
    description: string;
    purchasable: boolean;
    stock: Stock;
    numberOfReviews: number;
    summary: string;
    price?: Price;
    baseProduct: string;
    images?: Image[];
    categories: Category[];
    potentialPromotions?: PotentialPromotion[];
    variantOptions: VariantOption[];
    score: number;
    brandName: BrandName;
    storeCode: string;
    storeCodeOriginal: string;
    storeName: string;
    storeType: StoreType;
    storeTypeDisplay: StoreTypeDisplay;
    storeRating: number;
    chineseLocaleActive: boolean;
    deliveryModeName: DeliveryModeName;
    deliveryModeCode: DeliveryModeCode;
    packingSpec: PackingSpec;
    countryOfOrigin: CountryOfOrigin;
    numberOfColors?: number;
    storeTC: string;
    promotionPrice?: Price;
    labels: Label[];
    loyaltyPoint: string;
    priceList: Price[];
    colors: any[];
    promotionText: string;
    promotionStyle: PromotionStyle;
    invisible: boolean;
    savedPrice?: Price[];
    productKeyword: string;
    primaryCatCode: PrimaryCatCode;
    isFlashSale: boolean;
    isEcoupon: boolean;
    numberOfVariants: number;
    isStockNotified: boolean;
    urgent: boolean;
    purchaseOption: number;
    reservable: boolean;
    quantity: number;
    userMax: number;
    store: Store;
    deliveryLabel: DeliveryLabel;
    includeRemovalService: boolean;
    isInsurance: boolean;
    packingLength: number;
    packingHeight: number;
    packingDepth: number;
};

export type Code = 'inStock' | 'stockNotifiable';

export type StockLevelStatus = {
    code: Code;
    type: 'StockLevelStatus';
};

export type Stock = {
    stockLevelStatus?: StockLevelStatus;
    stockLevel?: number;
    consignmentWarehouse: boolean;
    forceInStock: boolean;
};

export type Format = 'product' | 'styleSwatch';

export type Image = {
    imageType: 'PRIMARY' | null;
    format: Format | null;
    url: string;
    altText: null | string;
    galleryIndex: null;
    width: null;
    hoverImageUrl: null;
};

export type SwatchColorStyle = {
    name: string;
    rgbCode: null;
    icon: Image;
};

export type QueryQuery = {
    value: string;
    filterQueries: any[];
    searchQueryContext: null;
};

export type TopValueQuery = {
    url: string;
    query: QueryQuery;
};

export type Value = {
    code: string;
    name: string;
    count: number;
    query: TopValueQuery;
    selected: boolean;
    swatchColorStyle: SwatchColorStyle | null;
    childValues: Value[] | null;
    isPartofCategoryFacet: boolean;
};

export type Pagination = {
    pageSize: number;
    currentPage: number;
    sort: string;
    numberOfPages: number;
    totalNumberOfResults: number;
};

export type BrandName = 'SONY' | 'AMAZINGthing';

export type Category = {
    code: PrimaryCatCode;
    name: CategoryNameEnum;
    url: null;
    description: null;
    image: null;
    parentCategoryName: null;
    sequence: number;
};

export type PrimaryCatCode = 'AA32550525001' | 'AA32552520001';

export type CountryOfOrigin = '泰國' | '中國';

export type DeliveryLabel = {
    deliveryMode: DeliveryMode;
    name: DeliveryLabelName;
    bgColor: BgColor;
};

export type BgColor = '#FFEBEE' | '#E1F5FE';

export type DeliveryMode = 'standard-delivery' | 'merchant-delivery';

export type DeliveryLabelName = '2日集運' | '商戶派送';

export type DeliveryModeCode = 'hktv-standard-delivery' | 'merchant-delivery';

export type DeliveryModeName = 'HKTV Standard Delivery' | 'Merchant Delivery';

export type Label = {
    type: LabelType;
    name: DescriptionEnum;
    amount: number | null;
    loyaltyPoint: null | string;
};

export type DescriptionEnum = 'Fixed price Discount (normal)' | '0% Rewards';

export type LabelType = 'OFFER' | 'REBATE';

export type PackingSpec = '' | '香港行貨';

export type PotentialPromotion = {
    code: string;
    promotionType: 'HktvProductPercentageDiscountPromotion';
    startDate: string;
    endDate: string;
    description: string;
    priority: number;
    percentage: number;
    percentageDiscountRow: PercentageDiscountRow[];
    creationTime: string;
};

export type PercentageDiscountRow = {
    discount: number;
    customerType: 'NORMAL';
    priority: number;
    description: DescriptionEnum;
};

export type Price = {
    currencyIso: 'HKD';
    value: number;
    priceType: PriceType;
    formattedValue: string;
    minQuantity: null;
    maxQuantity: null;
    membershipLevel: 'NORMAL' | null;
};

export type PriceType = 'BUY' | 'DISCOUNT';

export type PromotionStyle = '' | 'RED';

export type Store = {
    code: string;
    name: string;
};

export type StoreType = 'frequent_delivery_store' | 'trustworthy_store' | '';

export type StoreTypeDisplay = '假期無休店' | '信譽優良店' | '';

export type VariantOption = {
    code: string;
    stock: Stock;
    url: string;
    priceData: Price | null;
    variantOptionQualifiers: null;
    color: string;
    mainImage: Image;
    swatchImage: Image;
    discountPrice: Price | null;
    loyalityPoints: string;
    promotionText: string;
    promotionStyle: PromotionStyle;
    productVideoString: string;
    packingSpec: PackingSpec;
    countryOfOrigin: CountryOfOrigin;
    fixedDeliveryDate: null;
    labels: Label[];
    potentialPromotions: PotentialPromotion[] | null;
    thresholdPromotion: null;
    bundlePromotion: null;
    priceList: Price[];
    recommendedSellingPrice: null;
    savedPrice: Price[] | null;
    perfectPartnerPromotion: null;
    buyMoreSaveMore: null;
};

export type PromotionBanner = {
    alt: string;
    imageUrl: string;
    iconUrl: null;
    category: PrimaryCatCode;
    backgroundColor: string;
    promoTitle: string;
    promoDetails: string;
    tandcLink: string;
    displayIcon: boolean;
    bannerUrl: string;
    mabsRefId: string;
    tandCLink: string;
};

export type Sort = {
    code: string;
    name: string;
    selected: boolean;
};

export type Brand = {
    code: string;
    name: string;
    priority: number;
    category: boolean;
    multiSelect: boolean;
    visible: boolean;
    topValues: Value[] | null;
    values: Value[] | null;
    removeRefinementQuery: null;
};

export type Facets = {
    color: Brand;
    size: Brand;
    price: Brand;
    store: Brand;
    vipFilter: Brand;
    countryOfOrigin: Brand;
    category: Brand;
    brand: Brand;
};

export type ProductData = {
    products: Product[];
    pagination: Pagination;
    sorts: Sort[];
    facets: Facets;
    wishList: any[];
    promotionBanners: PromotionBanner[];
    categoryName: CategoryNameEnum;
    zoneName: string;
    advertisingProducts: null;
};
