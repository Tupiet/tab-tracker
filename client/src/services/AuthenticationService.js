import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

/* AuthenticationService.register({
    email: 'helloworld@gmail.com',
    password: '123456'
}) */