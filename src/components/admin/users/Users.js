import Header from '../common/Header';

const Users = () => {
  return (
    <Header 
      titlePage="Khách hàng"
      filterTitle="Chọn trạng thái"
      filterData={['Active', 'Inactive']}
      btnLabel="Thêm người dùng"
    />
  );
};

export default Users;