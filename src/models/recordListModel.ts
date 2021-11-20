import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
        return this.data
    },
    save() {
        localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(record:RecordItem){
        const recordClone = clone(record);
        recordClone.createAt = new Date();
        this.data.push(recordClone);
    },
};
export default recordListModel;