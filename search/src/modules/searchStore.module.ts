import { create } from "zustand"
import { CategoryType, defaultParams, filterType } from "./searchType.module"

interface TestProductStatus {
    items: any[]
    query: defaultParams
    filters: filterType[]
    category: CategoryType
    keyword: string
    loadingTemp: string
    updateFilters: (filters: filterType[]) => void
    updateQuery: (query: defaultParams) => void
    updateCategory: (value: CategoryType) => void
    updateKeyword: (value: string) => void
    updateLoadingTemp: (value: string) => void
}

export const useSearchStore = create<TestProductStatus>((set) => ({
    items: [],
    query: {},
    filters: [],
    category: "all",
    keyword: "",
    loadingTemp: "loaded",
    updateFilters: (newFilters) => set({ filters: newFilters }),
    updateQuery: (newQuery) => set({ query: newQuery }),
    updateKeyword: (newKeyword) => set({ keyword: newKeyword }),
    updateCategory: (newCategory) => set({ category: newCategory }),
    updateLoadingTemp: (newLoadingTemp) => set({ loadingTemp: newLoadingTemp }),
}))

interface TestSortingStatus {
    dropdownOpen: boolean
    dropdownText: string
    updateDropdownOpen: (value: boolean) => void
    updateDropdownText: (text: string) => void
}

export const useSortingStore = create<TestSortingStatus>((set) => ({
    dropdownOpen: false,
    dropdownText: "all",
    updateDropdownOpen: (value) => set({ dropdownOpen: value }),
    updateDropdownText: (value) => set({ dropdownText: value }),
}))
