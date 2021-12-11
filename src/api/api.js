import * as axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://api.tashin.uz',
     baseURL: 'https://api.iamafi.ninja/',
    withCredentials: true,
})

export const accountAPI = {
    getLogin(userData) {
        return instance.post(`account/login`, userData).then((data) => {
            return data
        })
    },
    getProfile() {
        return instance.get(`account/profile`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('Token')
            }
        })
            .then((data) => {
                return data.data
            })
    },
    registerAcc(registerData) {
        return instance.post(`account/register`, registerData).then((data) => {
            return data
        }).
        catch(err => err)
    },
    tokenAcc(code) {
        return instance.post(`account/register/token`, code).then((data) => {
            return data.data
        })
    },
}

export const monthlyBestAPI = {
    getMonthlyBest() {
        return instance.get(`best`).then((data) => {
            return data.data
        })
    },
}

export const categoryAPI = {
    getCategory(category) {
        return instance.get(`category/${category}`).then((data) => {
            return data.data
        })
    },
    getCategoryList() {
        return instance.get(`category/list`).then((data) => {
            return data.data
        })
    },
}

export const productAPI = {
    getProductDetail(slug) {
        return instance.get(`product/${slug}`).then((data) => {
            return data.data
        })
    },
    addProductCart(id) {
        return instance.post(`cart/add/`, id).then((data) => {
            return data.data
        })
    },
    getProductsCart() {
        return instance.get(`cart/detail/`).then((data) => {
            return data.data
        })
    },
    deleteProductCart(id) {
        return instance.post(`cart/remove/`, {id}).then((data) => {
            return data.data
        })
    },
    getCartLength() {
        return instance.get(`cart/length/`).then((data) => {
            return data.data
        })
    },
    getCartDetail() {
        return instance.get(`cart/detail/`).then((data) => {
            return data.data
        })
    },
    searchProduct(search) {
        return instance.get(`product/search${search}`).then((data) => {
            return data.data
        })
    },
    getReviewList(slug) {
        return instance.get(`review/${slug}/list`).then((data) => {
            return data.data
        })
    },
    getReviewDetail(slug) {
        return instance.get(`review/${slug}/detail`).then((data) => {
            return data.data
        })
    },
    createReview(slug, data) {
        return instance.post(`review/${slug}/create`, data, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('Token')
            }
        }).then((data) => {
            return data.data
        })
    },
}
