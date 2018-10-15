
const posts = require('../controllers/posts.js')

module.exports = function (app) {

    app.post('/', function (req, res) {
        posts.new(req, res)
    })

    app.get('/posts', function (req, res) {
        posts.index(req, res)
    })

    app.post('/:id', function (req, res) {
        posts.comment(req, res, req.params.id)
    })

    app.get('/:id', function (req, res) {
        posts.profile(req, res, req.params.id)
    })

    app.get('/poster/:name', function (req, res) {
        posts.findByPoster(req, res, req.params.name)
    })
}