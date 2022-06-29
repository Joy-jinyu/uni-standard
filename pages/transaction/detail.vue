<template>
  <view class="transaction-detail__wrapper">
    <uni-forms
      :ref="ref => (formRef = ref)"
      :model-value="transaction"
      :rules="{
        money: {
          rules: [
            {
              required: true,
              errorMessage: '请输入金额'
            }
          ]
        }
      }"
    >
      <uni-forms-item
        label="金额"
        name="money"
        label-position="top"
        required
      >
        <uni-easyinput
          v-model="transaction.money"
          type="digit"
          placeholder="请输入金额"
        />
      </uni-forms-item>

      <uni-forms-item
        label="支付时间"
        name="transaction_time"
        label-position="top"
        required
      >
        <uni-datetime-picker
          v-model="transaction.transaction_time"
          placeholder="请选择日期"
        />
      </uni-forms-item>

      <uni-forms-item
        label="用途"
        name="purpose"
        label-position="top"
        required
      >
        <uni-easyinput
          v-model="transaction.purpose"
          placeholder="请输入用途"
        />
      </uni-forms-item>
    </uni-forms>
    <button
      type="primary"
      @click="addTransaction"
    >
      保存
    </button>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { userStore } from '@/store/user'

const user = userStore()
const formRef = ref(null)
const transaction = reactive({
  money: undefined,
  transaction_time: '',
  purpose: ''
})

const addTransaction = () => {
  formRef.value.validate(async (error, _) => {
    if (!error) {
      const db = uniCloud.database()
      const transactionRecord = {
        ...transaction,
        money: Number(transaction.money),
        transaction_time: new Date(transaction.transaction_time).getTime(),
        user_id: user.userId
      }
      try {
        const result = await db.collection('transaction-record').add(transactionRecord)

        uni.showModal({
          content: '添加成功',
          cancelText: '继续添加',
          success: function(res) {
            if (res.confirm) {
              uni.navigateBack()
            } else if (res.cancel) {
              Object.assign(transaction, {
                money: undefined,
                transaction_time: '',
                purpose: ''
              })
            }
          }
        })
      } catch (error) {
        uni.showToast({
          title: '人气大爆发',
          icon: 'error'
        })
      }
    }
  })
}
</script>

<style lang="scss">
.transaction-detail__wrapper {
  padding: 0 12px;
}
</style>
