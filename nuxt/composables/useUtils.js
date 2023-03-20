import {ref} from 'vue'

export const useUtils= () => {
    const count = ref(0)
    const getCount = () =>console.log(count.value);
    const setCount = (data) => count.value = count.value + data
    return {count, getCount,setCount} 
}