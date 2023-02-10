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

```
  - `yarn clean` dùng để làm sạch code android native trước khi chạy.
```

- **Bước 2 - start example**: để chạy chương trình.

```
  - `yarn example ios` để chạy chương trình trên môi trường IOS.
  - `yarn example android` để chạy chương trình trên môi trường android.
```

- **Bước 3 - start storybook**: để chạy storybook server.

```
  - split new **Terminal**
  - `yarn storybook` để start storybook.
```

## Deployment

### Publish/Update version NPM

- **publishing private packages**: dự án private của team Ichiba react-native develop (7$/month) [publish npm package documents](https://docs.npmjs.com/creating-and-publishing-private-packages)

### Publish Storybook with Chromatics

- **publish storybook từ Thư mục storybook**: sự dụng tool chromatics

```
  ─ **Publish storybook documents**: <https://storybook.js.org/docs/react/sharing/publish-storybook>
  - **Chromatics documents**: <https://www.chromatic.com/docs/setup>
```

Lưu ý: Thực hiện lỗi bước nào thì Google để sửa chữa code. :wrench: :wrench: :wrench:
