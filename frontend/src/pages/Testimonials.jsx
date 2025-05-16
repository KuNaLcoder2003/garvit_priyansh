import React, { useCallback, useState } from 'react'
import TweetCard from '../components/TweetCard'
import { useEffect } from 'react'





const Testimonials = () => {
  const [list1, setList1] = useState([{ id: 1, title: 'one' }, { id: 2, title: 'two' }, { id: 3, title: 'three' }, { id: 4, title: 'four' }])
  const [list2, setList2] = useState([])
  const [selected, setSelected] = useState([])
  useEffect(() => {
    console.log('selected', selected)
    console.log('list_1 : ', list1)
    console.log('list_2 : ', list2)
  }, [selected])

  function transferToList1(arr) {
    if (arr.length == 0 && list1.length == 0) {
      console.log('empty array')
    }
    setList1(prev => prev.concat(arr))
    let modifiedArr = [];
    for (let i = 0; i < list1.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id !== list1[i].id) {
          modifiedArr.push(list1[i])
        }
      }
    }
    setList2(modifiedArr)
    setSelected([])
  }

  const func1 = (arr) => {
    // from 2 to 1
    if (arr.length == 0 && list2.length == 0) {
      console.log('empty array')
    }
    setList1(prev => prev.concat(arr))
    let modifiedArr = [];
    for (let i = 0; i < list2.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id !== list2[i].id) {
          modifiedArr.push(list2[i])
        }
      }
    }
    setList2(modifiedArr)
    setSelected([])
  }

  const func2 = (arr) => {
    // from 1 to 2
    if (list1.length == 0 && arr.length == 0) {
      console.log('empty array')
    }
    setList2(prev => prev.concat(arr))
    

    const filteredArr = list1.filter(item1 => {
      return !arr.some(item2 => item2.id === item1.id);
    });
    console.log('filtered', filteredArr)
    setList1(filteredArr)
    setSelected([])
  }

  function transferToList2(arr) {
    if (list2.length == 0 && arr.length == 0) {
      console.log('empty array')
    }
    setList2(prev => prev.concat(arr))
    let modifiedArr = [];
    for (let i = 0; i < list1.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id !== list1[i].id) {
          modifiedArr.push(list1[i])
        }
      }
    }
    setList1(modifiedArr)
    setSelected([])
  }

  return (
    <div className='flex gap-4 items-center justify-center h-screen w-full'>

      <ListItems list={list1} selected={selected} setSeleced={setSelected} />
      <div className='flex flex-col justify-center items-center gap-4'>
        <button onClick={() => func2(selected)} className='cursor-pointer'>left</button>
        <button className='cursor-pointer' onClick={() => func1(selected)}>right</button>
      </div>
      <ListItems list={list2} setSeleced={setSelected} selected={selected} />

    </div>
  )
}

export default Testimonials




const ListItems = ({ list, setSeleced, selected }) => {
  const handleSelect = (obj) => {
    // check if already exists , if yes then remove it
    const exists = selected.find((item) => item.id == obj.id)
    if (exists) {
      let arr = selected.filter((item) => item.id !== obj.id)
      setSeleced(arr)
    }
    else {
      setSeleced([...selected, obj])
    }
  }
  return (
    <div className='flex flex-col p-4 h-[400px] w-[200px] border border-black'>
      {
        list.length > 0 ? list.map((item, index) => {
          return (
            <p className='cursor-pointer' onClick={() => handleSelect(item)} key={index}>
              {item.title}
            </p>
          )
        }) : (null)
      }
    </div>
  )
}
