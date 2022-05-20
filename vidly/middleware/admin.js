module.exports = function(req,res,next){
    if(!req.user.idAdmin) return res.status(403).send('Access denied')
    next()
}