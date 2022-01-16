import { RegistrableApp, ObjectType } from 'qiankun'

const AppRouters: Array<RegistrableApp<ObjectType>> = [
    {
        name: 'react-app',
        entry: '//localhost:10011',
        container: '#react-app-container',
        activeRule: '/react-app'
    },
    {
        name: 'vue-app',
        entry: '//localhost:10012',
        container: '#vue-app-container',
        activeRule: '/vue-app'
    }
]

export default AppRouters