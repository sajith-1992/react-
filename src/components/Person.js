import React from 'react'
import Personchild from './Personchild'

function Person() {
const persons= [
    {name:"helo",age:22, palce:"thrissur"},{name:"loalan",age:21,place:"kolzhy"}
 ]
const personList=  persons.map(person=><Personchild key={person.age} person={person}></Personchild>)


  return (
    <div>{personList}</div>
  ) 
}

export default Person