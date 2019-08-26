/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 20:36:40
 * @LastEditTime: 2019-08-26 14:06:23
 * @LastEditors: Please set LastEditors
 */
const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


function person_is_seller(name){
    return name[name.length-1] === 'm'
}

function search(name){
    let search_queue = [];
    search_queue = search_queue.concat(graph[name])
    const searched = [];

    while(search_queue.length){
        let person = search_queue.shift()

        if(searched.indexOf(person) === -1){
            if(person_is_seller(person)){
                console.log(person + ' is a mango seller')
                return true;
            }
            search_queue = search_queue.concat(graph[person])
            searched.push(person)
        }
    }
    return false;
}

search('you')