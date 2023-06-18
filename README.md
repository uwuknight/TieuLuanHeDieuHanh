# Tiểu luận môn Hệ Điều Hành thực hiện bởi Lê Trần Anh Khôi (có kèm báo cáo tiểu luận)
Đây là mô tả chung ứng dụng web được xây dựng bằng Next.js và React. Nó hiển thị một bảng dữ liệu được tìm nạp từ một điểm cuối API và cho phép bảng được hiển thị hoặc ẩn dựa trên một lần nhấp vào nút.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [CSS Styles](#css-styles)
- [Contributing](#contributing)
- [License](#license)

## Features

- Tìm nạp dữ liệu từ điểm cuối API và hiển thị dữ liệu đó trong bảng
- Hỗ trợ hiển thị hoặc ẩn bảng dựa trên một nút bấm
- Áp dụng các kiểu CSS để định dạng và tương tác bảng

## Installation

1. Cài đặt [Node.js](https://nodejs.org) (đã bao gồm npm) trên máy của bạn.

2. Clone repository xuống or tải mã nguồn.

3. Mở một terminal hoặc command prompt trong thư mục dự án.

4. Cài đặt các phụ thuộc dự án bằng cách chạy lệnh sau(chỉ cần thực hiện một lần duy nhất sau khi clone dự án xuống):
   npm install

5. Chạy dự án(nhập lệnh mỗi khi muốn sử dụng offline, không cần nhập sau khi thay đổi code trong dự án chỉ cần ấn tổ hợp phím Ctrl+S web sẽ tự reload):
   npm run dev

## Usage

1. Ứng dụng sẽ có thể truy cập được tại `http://localhost:3000`.

2. Nhấp vào nút "Click to load data" để hiển thị bảng.

## CSS Styles

Bảng được tạo kiểu bằng cách sử dụng các quy tắc CSS được xác định trong [Home.module.css](./styles/Home.module.css) file. Các phong cách bao gồm:
- Table container styles
- Header and cell styles
- Background color and hover effects

## Contributing
Các đóng góp luôn được chào đón! Nếu bạn tìm thấy bất kỳ vấn đề nào hoặc muốn nâng cao chức năng của trang web, vui lòng mở một issue hoặc gửi pull request.

## License
Dự án này được cấp phép theo [MIT License](LICENSE).
