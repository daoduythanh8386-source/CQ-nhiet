# QC Nhiệt Luyện – bản cài đặt (Windows / Android / iOS)

App chỉ là "vỏ" mở https://qcnhietluyen.netlify.app nên giao diện & cách dùng giữ nguyên 100%,
bạn cập nhật web trên Netlify thì app tự cập nhật theo.

## Windows (.exe) và Android (.apk) – build tự động, không cần cài gì
1. Tạo tài khoản github.com → New repository (private) → upload toàn bộ thư mục này.
2. Vào tab **Actions** → **Build apps** → **Run workflow** (đợi ~5–8 phút).
3. Mở lần chạy xong → mục **Artifacts** → tải:
   - `QC-NhietLuyen-Windows-exe` → file Setup .exe (cài) + bản portable
   - `QC-NhietLuyen-Android-apk` → file .apk (cài tay, cho phép "cài từ nguồn không xác định")

## iOS
Apple không cho cài file tự do. Cách nhanh nhất, miễn phí: mở Safari → vào web → nút Chia sẻ → **Thêm vào MH chính**.
Muốn file app thật (TestFlight/App Store) cần máy Mac + Apple Developer ($99/năm): `npm i && npx cap add ios && npx cap open ios`.

## Lưu ý
- Dữ liệu (file CQ, tài khoản, lịch sử) lưu theo từng trình duyệt/app → app mới là kho riêng. Dùng "Sao lưu / Khôi phục tài khoản" trên web để chuyển sang.
- Đăng nhập Google Drive: thêm origin của app vào OAuth Client ID nếu bị chặn.
- Android: tải PDF/ZIP trong WebView có thể không hiện; nếu gặp, dùng Chrome → "Cài đặt ứng dụng" (PWA).
