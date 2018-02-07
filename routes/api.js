/**
 * API 接口
 */

// 查询学校列表
exports.schoolList = function(req, res){
    let SQL = '';
    if(req.query.pageNum) {
        const pageNum = req.query.pageNum || 10;
        const pageIndex = req.query.pageIndex || 0;
        SQL = `SELECT * FROM school LIMIT ${pageNum} OFFSET ${pageIndex}`;
    } else {
        SQL = 'SELECT * FROM school';
    }
    req.db.serialize(function() {
        req.db.all(SQL, function(err, rows) {
            if (err) {
                res.status(400).send('err: '+err);
            } else {
                res.status(200).send({
                    status: 200,
                    message: 'Success',
                    data: rows,
                })
            }
        })
    })
}