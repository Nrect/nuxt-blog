<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1>Добавить комментарий</h1>

    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>

    <el-form-item label="Текст комментария" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Добавить комментарий
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          // eslint-disable-next-line no-unused-vars
          const fromData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ''
          }

          try {
            setTimeout(() => {
              // $message от elements ui
              this.$message.success('Комментарий добавлен')
              this.$emit('created')
            }, 2000)
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
