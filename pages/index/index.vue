<template>
  <view class="home">
    <unicloud-db v-slot:default="{ data: records, loading, error, options }" collection="transaction-record">
      <view v-if="error">{{ error.message }}</view>
      <view v-else>
        <uni-list>
          <uni-list-item :title="record.money" :rightText="record.transaction_time" :note="record.purpose" v-for="(record, index) of records" :key="index"></uni-list-item>
        </uni-list>
      </view>
    </unicloud-db>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;

  > text {
    color: $uni-color-primary;
  }
}
</style>
