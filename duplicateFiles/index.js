// Input:
// ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]

// Output:  
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]


function findDuplicate(paths){
    let group = {} //initialize a hash table(object in JS)
    for(let i = 0; i < paths.length; i++){ //interate thru the paths(input)
        let path = paths[i].split(' ') //split each path by space to see easily see info
        for(let j = 1; j < path.length; j){  //iterate each path
            let temp = path[j].split('(') //for each path, I will split by parentheses
            if(group[temp[1]]=== null){
                group[temp[1]] = []
            }
            group[temp[1]].push(path[0]+'/'+temp[0])
        }
    }
    // return [...Object.values(group)].filter((val)=> val.length > 1)
    let result = []
    Object.values(group).map(function(val){
        if(val.length > 1){
            result.push(val)
        }
    })
    return result
}

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]))




// function findDuplicate(paths){
//     let group = {} //initialize a hash table(object in JS)
//     for(let i = 0; i < paths.length; i++){ //interate thru the paths(input)
//         let path = paths[i].split(' ') //split each path by space to see easily see info
//         for(let j = 1; j < path.length; j){  //iterate each path
//             let temp = path[j].split('(') //for each path, I will split by parentheses
//             if(group[temp[1]]=== null){
//                 group[temp[1]] = []
//             }
//             group[temp[1]].push(path[0]+'/'+temp[0])
//         }
//     }
//     let duplicateFilePaths = [];
//     Object.values(group).forEach(key => {
//         if (group[key].length > 1) {
//             duplicateFilePaths.push(group[key]);
//         }
//     });
//     return duplicateFilePaths;

// }