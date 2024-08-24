<template>
    <section>
      <div class="flex justify-center items-center h-screen" style="background: #ececec; padding: 30px">
        <a-card title="Login" :bordered="false" style="width: 300px">
          <a-form :model="formState" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item
              label="Username"
              name="username"
              :rules="[{ required: true, message: 'Please input your username!' }]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
            >
              <a-input-password v-model:value="formState.password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">Login</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import baseHttp from '@/services/baseHttp.ts'; 
  
  interface FormState {
    username: string;
    password: string;
  }
  
  const formState = reactive<FormState>({
    username: '',
    password: '',
  });
  
  const router = useRouter();
  
  const onFinish = async () => {
    try {
      const axiosInstance = baseHttp('');
  
      const response = await axiosInstance.post('/account/user_login/', {
        username: formState.username,
        password: formState.password,
      });
  
      const token = response.data.access;
      localStorage.setItem('jwtToken', token);
  
      router.push({ name: 'dashboard' }); // Redirect to a private route
    } catch (error) {
      console.log('Login failed:', error);
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  </script>
  