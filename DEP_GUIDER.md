## Cài đặt môi trường làm việc

- bạn có thể dễ dàng cài đặt môi trường react-native trước khi bắt đầu dự án theo [hướng dẫn tại đây](https://reactnative.dev/docs/environment-setup)

## Cấu trúc thu mục

```
.
├── README.md
├── DEP_GUIDER.md
├── CONTRIBUTING.md
├── android
├── ios
├── lib
├── example
│   ├── ...
│   ├── src
│   └── storybook
├── babel.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.js
├── src
│   ├── assets
│   ├── ...components
|   └── index.tsx
├── tsconfig.json
├── tsconfig.build.json
├── rn-janbox-design-system-v2.podspec
└── yarn.lock
```

- **Thư mục src**: Thư mục chính để chứa code react native - export các components và modules.
- **Thư mục lib**: Thư mục được render khi chạy `npm pack` và là thư mục được publish lên **Npmjs**.
- **Thư mục example/src**: Thư mục chứa project react-native - depvelop dùng để testing component được export từ **Thư mục src**.
- **Thư mục example/storybook**: Thư mục chứa stories storybook [_(Xem chi tiết)_](https://github.com/storybookjs/react-native) - depvelop dùng để deploy component được phát triển từ **Thư mục src** lên **storybook** để **quản lý, thử nghiệm, chia sẻ**.

## Chạy chương trình

- **Bước 1**: `yarn` để cài đặt các gói cần thiết.

  - `yarn clean` dùng để làm sạch code android native trước khi chạy.

- **Bước 2 - start example và start example storybook**: để View app hoặc View storybook test trên android/ios.
  ![setup](./imgesDoc/settup.png)

**Lưu ý:** chọn export App hoặc Storybook để chọn phương thức Run, Build ứng dụng example

- mở 2 tab **Terminal** và `cd example` để vào thư mục example
- **tab 1** `yarn ios` | `yarn android` để chạy chương trình trên môi trường IOS.
- **tab 2** `yarn storybook` để chạy storybook server (trong trường hợp bạn export App thì không cần chạy)

## Deployment

### Publish/Update version NPM

- **publishing private packages**: dự án private của team Ichiba react-native develop (7$/month) [publish npm package documents](https://docs.npmjs.com/creating-and-publishing-private-packages)

Lưu ý: Thực hiện lỗi bước nào thì Google để sửa chữa code. :wrench: :wrench: :wrench:
