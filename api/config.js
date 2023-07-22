const env = process.env

const serverURL = {
    port: env.PORT || 7000,
    host: env.HOST || 'localhost',
    get serverUrl() {
        return `http://${this.host}:${this.port}`
    }
}

const JWTSecret = 'mylittlesecrettoken!'

module.exports = {serverURL, JWTSecret}