/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 13:56
 Description:

 **/

function f() {
    const a = parseInt(Math.random() * 10)
    const b = parseInt(Math.random() * 10)

    const c = f1(a, b)
    console.log(c)
}

function f1( a, b ) {
    if ( a > b ) {
        a += a * 2
    } else {
        b -= a
    }
    return a + b
}

f()