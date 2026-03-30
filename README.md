# E-novel-landing-page

Đây là landing page của ứng dụng E-novel.

## Hướng dẫn chạy môi trường Production

Dự án này được xây dựng bằng React và Vite. Để chạy dự án trên môi trường production, bạn cần thực hiện các bước sau:

### 1. Cài đặt thư viện (nếu chưa cài)
Mở terminal tại thư mục gốc của dự án và chạy lệnh:
```bash
npm install
```

### 2. Build dự án (Tạo bản build production)
Chạy lệnh sau để build mã nguồn. Vite sẽ tự động biên dịch, tối ưu hóa và gom nhóm các file (HTML, CSS, JS, hình ảnh) vào thư mục `dist`:
```bash
npm run build
```

### 3. Chạy thử bản production ở local
Sau khi build xong, bạn có thể chạy thử để kiểm tra xem bản phân phối hoạt động như thế nào trước khi thực sự deploy:
```bash
npm run preview
```
Lệnh này sẽ khởi chạy một máy chủ tĩnh cục bộ phục vụ các file trong thư mục `dist` (thường chạy trên địa chỉ `http://localhost:4173`).

### 4. Deploy lên server thực tế (Production)
Dự án được build (thư mục `dist`) là các file tĩnh (Static files), nên bạn có thể sử dụng bất kỳ static web server nào. Để deploy ứng dụng lên server thực tế, bạn chỉ cần cung cấp nội dung trong thư mục `dist` (được tạo ra ở bước 2) cho dịch vụ hosting của bạn.

Một số nền tảng hỗ trợ deploy static files phổ biến:
- **Ngrok / Nginx / Apache**: Copy thư mục `dist` vào document root của server. 
  *Ví dụ cấu hình Nginx cơ bản (chống lỗi 404 khi load lại trang do dùng Client-side Routing):*
  ```nginx
  server {
      listen 80;
      server_name your-domain.com;
      root /path/to/your/project/dist;
      index index.html;

      location / {
          try_files $uri $uri/ /index.html;
      }
  }
  ```
- **Vercel** / **Netlify**: Deploy trực tiếp từ GitHub/GitLab hoặc dùng CLI, chúng sẽ tự nhận diện Vite project.
- **Firebase Hosting**: Cấu hình thư mục public là `dist` trong `firebase.json` rồi chạy `firebase deploy`.
- **Docker**:
  Tạo `Dockerfile`:
  ```dockerfile
  FROM node:alpine as build
  WORKDIR /app
  COPY package.json package-lock.json ./
  RUN npm install
  COPY . .
  RUN npm run build

  FROM nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  ```