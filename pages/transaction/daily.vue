<template>
  <view class="transaction-daily_wrapper">
    <view
      v-if="listState.error"
      class="list-status"
    >
      {{ listState.error }}
    </view>
    <view
      v-else-if="listState.loading"
      class="list-status"
    >
      正在加载...
    </view>
    <view
      v-else-if="listState.records.length === 0"
      class="list-status"
    >
      没有数据！
    </view>
    <view v-else>
      <uni-list>
        <uni-list-item
          v-for="(record, index) of listState.records"
          :key="index"
          :title="`${record.money}`"
          :right-text="formatDate(record.transaction_time, 'yyyy-MM-dd')"
          :note="record.purpose"
          clickable
          @click="goDetail(record)"
        />
      </uni-list>
    </view>
    <button
      type="primary"
      @click="goAddTransaction"
    >
      新增
    </button>
  </view>
</template>

<script setup>
import { onShow, onLoad, onReady, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'
import { onMounted, ref, reactive, watchEffect } from 'vue'
import { formatDate } from '@/utils/date'
import { userStore } from '@/store/user'

const user = userStore()
const listState = reactive({
  error: '',
  loading: false,
  records: [],
  loaded: false
})

const pagination = reactive({
  pageSize: 20,
  total: 20,
  next: 1,
})

const queryState = reactive({})

onLoad(query => {
  Object.assign(queryState, {
    ...query
  })
})

const loadData = async () => {
  if (user.userId && queryState.time) {
    const { pageSize, next, total } = pagination
    if ((next - 1) * pageSize > total) return
    const db = uniCloud.database()
    try {
      const {
        result: { data, count }
      } = await db
        .collection('transaction-record')
        .where(`user_id=='${user.userId}'&&transaction_time==${queryState.time}`)
        .skip(pageSize * (next - 1)) // 跳过前20条
        .limit(pageSize) // 获取20条
        .get({
          getCount: true
        })
      console.log(data)
      listState.records = next === 1 ? data : listState.records.concat(data)
      pagination.next = next + 1
      pagination.total = count
    } catch (error) {
      listState.error = error
    }
  }
}

watchEffect(async () => {
  loadData()
})

onShow(() => {
  if (listState.loaded) {
    pagination.total = 10
    pagination.next = 1
    loadData()
  } else {
    listState.loaded = true
  }
})

onPullDownRefresh(async () => {
  pagination.total = 10
  pagination.next = 1
  await loadData()
  uni.stopPullDownRefresh()
})

onReachBottom(() => {
  loadData()
})

const goDetail = ({ _id }) => {
  dbListRef.value.remove(_id)
}

const goAddTransaction = () => {
  uni.navigateTo({
    url: '/pages/transaction/detail'
  })
}
</script>

<style lang="scss">
.transaction-daily_wrapper {
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  .list-status {
    text-align: center;
    color: $text-color;
  }
}
</style>
