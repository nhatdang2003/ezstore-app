# Cài đặt môi trường
Để chạy tạo môi trường phát triển ứng dụng React Native hãy thực hiện các bước sau:
- Cài đặt VSCode để thực hiện code.
- Cài đặt Node.js, JDK 17.
- Cài đặt Android Studio để tạo và cấu hình máy ảo Android làm môi trường phát triển ứng dụng.

# Các bước để hoàn thành bài tập:

**Bước 1: Khởi tạo dự án**

* Tạo một dự án mới bằng cách chạy lệnh `npx create-expo-app`.
* Sau đó, cấu trúc lại source code bằng cách cho tất cả code vào thư mục src (ví dụ assets, components, types).

**Bước 2: Ý tưởng**

* Cần có 2 màn hình là màn hình giới thiệu và màn hình trang chủ.
* Cần công cụ để có thể chuyển hướng qua lại giữa 2 màn hình.
* Cần viết một logic để dừng 10 giây và chuyển hướng sang màn hình khác.

**Bước 3: Thiết kế giao diện**

* Tạo các component giao diện người dùng bằng cách sử dụng React Native và Expo.
* Sử dụng thư viện `@expo/vector-icons` để thêm biểu tượng.

![alt text](image.png)

![alt text](image-1.png)

**Bước 4: Thực hiện yêu cầu bài tập**

* Tạo các file code cho từng màn hình giới thiệu và màn hình trang chủ
* Cài đặt routing bằng cách sử dụng `expo-router` và tạo các route cho từng màn hình.
* Sử dụng hook `useEffect` để khi component vừa được khởi tạo sẽ chạy `setTimeout`, sau 10 giây sẽ
gọi hàm Callback.
* Hàm Callback trong `setTimeout` sử dụng `router` của thư viện `expo-router` để điều hướng giữa các màn hình.
