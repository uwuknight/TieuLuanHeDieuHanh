import { exec } from 'child_process';

export default function handler(req, res) {
  // Định nghĩa biến để lưu trữ kết quả
  let storage = "";

  // Thực thi lệnh 'tasklist'
  exec('tasklist', (err, stdout, stderr) => {
    // Kiểm tra nếu có lỗi khi thực thi lệnh
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Đã xảy ra lỗi' });
      return;
    }

    // Tách đầu ra thành các dòng
    var lines = stdout.split("\n");

    // Xử lý từng dòng bắt đầu từ dòng thứ tư (bỏ qua tiêu đề)
    for (let i = 3; i < lines.length; i++) {
      // Trích xuất thông tin liên quan từ mỗi dòng và thêm vào biến lưu trữ
      storage += "\n" + tachChuoi(lines[i]);
    }

    // Gửi dữ liệu đã xử lý dưới dạng phản hồi JSON
    res.status(200).json({ data: storage });
  });

  // Hàm trợ giúp để trích xuất thông tin liên quan từ một chuỗi
  function tachChuoi(chuoi) {
    chuoi.trim();
    var values = chuoi.split(/\s+/);
    let temp = "";

    // Ghép các giá trị cần thiết từ chuỗi
    temp += values[0] + "  " + values[1] + "  " + values[2]
      + "  " + values[3] + "  " + values[4] + values[5];
    return temp;
  }
}
