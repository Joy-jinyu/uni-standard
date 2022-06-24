<template>
  <view class="transaction-list_wrapper">
    <unicloud-db
      v-slot="{ data: records, error }"
      collection="transaction-record"
    >
      <view v-if="error">
        {{ error.message }}
      </view>
      <view v-else>
        <uni-list>
          <uni-list-item
            v-for="(record, index) of records"
            :key="index"
            :title="`${record.money}`"
            :right-text="formatDate(record.transaction_time)"
            :note="record.purpose"
            clickable
            @click="goDetail(record)"
          />
        </uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { formatDate } from '@/utils/date'

  onMounted(() => {
    console.log('woshi')
  })

  const goDetail = ({ _id }) => {
    uni.navigateTo({
      url: `/pages/transactionDetail/index?id=${_id}`,

    })
  }

</script>

<style lang="scss">
.transaction-list_wrapper {
  width: 100%;
  height: 100%;

  > text {
    color: $uni-color-primary;
  }
}
</style>
