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
              errorMessage: '请输入金额',
            },
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
    <button @click="addTransaction">
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
      const result = await db.collection('transaction-record').add(transactionRecord)
      console.log(result)
    }
  })
}
</script>

<style lang="scss">
.transaction-detail__wrapper {
  padding: 0 20px;
}
</style>
