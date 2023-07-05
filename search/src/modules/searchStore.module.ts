import { create } from "zustand"
import {
    CategoryType,
    defaultParams,
    filterGroupListType,
    filterType,
    selectedFilterType,
} from "./searchType.module"

interface TestProductStatus {
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
    updateCategory: (value: CategoryType) => void
    updateKeyword: (value: string) => void
    updatePrevKeyword: (value: string) => void
    updatePrevBaseLicense: (value: number) => void
    updateLoadingTemp: (value: string) => void
}

export const useSearchStore = create<TestProductStatus>((set) => ({
    items: [],
    query: {},
    filters: [],
    selectedFilters: [],
    baseLicenses: [],
    category: "all",
    keyword: "",
    prevKeyword: "",
    prevBaseLicense: -1,
    loadingTemp: "loaded",
    updateFilters: (newFilters) => set({ filters: newFilters }),
    updateBaseLicenses: (newLicenses) => set({ baseLicenses: newLicenses }),
    updatePrevBaseLicense: (value) => set({ prevBaseLicense: value }),
    updateSelectedFilters: (newSelectedFilters) =>
        set({ selectedFilters: newSelectedFilters }),
    updateQuery: (newQuery) => set({ query: newQuery }),
    updateKeyword: (newKeyword) => set({ keyword: newKeyword }),
    updatePrevKeyword: (value) => set({ prevKeyword: value }),
    updateCategory: (newCategory) => set({ category: newCategory }),
    updateLoadingTemp: (newLoadingTemp) => set({ loadingTemp: newLoadingTemp }),
}))
