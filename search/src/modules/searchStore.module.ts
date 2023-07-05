import {
    CategoryType,
    defaultParams,
    filterGroupListType,
    filterType,
    selectedFilterType,
} from "./searchType.module"

export type TestProductStatus = {
    items: any[]
    query: defaultParams
    filters: filterGroupListType[]
    selectedFilters: selectedFilterType[]
    baseLicenses: filterType[]
    category: CategoryType
    keyword: string
    prevKeyword: string
    prevBaseLicense: number
    loadingTemp: string
    updateFilters: (filters: filterGroupListType[]) => void
    updateSelectedFilters: (filters: selectedFilterType[]) => void
    updateBaseLicenses: (licenses: filterType[]) => void
    updateQuery: (query: defaultParams) => void
    updateCategory: (value: string) => void
    updateKeyword: (value: string) => void
    updatePrevKeyword: (value: string) => void
    updatePrevBaseLicense: (value: number) => void
    updateLoadingTemp: (value: string) => void
}
