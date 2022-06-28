<template>
  <view
    v-if="user.userId"
    class="transaction-list_wrapper"
  >
    <unicloud-db
      :ref="ref => (dbListRef = ref)"
      v-slot="{ data: records, error, loading }"
      :page-size="10"
      collection="transaction-record"
      :where="`user_id=='${user.userId}'`"
    >
      <view v-if="error">
        {{ error.message }}
      </view>
      <view v-else-if="loading">
        正在加载...
      </view>
      <view v-else>
        <uni-list>
          <uni-list-item
            v-for="(record, index) of records"
            :key="index"
            :title="`${record.money}`"
            :right-text="formatDate(record.transaction_time, 'yyyy-MM-dd')"
            :note="record.purpose"
            clickable
            @click="goDetail(record)"
          />
        </uni-list>
      </view>
    </unicloud-db>
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
import { onMounted, ref } from 'vue'
import { formatDate } from '@/utils/date'
import { userStore } from '@/store/user'

const user = userStore()
const dbListRef = ref(null)

onShow(() => {
  if (dbListRef.value) {
    dbListRef.value.refresh()
  }
})

onPullDownRefresh(async () => {
  dbListRef.value.loadData(
    {
      clear: true
    },
    () => {
      // 停止下拉刷新
      uni.stopPullDownRefresh()
    }
  )
})

onReachBottom(() => {
    dbListRef.value.loadMore()
})

const goDetail = ({ _id }) => {
  dbListRef.value.remove(_id)
}

const goAddTransaction = () => {
  uni.navigateTo({
    url: '/pages/transaction/detail/index'
  })
}
</script>

<style lang="scss">
.transaction-list_wrapper {
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  > text {
    color: $uni-color-primary;
  }
}
</style>
