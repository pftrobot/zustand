import React from "react"
import { Button } from "antd/lib"
import styled from "styled-components"
import { defaultParams } from "@/modules/searchType.module"

export interface TestPagingProps {
    onClickPaging: (value: string) => void
    query: defaultParams
}

export const TestPaging: React.FC<TestPagingProps> = ({
    onClickPaging,
    query,
}) => {
    return (
        <PagingBox>
            <Button
                onClick={() => {
                    onClickPaging("prev")
                }}
            >
                이전
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("1")
                }}
                className={
                    !query?.paging || query?.paging === "1" ? "active" : ""
                }
            >
                1
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("2")
                }}
                className={query?.paging === "2" ? "active" : ""}
            >
                2
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("3")
                }}
                className={query?.paging === "3" ? "active" : ""}
            >
                3
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("4")
                }}
                className={query?.paging === "4" ? "active" : ""}
            >
                4
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("5")
                }}
                className={query?.paging === "5" ? "active" : ""}
            >
                5
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("6")
                }}
                className={query?.paging === "6" ? "active" : ""}
            >
                6
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("7")
                }}
                className={query?.paging === "7" ? "active" : ""}
            >
                7
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("8")
                }}
                className={query?.paging === "8" ? "active" : ""}
            >
                8
            </Button>
            <Button
                onClick={() => {
                    onClickPaging("next")
                }}
            >
                다음
            </Button>
        </PagingBox>
    )
}

const PagingBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0 24px 16px;

    button {
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
