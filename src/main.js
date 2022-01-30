import { createApp } from 'vue';
import App from './App.vue';
import FriendCom from "@/components/FriendCom";
import TestCom from "@/components/TestCom";

const app = createApp(App);

app.component('friend-com',FriendCom);
app.component('test-com',TestCom);
app.mount('#app');
