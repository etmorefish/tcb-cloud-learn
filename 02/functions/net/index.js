// 返回 Hello World
exports.main = async (event) => {

    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html'
        },
        body: 'ip:'+event.headers['x-real-ip'] + "<br>"+ "host: " + event.headers['host'] +"<br> name:"+event.queryStringParameters['name']
    }
}

// event.headers['x-real-ip']   ok
// event.headers.x-real-ip      error