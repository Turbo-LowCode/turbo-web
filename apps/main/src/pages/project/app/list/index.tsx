import { ProFormDatePicker, ProFormText, QueryFilter } from '@ant-design/pro-components'
import { Card, Row, Col, Pagination } from 'antd'
import { AppCard } from './AppCard'
import { Header } from './Header'

const appIds = [
  '43ae5e13-3bab-41dd-bcbc-4dc5b616af51',
  '93517298-1515-468b-a00d-e6ad7272cba0',
  '6570dbf6-1093-495c-b0bc-7da8c193a515',
  '8502f130-8a1f-4741-93e1-26301c134a72',
  'edaf7f49-2867-4fec-90c5-063c02a05a26',
  'be5e0283-5176-4495-a627-00f6ed952990',
  'fc84f9b5-cab8-447c-a131-e89d49e9e370',
  '704b273f-7d04-4176-a399-0f32651f9f6b',
  '9ba347e4-c519-416a-98d4-66dd8ab9fcb2',
  '2749eb45-5c04-4f1e-b5b4-4a1810a86b2b',
]

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
              {appIds.map(key => (
                <Col key={key} xxl={6} lg={8} md={8} xs={12}>
                  <AppCard appId={key} />
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
