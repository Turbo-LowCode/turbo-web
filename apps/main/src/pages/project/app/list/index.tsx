import { ProFormDatePicker, ProFormText, QueryFilter } from '@ant-design/pro-components'
import { Card, Row, Col, Pagination } from 'antd'
import { AppCard } from './AppCard'
import { Header } from './Header'

const List = () => {
  return (
    <div className='w-full h-full grid grid-rows-[auto_auto_1fr] gap-4'>
      {/* 头部 */}
      <Header />
      {/* 查询 */}
      <Card size='small'>
        <QueryFilter searchText='搜索' defaultCollapsed className='p-0'>
          <ProFormText name='name' label='应用名称' />
          <ProFormDatePicker name='createDate' label='创建时间' />
        </QueryFilter>
      </Card>
      {/* 应用列表 */}
      <Card
        bodyStyle={{
          height: 'calc(100% - 56px)',
        }}
        title='应用列表'
      >
        <div className='h-full grid grid-rows-[1fr_50px]'>
          <div>
            <Row className='overflow-auto' gutter={[12, 12]}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 122].map(key => (
                <Col key={key} xxl={6} lg={8} md={8} xs={12}>
                  <AppCard />
                </Col>
              ))}
            </Row>
          </div>
          <div className='flex justify-end items-center'>
            <Pagination total={100} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default List
