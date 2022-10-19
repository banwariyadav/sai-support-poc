// string and num constants
export enum userRoles {
  analyst,
  poweranalyst,
  client
};
export type UserRoleType = userRoles;
export const allRoles = [
  userRoles.analyst,
  userRoles.poweranalyst,
  userRoles.client
];

/**
 * NOTE: NEW ITEMS MUST BE ADDED TO THE END OF connectors ONLY!
 * ANY CHANGES WILL BREAK connectrsToReq (constants/valuesByType.ts)
 */
export enum setupTabs {
  brand,
  media,
  team
}
export type SetupTabType = setupTabs;

export enum toggleStates {
  left,
  right,
}
export type ToggleStateType = toggleStates;


export enum connectorStates {
  empty,
  add,
  connected,
  disabled,
  ActiveAndLoaded,
  multipleActive,
  multipleInactive,
  loaded,
  required,
  inactive,
  activeAndInactive
}

// global filters
export enum globalFilters {
  // Countries,
  Regions,
  Channels,
  DeviceTypes,
  Users,
  DateRanges,
  ComparisonPeriods,
  CreativeMetrics,
  MediaPartners,
  MediaCampaigns,
  // PartnerMetrics,
  ContentPerformanceTypes,
  // SearchCampaignMetrics,
  // SearchKeywordMetrics,
  SearchMetrics,
  // VideoPerformanceMetrics,
  SocialPerformanceMetrics
}
export type GlobalFiltersType = globalFilters;

export enum globalFiltersQuery {
  Range,
  CompareWith,
  Device,
  Channel,
  Region,
  From,
  To
}
export type GlobalFiltersQueryType = globalFiltersQuery;

export enum filtersDate {
  lastWeek,
  lastMonth,
  lastSeven,
  lastThirty,
}
export type FilterDateType = filtersDate;

export enum filtersChannel {
  channel,
  direct,
  organicSearch,
  social,
  email,
  affiliates,
  referall,
  paidSearch,
  otherAdvertising,
  display,
}
export type FilterChannelType = filtersChannel;

export enum filtersDevice {
  all,
  desktop,
  tablet,
  mobile,
}
export type FilterDeviceType = filtersDevice;

export enum filtersRegion {
  latinAmerica,
  asiaPacific,
  europe,
  greaterChina,
  middleEastAfrica,
  northAmerica,
}
export type FilterRegionType = filtersRegion;

export enum filtersComparison {
  vsLastYear,
  vsLastQuarter,
}
export type FilterComparisonType = filtersComparison;

export enum months {
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  sep,
  oct,
  nov,
  dec,
}
export type MonthType = months;

export type ConnectorStateType = connectorStates;
