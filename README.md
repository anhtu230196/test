

### Ở trang đăng nhập, đăng nhập bằng tài khoản sau:

    email: admin@gmail.com
    password: 123456

### Công nghệ:

- firebase: để lưu data và chức năng đăng nhập.
- ReactJs, Redux, Redux-thunk để render giao diện bên client.
- Framework UI : Semantic UI React.
- Momentjs.

### Pagination:
- Tìm vị trí lastOfIndex: currentPage * postPerPage
- Tìm vị trí firstOfIndex: lastOfIndex - postPerPage
- Số posts của currentPage: listPost.slice(firstOfIndex, lastOfIndex)
