import React from "react"
import styled from "styled-components"
import { Button } from "antd/lib"
import { defaultParams } from "@/modules/searchType.module"

export interface TestCurrentFilterProps {
    currentFilters?: string
}

export type TestCurrentFilterStore = {}

export const TestCurrentFilter: React.FC<TestCurrentFilterProps> = ({
    currentFilters,
}) => {
    return (
        <SerachTestCurrentFilterWrap>
            {currentFilters}
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
