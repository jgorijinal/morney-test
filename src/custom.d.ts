type RecordItem = {   // type关键字 声明'类型'
    tags: Tag[],
    notes: string,
    type: string,
    amount: number,
    createAt?: string
}
type RootState ={
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?:Tag
}
type Tag ={
    id:string,
    name:string
}
type TagListModel = {
    data: Tag[],
    fetch: () => Tag[],
    create: (name: string) => string,
    save: () => void,
    update:(id:string,name:string)=> 'success' | 'not found' | 'duplicated',
    remove:(id:string) => boolean
}

interface Window {

}