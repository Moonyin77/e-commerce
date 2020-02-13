import React, { Component } from 'react'
import ApiContext from './ApiContext'

// Utils
import axiosSetup from '../../utils/axios'
import { getToken } from '../../utils/localStorage'

class ApiProvider extends Component {
  constructor(props) {
    super(props)
    console.log('ApiProvider INIT')

    this.login = this.login.bind(this)
    this.getUser = this.getUser.bind(this)
    this.register = this.register.bind(this)
    this.getAxios = this.getAxios.bind(this)
    this.getArticle = this.getArticle.bind(this)
    this.createAvis = this.createAvis.bind(this)
    this.getUserById = this.getUserById.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.adminGetUsers = this.adminGetUsers.bind(this)
    this.getArticleById = this.getArticleById.bind(this)
    this.createCategory = this.createCategory.bind(this)
    this.adminUpdateUser = this.adminUpdateUser.bind(this)
    this.adminDeleteUser = this.adminDeleteUser.bind(this)
    this.getCategoryById = this.getCategoryById.bind(this)
    this.adminDeleteAvis = this.adminDeleteAvis.bind(this)
    this.adminUpdateCategory = this.adminUpdateCategory.bind(this)
    this.adminDeleteCategory = this.adminDeleteCategory.bind(this)
    this.getArticlesWithParams = this.getArticlesWithParams.bind(this)
  }

  // Get an updated axios client with correct headers
  getAxios(type) {
    const token = getToken()

    return axiosSetup(token, type)
  }

  // /api/auth/details
  getUser() {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .get('/auth/details')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getUserById(id) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .get(`/admin/user/show/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  adminGetUsers() {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .get('/admin/user/showAll')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  adminUpdateUser(form, id) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .post(`/admin/user/update/${id}`, form)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  adminDeleteUser(id) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .delete(`/admin/user/delete/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getCategories() {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .get('/category/showAll')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getCategoryById(id) {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .get(`/category/show/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  createCategory(form) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .post('/admin/category/create', form)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  adminUpdateCategory(form, id) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .post(`/admin/category/update/${id}`, form)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  adminDeleteCategory(id) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .delete(`/admin/category/destroy/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   * /api/auth/login
   * @param {object} data form data (password, email)
   */
  login(data) {
    const axios = this.getAxios('form')
    return new Promise(function(resolve, reject) {
      axios
        .post('/auth/login', data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

    /**
   * /api/auth/register
   * @param {object} data form data (password, c_password, name, email)
   */
  register(data) {
    const axios = this.getAxios('form')
    return new Promise(function(resolve, reject) {
      axios
        .post('/auth/register', data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // ARTICLES

  getArticleById(id) {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .get(`/article/show/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getArticle() {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .get('/article/showAll')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getArticlesWithParams(params) {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .get('/article/search', {params})
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  
   // Avis

  adminDeleteAvis(id) {
    const axios = this.getAxios()
    return new Promise(function(resolve, reject) {
      axios
        .delete(`/admin/avis/destroy/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  createAvis(form) {
    const axios = this.getAxios(getToken())
    return new Promise(function(resolve, reject) {
      axios
        .post(`/avis/create/`, form)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  
  render() {
    return (
      <ApiContext.Provider
          value={{...this}}
      >
          {this.props.children}
      </ApiContext.Provider>
    )
  }
}

export default ApiProvider