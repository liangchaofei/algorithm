/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 14:13:32
 * @LastEditTime: 2019-08-26 14:23:51
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



const  person_is_seller = name => name[name.length-1] === 'm'

const search = name => {
    let search_queue = [];
    search_queue = search_queue.concat(graph[name])

    let searched = [];

    while(search_queue.length){
        let person = search_queue.shift()

        if(searched.indexOf(person) === -1){
            if(person_is_seller(person)){
                console.log(person)
                return true;
            }
            search_queue = search_queue.concat(graph[person])
            searched.push(person)
        }
    }
    return false;
}

search('you')