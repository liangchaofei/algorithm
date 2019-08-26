'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-26 14:34:01
@LastEditTime: 2019-08-26 14:59:04
@LastEditors: Please set LastEditors
'''
from collections import deque


graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def person_is_seller(name):
    return name[-1] == 'm'

def search(name):
    search_queue = deque()
    search_queue += graph[name]

    searched = []

    while len(search_queue) :
        person = search_queue.popleft()
        if person not in searched :
            if  person_is_seller(person):
                print(person)
                return True
            
            search_queue += graph[person]
            searched.append(person)
    
    return False

search('you')