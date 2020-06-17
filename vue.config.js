//
//
// module.exports = {
//   devServer: {
// 	port:9001,
//     proxy: {
//         "/route": {
//             target: "http://localhost:9000",
//         }
//     }
//   }
// }
module.exports = {
    devServer: {
        port:9001,
        proxy:'http://localhost:9000'
    }
}