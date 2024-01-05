# Domain Layer

- Tầng này là tầng trung tâm, chứa các entities và mô tả các nghiệp vụ chính của ứng dụng. Đây là phần lõi giúp phân biệt các ứng dụng với nhau.
- Store Domain bao gồm:
  - Data types của mỗi entity.
  - Hàm biến đổi dữ liệu (hàm này chỉ nên phụ thuộc vào domain rules), ví dụ:
    - Tính giá tiền.
    - Kiểm tra 1 sản phầm có nằm trong cart hay không.
  
![Image Description](https://user-images.githubusercontent.com/15076665/143025746-eb520186-d663-4f93-86f1-8886ea7d8ab8.png)

## Entity

- Là lớp miêu tả các thực thể ở trong app.

## Repository

- Là lớp ở giữa data layer và domain layer.
- Là nơi khai báo các hoạt động cụ thể của mô hình.
