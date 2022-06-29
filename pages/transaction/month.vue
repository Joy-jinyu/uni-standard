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
          :title="`${record.monthMoney}`"
          :right-text="formatDate(record.transaction_time, 'yyyy-MM-dd')"
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
import { onShow, onReady, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'
import { onMounted, ref, reactive, watchEffect } from 'vue'
import { formatDate } from '@/utils/date'
import { userStore } from '@/store/user'

const user = userStore()
const listState = reactive({
  error: '',
  loading: false,
  records: []
})

const pagination = reactive({
  pageSize: 10,
  total: 10,
  next: 1
})

const loadData = async () => {
  const { pageSize, next, total } = pagination
  if (next * pageSize > total) return
  const db = uniCloud.database()
  const {
    result: { data, count }
  } = await db
    .collection('transaction-record')
    .groupBy('user_id,transaction_time')
    .groupField('sum(money) as monthMoney')
    .skip(pageSize * (next - 1)) // 跳过前20条
    .limit(pageSize) // 获取20条
    .get({
      getCount: true
    })
  listState.records = next === 1 ? data : listState.records.concat(data)
  pagination.next = next + 1
  pagination.total = count
}

watchEffect(async () => {
  if (user.userId) {
    loadData()
  }
})

onPullDownRefresh(async () => {
  await loadData()
  uni.stopPullDownRefresh()
})

onReachBottom(() => {
  loadData()
})

const goDetail = ({ transaction_time }) => {
  uni.navigateTo({
    url: `/pages/transaction/daily?time=${transaction_time}`
  })
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
