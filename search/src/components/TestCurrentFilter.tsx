import React from "react"
import styled from "styled-components"
import { Button } from "antd/lib"
import {
    defaultParams,
    filterType,
    filterGroupListType,
    selectedFilterType,
} from "@/modules/searchType.module"

export interface TestCurrentFilterProps {
    currentFilters?: defaultParams
    filters: filterGroupListType[]
    selectedFilters: selectedFilterType[]
    baseLicenses: filterType[]
    resetFilter: () => void
    deleteFilter: (item: selectedFilterType) => void
}

export type TestCurrentFilterStore = {}

export const TestCurrentFilter: React.FC<TestCurrentFilterProps> = ({
    currentFilters,
    filters,
    selectedFilters,
    baseLicenses,
    resetFilter,
    deleteFilter,
}) => {
    return (
        <SerachTestCurrentFilterWrap>
            <div className={"current-area"}>
                {selectedFilters.map((item) => {
                    const key = item.key
                    const value = item.value
                    // let filterName = ''
                    let filterTitle = ""

                    if (!currentFilters) return

                    switch (key) {
                        case "license":
                            // filterName = '라이선스'
                            baseLicenses.filter((license) => {
                                if (
                                    license.id.toString() ===
                                    currentFilters[key]
                                ) {
                                    filterTitle = license.title
                                }
                            })
                            break
                        case "parsing":
                            // filterName = '편집가능 여부'
                            filterTitle = "편집가능"
                            if (currentFilters[key] === "N") return
                            break
                        default:
                            filters.filter((filter) => {
                                if (Object.keys(filter)[0] === key) {
                                    // filterName = filter[key].title
                                    filter[key].content.filter((content) => {
                                        if (content.id.toString() === value) {
                                            filterTitle += content.title
                                        }
                                    })
                                }
                            })
                            break
                    }

                    return (
                        <Button
                            onClick={() => {
                                deleteFilter(item)
                            }}
                            className={"current-btn"}
                        >
                            {filterTitle}
                        </Button>
                    )
                })}
            </div>
            <Button className={"reset-btn"} onClick={resetFilter}>
                초기화
            </Button>
        </SerachTestCurrentFilterWrap>
    )
}

export const SerachTestCurrentFilterWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 16px;
    margin: 24px;
    background-color: #efefef;

    .current-area {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .current-btn {
        }
    }
    .reset-btn {
    }
`
