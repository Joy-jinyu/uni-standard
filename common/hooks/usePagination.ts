
import { onMounted, ref, reactive, watchEffect } from 'vue'

export const usePagination = () => {
  const pagination = reactive({
    pageSize: 20,
    total: 20,
    next: 1
  })

  const resetPagination = () => {
    pagination.total = 10
    pagination.next = 1
  }

  return {
    pagination
  }
}
