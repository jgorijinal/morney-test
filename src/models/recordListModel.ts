// import clone from '@/lib/clone';
//
// const localStorageKeyName = 'recordList';
// const recordListModel = {
//     data:[] as RecordItem[],
//     create(record:RecordItem){
//         const recordClone = clone(record);
//         recordClone.createAt = new Date();
//         this.data.push(recordClone);
//        this.save()
//     },
//     fetch() {
//         this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
//         return this.data
//     },
//     save() {
//         localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
//     },
//
// };
// export default recordListModel;