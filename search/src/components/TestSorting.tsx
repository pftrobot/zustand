import React from "react"
import { Button, Checkbox, Dropdown, MenuProps } from "antd/lib"
import styled from "styled-components"
import { defaultParams, filterType } from "../modules/searchType.module"

export interface TestSortingProps {
    onClickParsing: (value: boolean) => void
    onClickSort: (value: string) => void
    onClickSelect: (value: string) => void
    onClickFilter: (value: number, checked: boolean) => void
    filters: filterType[]
    query?: defaultParams
}

export type TestSortingStore = {
    dropdownOpen: boolean
    dropdownText: string
    updateDropdownOpen: (value: boolean) => void
    updateDropdownText: (value: string) => void
}

export const TestSorting: React.FC<TestSortingProps> = ({
    onClickParsing,
    onClickSort,
    onClickSelect,
    onClickFilter,
    filters,
    query,
}) => {
    // const store = useLocalObservable<TestSortingStore>(() => ({
    //     dropdownOpen: false,
    //     dropdownText: "all",
    //     updateDropdownOpen(open) {
    //         this.dropdownOpen = open
    //     },
    //     updateDropdownText(text) {
    //         this.dropdownText = text
    //     },
    // }))

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        // if (e.key === "0") {
        //     store.updateDropdownOpen(false)
        // }
    }

    const handleOpenChange = (flag: boolean) => {
        // store.updateDropdownOpen(flag)
    }

    const selectItems: MenuProps["items"] = [
        {
            label: (
                <Button
                    onClick={() => {
                        // store.updateDropdownText("all")
                        // onClickSelect("all")
                    }}
                >
                    {/* {store.dropdownText} */}
                </Button>
            ),
            key: "all",
        },
        {
            label: (
                <Button onClick={() => onClickSelect("handout")}>
                    수업자료
                </Button>
            ),
            key: "handout",
        },
        {
            label: (
                <Button onClick={() => onClickSelect("textbook")}>
                    교과서
                </Button>
            ),
            key: "textbook",
        },
        {
            label: (
                <Button onClick={() => onClickSelect("workbook")}>
                    참고서
                </Button>
            ),
            key: "workbook",
        },
    ]

    const dropItems: MenuProps["items"] = filters.map((filter) => {
        return {
            label: (
                <Button
                    onClick={() => {
                        onClickFilter(filter.id, true)
                    }}
                >
                    {filter.title}
                </Button>
            ),
            key: filter.id,
        }
    })

    return (
        <SortingWrap>
            <SortingBox>
                <Checkbox
                    checked={query?.parsing === "Y"}
                    onChange={(e) => {
                        onClickParsing(e.target.checked)
                    }}
                >
                    편집가능
                </Checkbox>
                <div className="btn-box">
                    <Button
                        onClick={() => {
                            onClickSort("sort1")
                        }}
                        className={
                            !!!query?.sort || query?.sort === "sort1"
                                ? "active"
                                : ""
                        }
                    >
                        정렬1
                    </Button>
                    <Button
                        onClick={() => {
                            onClickSort("sort2")
                        }}
                        className={query?.sort === "sort2" ? "active" : ""}
                    >
                        정렬2
                    </Button>
                </div>
            </SortingBox>
            <DropdownArea>
                <DropBox>
                    <Dropdown
                        menu={{ items: selectItems }}
                        trigger={["click"]}
                        overlayClassName={"filter-select"}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            {query?.category ? query.category : "all"}
                        </a>
                    </Dropdown>
                </DropBox>
                <DropBox>
                    <Dropdown
                        menu={{
                            items: dropItems,
                            onClick: handleMenuClick,
                        }}
                        trigger={["click"]}
                        onOpenChange={handleOpenChange}
                        open={false}
                        // open={store.dropdownOpen}
                        overlayClassName={"filter-select filter"}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            안 닫히는 드롭다운
                        </a>
                    </Dropdown>
                </DropBox>
            </DropdownArea>
        </SortingWrap>
    )
}

export const SortingWrap = styled.div`
    padding: 0 24px;
`
export const SortingBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 16px 0;
    border-bottom: solid 1px #66c1cc;

    .ant-checkbox-wrapper {
        display: flex;
        align-content: center;
        padding-top: 4px;
    }

    .btn-box {
        display: flex;
        gap: 8px;

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
    }
`

export const DropdownArea = styled.div`
    display: flex;
    gap: 24px;
`
export const selectWidth = 160
export const DropBox = styled.div`
    min-width: ${selectWidth}px;
    margin: 24px 0;

    .ant-select {
        width: 100%;
    }

    .ant-dropdown-trigger {
        display: block;
        max-width: ${selectWidth}px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        padding: 8px 16px;
        background-color: #8dd88d;
        border-radius: 2px;
    }

    body:has(&) {
        .ant-dropdown.filter-select {
            padding-top: 0;
            max-width: ${selectWidth}px;

            &.filter {
                border: solid 2px aquamarine;
            }

            .ant-dropdown-menu {
                margin-top: -2px;

                .ant-dropdown-menu-item {
                    display: block;
                    width: 100%;
                    padding: 0;

                    .ant-dropdown-menu-title-content {
                        display: block;

                        .ant-btn {
                            display: block;
                            width: 100%;
                            border: none;
                        }
                    }
                }
            }
        }
    }
`
