import React from "react"
import { Button, Checkbox } from "antd/lib"
import styled from "styled-components"
import {
    CategoryType,
    defaultParams,
    filterType,
} from "@/modules/searchType.module"

export interface TestFilterProps {
    onClickCategory: (category: CategoryType) => void
    onClickFilter: (value: number, checked: boolean) => void
    filters: filterType[]
    query: defaultParams
}

export const TestFilter: React.FC<TestFilterProps> = ({
    onClickCategory,
    onClickFilter,
    filters,
    query,
}) => {
    return (
        <FilterWrap>
            <CategoryWrap>
                <Button
                    onClick={() => {
                        onClickCategory("handout")
                    }}
                    className={
                        // !!!query?.category || query?.category === 'handout' ? 'active' : ''
                        !!query?.category
                            ? query?.category === "handout"
                                ? "active"
                                : ""
                            : ""
                    }
                >
                    수업자료
                </Button>
                <Button
                    onClick={() => {
                        onClickCategory("textbook")
                    }}
                    className={
                        !!query?.category
                            ? query?.category === "textbook"
                                ? "active"
                                : ""
                            : ""
                    }
                >
                    교과서
                </Button>
                <Button
                    onClick={() => {
                        onClickCategory("workbook")
                    }}
                    className={query?.category === "workbook" ? "active" : ""}
                >
                    참고서
                </Button>
            </CategoryWrap>
            {filters?.map((filter) => {
                return (
                    <Checkbox
                        checked={query?.filter
                            ?.split(",")
                            .includes(filter.id.toString())}
                        onChange={(e) => {
                            onClickFilter(filter.id, e.target.checked)
                        }}
                    >
                        {filter.title}
                    </Checkbox>
                )
            })}
        </FilterWrap>
    )
}

const FilterWrap = styled.div`
    flex: 1;
    padding: 12px 16px;
    background-color: #f7ffeb;

    .ant-checkbox-wrapper {
        display: flex;
        padding: 8px 0;
        margin-left: 0;
    }
`
const CategoryWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 16px 0;

    button {
        display: block;
        width: 100px;

        &.active {
            color: #fff;
            font-weight: bold;
            border: solid 1px darkblue;
            background-color: darkblue;

            @media (hover: hover) {
                &:hover {
                    color: #fff;
                    border: solid 1px darkblue;
                }
            }
        }
    }
`
