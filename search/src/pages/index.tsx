import * as React from "react"
import { useEffect } from "react"
import styled, { StyleSheetManager } from "styled-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Button, Input, MenuProps, Modal, Select } from "antd/lib"
import { TestFilter } from "@/components/TestFilter"
import { TestCurrentFilter } from "@/components/TestCurrentFilter"
import { TestSorting } from "@/components/TestSorting"
import { useSearchStore } from "@/modules/searchStore.module"
import { testFilterFactory } from "@/components/TestFilterFactory"
import { TestPaging } from "@/components/TestPaging"

export type CategoryType = "all" | "handout" | "workbook" | "textbook"

export interface filterType {
    title: string
    id: number
}

export interface defaultParams {
    category?: CategoryType
    q?: string
    filter?: string
    sort?: string
    paging?: string
    parsing?: string
}

export type TestProductStatus = {
    query: defaultParams
    filters: filterType[]
    category: CategoryType
    keyword: string
    loadingTemp: string
    updateFilters: (filters: filterType[]) => void
    updateQuery: (query: defaultParams) => void
    updateCategory: (value: string) => void
    updateKeyword: (value: string) => void
    updateLoadingTemp: (value: string) => void
}

const defaultParamValue = {
    category: "all",
    q: "",
    filter: "",
    sort: "sort1",
    paging: "1",
    parsing: "N",
}

const TestProductShowNextPage: NextPage<{}> = ({}) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const router = useRouter()
    const { query } = router
    const store = useSearchStore((state) => state)
    const updateFilters = useSearchStore((state) => state.actions.updateFilters)
    const updateQuery = useSearchStore((state) => state.actions.updateQuery)
    const updateKeyword = useSearchStore((state) => state.actions.updateKeyword)
    const updateCategory = useSearchStore(
        (state) => state.actions.updateCategory
    )
    const updateLoadingTemp = useSearchStore(
        (state) => state.actions.updateLoadingTemp
    )

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // 상태값 업데이트
    useEffect(() => {
        const newQuery: defaultParams = { ...query }
        // Api 전송용 query
        const sendQuery: defaultParams = generateQuery(query)
        console.log("::: api 전송용 query : ", sendQuery)
        updateLoadingTemp("loading")
        new Promise((res) => {
            updateQuery(newQuery)
            updateFilters(testFilterFactory(7))
            setTimeout(() => {
                // @ts-ignore
                res()
            }, 1000)
        }).then(() => {
            newQuery.q && updateKeyword(newQuery.q)
            updateLoadingTemp("")
        })
    }, [query])

    // url 생성
    const generateUrl = (query: any) => {
        let path = "/?"

        if (!query) return path

        Object.keys(query).forEach((key) => {
            query[key] && (path += key + "=" + query[key] + "&")
        })

        return path
    }

    // full query 생성
    const generateQuery = (query: defaultParams) => {
        return { ...(defaultParamValue as defaultParams), ...query }
    }

    // 검색 입력창 change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateKeyword(e.target.value)
    }

    // 검색 버튼 클릭
    const handleSearchClick = () => {
        if (!store.keyword?.length) {
            Modal.warn({
                title: "검색어를 입력해주세요",
            })
        } else {
            const resultQuery = {
                ...(store.query as defaultParams),
                q: store.keyword,
            }
            router.replace(generateUrl(resultQuery))
        }
    }

    // 수업자료/교과서/참고서 선택
    const handleCategory = (category: CategoryType) => {
        const resultQuery = { ...store.query, category: category }
        router.replace(generateUrl(resultQuery))
    }

    // 수업자료/교과서/참고서 지정만 (검색용)
    const setCategory = (category: CategoryType) => {
        updateCategory(category)
    }

    // 필터 체크박스 선택
    const handleFilter = (id: number, checked: boolean) => {
        let resultFilter = store.query?.filter
            ? store.query?.filter?.split(",")
            : []
        if (checked && !resultFilter.includes(id.toString()))
            resultFilter.push(id.toString())
        else if (!checked && resultFilter.includes(id.toString()))
            resultFilter = resultFilter.filter((item) => item !== id.toString())
        let resultStr = ""
        for (let i = 0; i < resultFilter.length; i++) {
            if (i > 0) resultStr += ","
            resultStr += resultFilter[i]
        }
        const resultQuery = {
            ...(store.query as defaultParams),
            filter: resultStr,
        }
        router.replace(generateUrl(resultQuery))
    }

    // 편집가능 클릭
    const handleParsing = (onlyParsing: boolean) => {
        const canParsing = onlyParsing ? "Y" : "N"
        const resultQuery = {
            ...(store.query as defaultParams),
            parsing: canParsing,
        }
        router.replace(generateUrl(resultQuery))
    }

    // 정렬 선택
    const handleSort = (sort: string) => {
        const resultQuery = { ...(store.query as defaultParams), sort: sort }
        router.replace(generateUrl(resultQuery))
    }

    // 필터 초기화
    const handleResetFilter = () => {
        const resultQuery = {
            q: store.query.q,
            category: store.query.category,
            sort: store.query.sort,
        }
        router.replace(generateUrl(resultQuery))
    }

    // 페이지 선택
    const handlePaging = (paging: string) => {
        const PAGING_PREV_TEXT = "prev"
        const PAGING_NEXT_TEXT = "next"
        let resultPage = store.query?.paging ? store.query?.paging : "1"

        switch (paging) {
            case PAGING_PREV_TEXT:
                if (resultPage !== "1")
                    resultPage = (Number(resultPage) - 1).toString()
                break
            case PAGING_NEXT_TEXT:
                // # TODO meta data 로 마지막 페이지 수로 변경 (8)
                if (resultPage !== "8")
                    resultPage = (Number(resultPage) + 1).toString()
                break
            default:
                resultPage = paging
                break
        }
        const resultQuery = {
            ...(store.query as defaultParams),
            paging: resultPage,
        }
        router.replace(generateUrl(resultQuery))
    }

    const searchSelectItems: MenuProps["items"] = [
        {
            label: <Button onClick={() => setCategory("all")}>전체</Button>,
            key: "0",
        },
        {
            label: (
                <Button onClick={() => setCategory("handout")}>수업자료</Button>
            ),
            key: "1",
        },
        {
            label: (
                <Button onClick={() => setCategory("textbook")}>교과서</Button>
            ),
            key: "2",
        },
        {
            label: (
                <Button onClick={() => setCategory("workbook")}>참고서</Button>
            ),
            key: "3",
        },
    ]

    if (!isMounted) return null

    return (
        <StyleSheetManager enableVendorPrefixes>
            <TestPageWrapper>
                <SearchBox>
                    <SelectBox>
                        <Select
                            defaultValue={"all"}
                            value={store.category}
                            // @ts-ignore
                            options={searchSelectItems}
                        />
                    </SelectBox>
                    <Input
                        onChange={handleInputChange}
                        defaultValue={store.keyword}
                        value={store.keyword}
                    />
                    <Button onClick={handleSearchClick}>검색</Button>
                </SearchBox>
                <ProdListPage>
                    <TestFilter
                        onClickCategory={handleCategory}
                        onClickFilter={handleFilter}
                        filters={store.filters}
                        query={store.query}
                    />
                    <ListWrap>
                        <TestCurrentFilter
                            currentFilters={store.query?.filter}
                        />
                        <TestSorting
                            onClickParsing={handleParsing}
                            onClickSort={handleSort}
                            onClickSelect={handleCategory}
                            onClickFilter={handleFilter}
                            filters={store.filters}
                            query={store.query}
                        />
                        <ListBox>
                            {store.query && !store.loadingTemp && (
                                <ol>
                                    <li>category : {store.query.category}</li>
                                    <li>q : {store.query.q}</li>
                                    <li>filter : {store.query.filter}</li>
                                    <li>sort : {store.query.sort}</li>
                                    <li>paging : {store.query.paging}</li>
                                    <li>parsing : {store.query.parsing}</li>
                                </ol>
                            )}
                            {store.loadingTemp && (
                                <div className="temp">{store.loadingTemp}</div>
                            )}
                        </ListBox>
                        <TestPaging
                            onClickPaging={handlePaging}
                            query={store.query}
                        />
                    </ListWrap>
                </ProdListPage>
            </TestPageWrapper>
        </StyleSheetManager>
    )
}

export default TestProductShowNextPage

const TestPageWrapper = styled.div`
    max-width: 1200px;
    padding: 0 28px;
    margin: 0 auto;
`
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    border: solid 2px aliceblue;

    input {
        max-width: 50%;
    }
`
const SelectBox = styled.div`
    min-width: 120px;

    .ant-select {
        width: 100%;
    }
`
const ProdListPage = styled.div`
    display: flex;
    min-height: 80vh;
    border: solid 1px mediumaquamarine;

    & > div {
        min-height: 50px;
    }
`
const ListWrap = styled.div`
    flex: 4;
    background-color: #faf3ff;
`
const ListBox = styled.div`
    text-align: center;
    line-height: 1.5;
    padding: 16px 0;
    margin: 24px;
    border: solid 1px #66c1cc;

    .temp {
        width: 100px;
        padding: 16px 0;
        margin: 0 auto;
        background-color: #fffae9;
    }

    ol {
        padding: 0;
    }
`
