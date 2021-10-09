module.exports = {
    errorResponse: (msg) => {
        return{
            status: false,
            message: msg
        }
    },
    suksesResponse: (msg) => {
    return {
        status: true,
        message: msg
    }
    },
    suksesResult: (data) => {
        return {
            sukses: true,
            msg: 'Berhasil Mendapatkan Data',
            result: data
        }
        },
    nullResult: () => {
            return {
                sukses: false,
                msg: 'Tidak Ada Data',
                result: null
            }
            },
    errorResult: () => {
                return {
                    status: false,
                    msg: 'Bgagal Mendapatkan Data',
                    data: null
        }
    }  
}