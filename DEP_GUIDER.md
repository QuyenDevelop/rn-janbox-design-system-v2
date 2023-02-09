## Cài đặt môi trường làm việc

## Cấu trúc thu mục

```
.
├── README.md
├── DEP_GUIDER.md
├── __tests__
│   └── App-test.tsx
├── android
├── ios
├── lib
├── example
├── storybook
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
├── yarn-error.log
├── rn-janbox-design-system-v2.podspec
└── yarn.lock
```

- **Thư mục src**: Thư mục chính để chứa code react native - export các components và modules.
- **Thư mục example**: Thư mục chứa project react-native - depvelop dùng để testing component được export từ **Thư mục src**.
- **Thư mục storybook**: Thư mục chứa project react-native-cli storybook [_(Xem chi tiết)_](https://github.com/storybookjs/react-native) - depvelop dùng để deploy component được phát triển từ **Thư mục src** lên **storybook** để **quản lý, thử nghiệm, chia sẻ**.

## Chạy chương trình

- **Bước 1**: `yarn` để cài đặt các gói cần thiết.
- **Bước 2**: `yarn clean` dùng để làm sạch code android native trước khi chạy.
- **Bước 3**: `npm run android` để chạy chương trình.

### IOS

### Android

## Deployment

### Publish/Update version NPM

### Publish Storybook with Chromatics

Lưu ý: Thực hiện lỗi bước nào thì Google để sửa chữa code. :wrench: :wrench: :wrench:
