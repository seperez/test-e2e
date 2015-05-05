module.exports = {
    'retryAssertionTimeout':10000,
    'host': '',
    'urls': {
        'desktop':{
            'home':'http://www.mercadolibre.com.ar'
        },
        'mobile': {

        },
    },
    'mock':{
        'image': require('path').resolve(__dirname + '/../assets/images/item-de-test.jpg')
    }
};