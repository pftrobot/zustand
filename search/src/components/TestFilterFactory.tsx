export interface TestFilterType {
    title: string
    id: number
}

export const testFilterFactory = (length: number): TestFilterType[] => {
    const types = [
        "필터1",
        "필터2",
        "고등영어",
        "중등영어",
        "초등영어",
        "초등수학",
        "필터3",
    ]

    return [...Array(length)].map((_, index) => {
        return {
            id: index + 1,
            title: `${types[index]}`,
        } as TestFilterType
    })
}

export const testBasicFilterFactory = (length: number): TestFilterType[] => {
    const types = ["리딩튜터 기본", "리딩튜터 실력", "리딩튜터 수능 Plus"]

    return [...Array(length)].map((_, index) => {
        return {
            id: index + 1,
            title: `${types[index]}`,
        } as TestFilterType
    })
}

export const testBrandFilterFactory = (length: number): TestFilterType[] => {
    // const types = ['이클라우드', '변형문제스토어', '일등급샘', '비밀노트', '부교재나라']
    const types = [
        "이클라우드",
        "변형문제스토어",
        "일등급샘",
        "비밀노트",
        "부교재나라",
        "이클라우드1",
        "변형문제스토어1",
        "일등급샘1",
        "비밀노트1",
        "부교재나라1",
        "이클라우드2",
        "변형문제스토어2",
        "일등급샘2",
        "비밀노트2",
        "부교재나라2",
    ]

    return [...Array(length)].map((_, index) => {
        return {
            id: index + 1,
            title: `${types[index]}`,
        } as TestFilterType
    })
}

export const testUnitFilterFactory = (length: number): TestFilterType[] => {
    const types = ["1과", "2과", "3과", "4과", "5과", "6과", "7과", "기타"]

    return [...Array(length)].map((_, index) => {
        return {
            id: index + 1,
            title: `${types[index]}`,
        } as TestFilterType
    })
}

export const testTypeFilterFactory = (length: number): TestFilterType[] => {
    const types = [
        "파이널직보",
        "기출예상문제",
        "단계별복습",
        "변형문제",
        "본문분석",
        "워크북",
        "지문분석",
        "최종찍기",
    ]

    return [...Array(length)].map((_, index) => {
        return {
            id: index + 1,
            title: `${types[index]}`,
        } as TestFilterType
    })
}
