const userModel = require('../Model/model_user')
const response = require('../Config/response')
const bcrypt = require('bcrypt')


/*
fubgsi register
*/
exports.register = (data) =>
new Promise((resolve, reject) => {
    userModel.findOne({
        email: data.email
    }).then((user) => {
        if (user) {
            reject(response.errorResponse('E-mail Sudah Digunakan'))
        } else {
            bcrypt.hash(data.password, 10 , (err, hash) =>{
                data.password =hash
                userModel.create(data)
                .then(() =>{
                    resolve(response.suksesResponse('Berhasil Registrasi'))
                }).catch(()=>{
                    reject(response.errorResponse('Gagal Registrasi'))
                })
             })
        }
     })
})

/*
Funngsi Login
*/

exports.login =(data) =>
new Promise((resolve, reject) =>{
    userModel.findOne({
        email: data.email
    }).then(user =>{
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)) {
                resolve(Object.assign(response.suksesResponse('Berhasil Login'),{
                    user: user
                }))
            } else {
                reject(response.errorResponse('Password Salah'))
            }
        } else {
            reject(response.errorResponse('E-mail Tidak Terdaftar/Email Salah'),
            )
        }
    })
})