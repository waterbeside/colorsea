const gulp = require('gulp')
const clean = require('gulp-clean')
const path = require('path')
const { exec } = require('child_process')

const taskClean = () => {
  return gulp.src('./dist/**/*').pipe(clean())
}

const taskScript = async done => {
  const cmdStr = `${path.resolve('./node_modules/.bin/rollup')} -c --configPlugin typescript`
  exec(cmdStr, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      console.warn(new Date(), ' 打包执行失败')
    } else {
      console.log(stdout)
      console.warn(new Date(), ' 打包执行成功')
    }
  })
  done()
}

exports.clean = taskClean
exports.default = gulp.series(taskClean, taskScript)
