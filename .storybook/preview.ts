import type { Preview } from "@storybook/react";
import '../src/index.css'; // Tailwind CSS가 정의된 전역 CSS 파일 경로

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
