export type CategoryType = "all" | "handout" | "workbook" | "textbook"

export interface filterType {
    title: string
    id: number
}

export interface filterGroupType {
    title: string
    content: filterType[]
}

export interface filterGroupListType {
    [key: string]: filterGroupType
}

export interface selectedFilterType {
    [key: string]: string
    value: string
}

export interface defaultParams {
    category?: string
    q?: string
    license?: string
    filter?: string
    brand?: string
    unit?: string
    type?: string
    sort?: string
    paging?: string
    parsing?: string
}

const defaultParamValue = {
    category: "all",
    q: "",
    license: "",
    filter: "",
    sort: "sort1",
    paging: "1",
    parsing: "N",
}
