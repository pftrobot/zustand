export type CategoryType = "all" | "handout" | "workbook" | "textbook"

export interface filterType {
    title: string
    id: number
}

export interface defaultParams {
    category?: string
    q?: string
    filter?: string
    sort?: string
    paging?: string
    parsing?: string
}

const defaultParamValue = {
    category: "all",
    q: "",
    filter: "",
    sort: "sort1",
    paging: "1",
    parsing: "N",
}
