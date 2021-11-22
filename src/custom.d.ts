type RecordItem = {   // type关键字 声明'类型'
    tags: string[],
    notes: string,
    type: string,
    amount: number,
    createAt?: Date
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