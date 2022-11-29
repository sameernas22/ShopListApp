import {useSelector,useDispatch} from "react-redux";
import {useState} from "react";
import {Table, Popconfirm} from 'antd';
import {deleteData} from "../actions/action"
export const ShopList = () =>{
    var newArea = [], newCategory = [];
    const area =  useSelector((state)=> state.addDataReducer.area)
    const category = useSelector((state)=> state.addDataReducer.category);
    const data = useSelector((state)=> state.addDataReducer.data);
    const dispatch = useDispatch();
    console.log(data,area,category);
    for(let i in area){
        let lst = {}
        lst['text'] =  area[i]
        lst['value'] = area[i]
        newArea.push(lst);
    }
    for(let i in category){
        let lst = {}
        lst['text'] =  category[i]
        lst['value'] = category[i]
        newCategory.push(lst);
    }

    const columns = [
        {
          title: 'Shop Name',
          dataIndex: 'ShopName',
          key: 'ShopName',
        },
        {
          title: 'Area',
          dataIndex: 'Area',
          key: 'area',
          filters:newArea,
          onFilter: (value, record) => record.Area.includes(value),
        },
        {
          title: 'Category',
          dataIndex: 'Category',
          key: 'category',
          filters:newCategory,
          onFilter: (value, record) => record.Category.includes(value),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'status',
            filters: [
                {
                  text: 'Open',
                  value: 'Open',
                },
                {
                  text: 'Close',
                  value: 'Close',
                },
              ],
              onFilter: (value, record) => record.Status.includes(value),
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
              data.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => dispatch(deleteData(record.key))}>
                  <a>Delete</a>
                </Popconfirm>
              ) : null,
          },
      ];
    return(
        <>
        <h1>Shop List </h1>
        <div id="table"><Table columns={columns} dataSource={data}/></div>
        </>
    )
}
