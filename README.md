# 👾 React Native Template TypeScript - Custom

## Cài đặt môi trường làm việc

### Windows

1. **Android**

- **Bước 1**: Cài đặt Chocolatey từ <https://chocolatey.org> (Chocolatey là trình quản lý các gói thư viện của Windows)
- **Bước 2**: Cài đặt Nodejs Java và Python 2 thông qua Chocolatey sử dụng dòng lệnh sau (dùng cmd để chạy lệnh này):
  `choco install -y nodejs.install python2 jdk8`
- **Bước 3**: Cài đặt Android studio.
- **Bước 4**: Cấu hình biến môi trường. [xem chi tiết tại Documents](https://reactnative.dev/docs/environment-setup?os=windows&platform=android)

Lưu ý: Trên hệ điều hành windows chỉ có thể build ứng dụng trên Android.

### MAC OS

1. **Android**

- tương tự như windows. [xem chi tiết tại Documents](https://reactnative.dev/docs/environment-setup?os=macos&platform=android)

2. **IOS**

- **Bước 1**: Cài đặt Brew: Brew là trình quản lý các gói thứ viện, MACOS không tích hợp sẵn và bạn phải sử dụng
  terminal để cài đặt brew bằng cách chạy dòng lệnh sau.
  `{{/usr/bin/ruby -e "$(curl –fsSL https://raw.githubusercontent.com/ Homebrew/install/master/install)"}}`
- **Bước 2**: Cài đặt Nodejs:
  `brew install node`
- **Bước 3**: Cài đặt Watchman:
  `brew install watchman`
- **Bước 4**: Cài đặt react-native:
  `npm install -g react-native-cli`
- **Bước 5**: Cài đặt Xcode: truy cập App Store trên MACOS để cài đặt Xcode.

## ⭐ Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies
- using custom components library
- using custom hooks
- using redux, redux-saga, redux-toolkit
- using translate language
- using react-navigation
- using react-native-vector-icons
- base implementation Login Screen
- ...

### ▶️ Usage

```
npx react-native init <project_name> --template react-native-template-quyenph
```

#### Usage with older versions of React Native

```sh
npx react-native init MyApp --template react-native-template-quyenph@1.0.0
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| Dev          | 1.1.\*   |
| 0.71         | 1.2.\*   |

## 🔖 License

- This project is [MIT](LICENSE) licensed
