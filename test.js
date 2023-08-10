
// function asyncPool(poolLimit) {
//     const ret = []; // 存储所有的异步任务
//     const executing = []; // 存储正在执行的异步任务
//     // const awaitList = []; // 等待队列
//     const doTask = () => {
//         const before = ret.length;
//         setTimeout(async () => {
//             if (before === ret.length) {
//                 console.log('ret.length', ret)
//                 for (const item of ret) {
//                     // 调用iteratorFn函数创建异步任务
//                     // console.log(item)
//                     const p = Promise.resolve().then(() => item());
//                     // ret.push(p); // 保存新的异步任务
//                     const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//                     executing.push(e); // 保存正在执行的异步任务
//                     // 当poolLimit值小于或等于总任务个数时，进行并发控制
//                     if (executing.length === poolLimit) {
//                       // 当任务完成后，从正在执行的任务数组中移除已完成的任务
//                       await Promise.race(executing); // 等待较快的任务执行完成
                     
//                     }
//                 }
//                 return Promise.all(ret);
//             }
//         })

//     }
//     return async (iteratorFn) => {
//         ret.push(iteratorFn);
//         return doTask();
//     }

//   }

// function asyncPool(poolLimit) {
//     const ret = []; // 存储所有的异步任务
//     const executing = []; // 存储正在执行的异步任务
//     const awaitList = []; // 等待队列
//     const doTask = (fn) => {
//         const p = fn();
//         const f = p;
//         const e = p.then(() => {
//             awaitList.shift();
//             executing.splice(executing.indexOf(e), 1);
//         });
//         executing.push(e);
//         ret.push(f);
//         return f;
//     } 
//     return async (fn) => {
//         if (executing.length >= poolLimit) {
//             awaitList.push(fn);
//             let i = awaitList.length;
//             while (!!i) {
//                 await Promise.race(executing).then(() => i--)
//             }
//         }
//         return doTask(fn);
//     }
// }

// const fn = asyncPool(2);

// fn(()=> new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1)
//         // console.log(1)
//     }, 10000)
// })).then(res => console.log(res));

// fn(()=> new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(2)
//         // console.log(2)
//     }, 3000)
// })).then(res => console.log(res));

// fn(()=> new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(3)
//         // console.log(3)
//     }, 5000)
// })).then(res => console.log(res));

// fn(()=> new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(4)
//         // console.log(4)
//     }, 4000)
// })).then(res => console.log(res));

// fn(()=> new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(5)
//         // console.log(4)
//     }, 1000)
// })).then(res => console.log(res));

// 2 1 4 3

var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val:4 ,
        },
        right: {
            val: 5,
            left: {
                val: 8,
            },
            right: {
                val: 9,
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
        },
        right: {
            val: 7,
        }
    }
}
function getTreeList (node) {
    const res = [];
    const stack = [node];
    while(stack.length) {
        const tree = stack.pop();
        res.push(tree.val)
        if (tree.right) stack.push(tree.right);
        if (tree.left) stack.push(tree.left);
    }
    // let i = 0;
    // function dfs(node) {
    //     if (node) {
    //         dfs(node.left);
    //         dfs(node.right);
    //         res.push(node.val);
    //     }
    // }
    // dfs(node);
    console.log(res);
}
// getTreeList(tree);

function maxSun(node) {
    if (!node) return 0;
    const res = [node.val];
    let sum = 0;
    function dfs(node) {
        let val = res.pop();   
        if (!node.left && !node.right) {
            sum += val;
        }
        if (node.left) {
            const s = val * 10 + node.left.val;
            res.push(s);
            dfs(node.left);
        }
        if (node.right) {
            const s = val * 10 + node.right.val;
            res.push(s);
            dfs(node.right);
        }
    }
    dfs(node);
    return sum;
}
// console.log(maxSun(tree))

function deepClone(obj, map = new WeakMap()) {
    if (typeof obj === 'object' && obj !== null) {
        const origin = [RegExp, Date, Set, Map, WeakMap, WeakSet]
        if (origin.includes(obj.construtor)) {
            return new obj.construtor(obj);
        }
        map.set(obj, obj);
        const objDesc = Object.getOwnPropertyDescriptors(obj);
        const all = Object.getPrototypeOf(obj);
        const newObj = Object.create(all, objDesc);
        for (const key of Reflect.ownKeys(obj)) {
            const isObject = typeof obj[key] === 'object' && obj !== null && typeof obj[key] !== 'function';
            newObj[key] = isObject ?  deepClone(obj[key], map) : obj[key];
        }
        return newObj;

    } else {
        return obj;
    }
}

const obj = {
    arr: [1,2,3]
}

// const cloneObj = deepClone(obj);
// obj.arr[0] = 2
// console.log(cloneObj);


const arr = [1, 2, 3, null, undefined, null, undefined, NaN, 1, NaN, {}, {}];

// console.log([...new Set(arr)]);
console.log(arr.splice(1, 3))

function qSort(arr = []) {

    function q(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const mid = Math.ceil(arr.length / 2)
        const left = [];
        const right = [];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[mid]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return q(left).concat(q(right));
    }
    return q(arr);
}