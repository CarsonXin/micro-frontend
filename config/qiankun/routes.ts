import { RegistrableApp, ObjectType } from 'qiankun';

const AppRouters: Array<RegistrableApp<ObjectType>> = [
  {
    name: 'react-app-vite',
    entry: 'http://127.0.0.1:10011',
    container: '#react-app-vite-container',
    activeRule: '/react-app-vite'
  },
  {
    name: 'vue-app',
    entry: 'http://127.0.0.1:10012',
    container: '#vue-app-container',
    activeRule: '/vue-app',
  },
  {
    name: 'vue-cli-app',
    entry: 'http://127.0.0.1:10013',
    container: '#vue-cli-app-container',
    activeRule: '/vue-cli-app'
  },
];

export default AppRouters;
