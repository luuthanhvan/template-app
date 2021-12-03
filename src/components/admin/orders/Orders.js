import Header from '../common/Header';

const Orders = () => {
  return (
    <Header 
      titlePage="Đơn hàng"
      filterTitle="Chọn loại"
      filterData={['Sen', 'anc']}
      btnLabel="Thêm đơn hàng"
    />
  );
};

export default Orders;