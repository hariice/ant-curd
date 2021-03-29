import React, { useState, useEffect } from "react";
import Feed from "../../components/feed"
import { Table, PageHeader, Button, Drawer, Popconfirm, message, Form, Input, Select } from "antd";
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';


import "./table.scss";

const { Option } = Select;

const Names=[
    "Naveen","vijay","Hari","Vimalan","saravanan"

]

const TablePage = () => {
    const [DataSource, setDataSource] = useState([]);
    const [DataSourceOrg, setDataSourceOrg] = useState([]);
    const [visible, setVisible] = useState(false);
    const [Title, setTitle] = useState("Add new Item");
    const [name,setName] = useState([]);


    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const columns = [
        {
            title: 'Name',
            dataIndex: 'API',
            key: 'API',
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
        },
        {
            title: 'Auth',
            dataIndex: 'Auth',
            key: 'Auth',
        },
        {
            title: 'Action',
            render: () => {
                return <>

                    <a href="#" onClick={onEdit}> <FormOutlined /></a>

                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#">  {<DeleteOutlined />}</a>
                    </Popconfirm> </>
            }
        },
    ];

    const filter = (name)=>{
        console.log(name);
        let _data = DataSourceOrg;
        _data= _data.filter((item)=>{
            return item.Category === name;
        });
        setDataSource(_data);
    }


    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then(res => res.json()).then(data => {
                const arr = [];
                data.entries.forEach(item=>{
                    if(!arr.includes(item.Category)){
                        arr.push(item.Category);
                    }
                })
                setName(arr)
                setDataSource(data.entries);
                setDataSourceOrg(data.entries);
            }).catch(err => console.log(err))
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    function confirm() {

        message.success('Click on Yes');
    }
    function cancel() {
        message.error('click on no');
    }

    const onAdd = () => {
        setTitle("Add new Item");
        showDrawer();
    }
    const onEdit = () => {
        setTitle("Edit item");
        showDrawer();
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const { Option } = Select;
    
function handleChange(value) {
    console.log(`selected ${value}`);
  }


    return (
        <>


            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Table"
                subTitle="My ant design"
                extra={[
                    <>
                        <Button type="primary" onClick={onAdd} >+Add New</Button>


                    </>
                ]}

            />


            <Drawer
                title={Title}
                placement="right"
                width={350}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
           {/* <Form
                        {...layout}
                        layout="vertical"
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
        </Button>
                        </Form.Item>
                    </Form> */}
            </Drawer>
            <div className="table-container">
              <div className="filter-container">
              <Form
      {...layout}
      layout="inline"
      
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Category"
        name="Category"
        rules={[{ required: true, message: 'Please select the Category!' }]}
      >
       <Select
       onChange={e=>filter(e)}
       allowClear
       style={{width:200}}>
           {name.map((item)=>(
            <Option value={item} 
            key={item}>{item}</Option>
           ))}
           
           
       </Select>
      </Form.Item>


     

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
      </Form.Item>
    </Form>
              </div>
                <Table dataSource={DataSource} columns={columns} /></div>

            {/* <Feed /> */}
            {/* <table id="customers">
            <thead>
                <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>

                {Data && Data.map((item => (


                    <tr key={item.id}>
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                )))}


            </tbody>



        </table> */}
        </>
    )
}


export default TablePage;