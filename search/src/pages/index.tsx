import * as React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Button, Input, MenuProps, Select } from "antd/lib"
import { TestFilter } from "@/components/TestFilter"
import { TestCurrentFilter } from "@/components/TestCurrentFilter"
import { selectedFilterType } from "@/modules/searchType.module"
import { TestSorting } from "@/components/TestSorting"

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
    const router = useRouter()
    const { query } = router

    // const store = useLocalObservable<TestProductStatus>(() => ({
    //     query: {},
    //     filters: [],
    //     category: undefined,
    //     keyword: "",
    //     loadingTemp: "",
    //     updateFilters: (newFilters: filterType[]) => {
    //         store.filters = newFilters
    //     },
    //     updateQuery: (query: defaultParams) => {
    //         store.query = { ...query }
    //     },
    //     updateKeyword: (value: string) => {
    //         store.keyword = value
    //     },
    //     updateCategory: (value: CategoryType) => {
    //         store.category = value
    //     },
    //     updateLoadingTemp: (value: string) => {
    //         store.loadingTemp = value
    //     },
    // }))

    // 상태값 업데이트
    useEffect(() => {
        // const newQuery: defaultParams = { ...query }
        // // Api 전송용 query
        // const sendQuery: defaultParams = generateQuery(query)
        // console.log("::: api 전송용 query : ", toJS(sendQuery))
        // store.updateLoadingTemp("loading")
        // new Promise((res) => {
        //     store.updateQuery(newQuery)
        //     store.updateFilters(testFilterFactory(7))
        //     setTimeout(() => {
        //         // @ts-ignore
        //         res()
        //     }, 1000)
        // }).then(() => {
        //     newQuery.q && store.updateKeyword(newQuery.q)
        //     store.updateLoadingTemp("")
        // })
    }, [query])

    // url 생성
    const generateUrl = (query: defaultParams) => {
        let path = "/test?"

        if (query?.category) path += "category=" + query.category + "&"
        if (query?.q) path += "q=" + query.q + "&"
        if (query?.filter) {
            let resultFilter = query.filter?.split(",")
            path += "filter=" + resultFilter + "&"
        }
        if (query?.sort) path += "sort=" + query.sort + "&"
        if (query?.paging) path += "paging=" + query.paging + "&"
        if (query?.parsing) path += "parsing=" + query.parsing

        return path
    }

    // full query 생성
    const generateQuery = (query: defaultParams) => {
        return { ...defaultParamValue, ...query }
    }

    // 검색 입력창 change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // store.updateKeyword(e.target.value)
    }

    // 검색 버튼 클릭
    const handleSearchClick = () => {
        // const resultQuery = { ...store.query, q: store.keyword }
        // router.replace(generateUrl(resultQuery))
    }

    // 수업자료/교과서/참고서 선택
    const handleCategory = (category: string) => {
        // const resultQuery = { ...store.query, category: category }
        // router.replace(generateUrl(resultQuery))
    }

    // 수업자료/교과서/참고서 지정만 (검색용)
    const setCategory = (category: string) => {
        // store.updateCategory(category)
    }

    // 필터 체크박스 선택
    const handleFilter = (id: number, checked: boolean) => {
        // let resultFilter = store.query?.filter
        //     ? store.query?.filter?.split(",")
        //     : []
        // if (checked && !resultFilter.includes(id.toString()))
        //     resultFilter.push(id.toString())
        // else if (!checked && resultFilter.includes(id.toString()))
        //     resultFilter = resultFilter.filter((item) => item !== id.toString())
        // let resultStr = ""
        // for (let i = 0; i < resultFilter.length; i++) {
        //     if (i > 0) resultStr += ","
        //     resultStr += resultFilter[i]
        // }
        // const resultQuery = { ...store.query, filter: resultStr }
        // router.replace(generateUrl(resultQuery))
    }

    // 편집가능 클릭
    const handleParsing = (onlyParsing: boolean) => {
        // const canParsing = onlyParsing ? "Y" : "N"
        // const resultQuery = { ...store.query, parsing: canParsing }
        // router.replace(generateUrl(resultQuery))
    }

    // 정렬 선택
    const handleSort = (sort: string) => {
        // const resultQuery = { ...store.query, sort: sort }
        // router.replace(generateUrl(resultQuery))
    }

    // 필터 초기화
    const handleResetFilter = () => {
        // const resultQuery = { q: store.query.q, sort: store.query.sort }
        // router.replace(generateUrl(resultQuery))
    }

    // 필터 삭제
    const handleRemoveFilter = (item: selectedFilterType) => {
        // const resultQuery = { ...store.query }
        // if (!(item.key === 'license' || item.key === 'parsing')) {
        // 	let resultFilter = store.query[item.key].split(',')
        // 	resultFilter = resultFilter.filter((filter) => filter !== item.value)
        // 	resultQuery[item.key] = resultFilter.join(',')
        // } else {
        // 	delete resultQuery[item.key]
        // }
        // router.replace(generateUrl(resultQuery))
    }

    // 페이지 선택
    const handlePaging = (paging: string) => {
        // let resultPage = store.query?.paging ? store.query?.paging : "1"
        // switch (paging) {
        //     case "prev":
        //         if (resultPage !== "1")
        //             resultPage = (Number(resultPage) - 1).toString()
        //         break
        //     case "next":
        //         // # TODO meta data 로 마지막 페이지 수로 변경 (8)
        //         if (resultPage !== "8")
        //             resultPage = (Number(resultPage) + 1).toString()
        //         break
        //     default:
        //         resultPage = paging
        //         break
        // }
        // const resultQuery = { ...store.query, paging: resultPage }
        // router.replace(generateUrl(resultQuery))
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

    return (
        <TestPageWrapper>
            <SearchBox>
                <SelectBox>
                    <Select
                        defaultValue={"all"}
                        // value={store.category}
                        value={"text"}
                        // @ts-ignore
                        options={searchSelectItems}
                    />
                </SelectBox>
                <Input
                    onChange={handleInputChange}
                    // defaultValue={store.keyword}
                    // value={store.keyword}
                />
                <Button onClick={handleSearchClick}>검색</Button>
            </SearchBox>
            <ProdListPage>
                <TestFilter
                    onClickCategory={handleCategory}
                    onClickFilter={handleFilter}
                    // filters={store.filters}
                    // query={store.query}
                    filters={[]}
                    query={{}}
                />
                <ListWrap>
                    <TestCurrentFilter
                        currentFilters={{}}
                        filters={[]}
                        selectedFilters={[]}
                        baseLicenses={[]}
                        // currentFilters={store.query}
                        // filters={store.filters}
                        // selectedFilters={store.selectedFilters}
                        // baseLicenses={store.baseLicenses}
                        resetFilter={handleResetFilter}
                        deleteFilter={handleRemoveFilter}
                    />
                    <TestSorting
                        onClickParsing={handleParsing}
                        onClickSort={handleSort}
                        onClickSelect={handleCategory}
                        onClickFilter={handleFilter}
                        // filters={store.filters}
                        // query={store.query}
                        filters={[]}
                        query={{}}
                    />
                    <ListBox>
                        {/* {!store.loadingTemp && (
                            <ol>
                                <li>category : {store.query?.category}</li>
                                <li>q : {store.query?.q}</li>
                                <li>filter : {store.query?.filter}</li>
                                <li>sort : {store.query?.sort}</li>
                                <li>paging : {store.query?.paging}</li>
                                <li>parsing : {store.query?.parsing}</li>
                            </ol>
                        )}
                        {store.loadingTemp && (
                            <div className="temp">{store.loadingTemp}</div>
                        )} */}
                    </ListBox>
                    {/* <TestPaging onClickPaging={handlePaging} query={store.query} /> */}
                </ListWrap>
            </ProdListPage>
        </TestPageWrapper>
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
