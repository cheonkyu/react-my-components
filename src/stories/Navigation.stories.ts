import type { Meta, StoryObj } from '@storybook/react';
import '../App.css';
import Navigation from '../components/Navigation';

// 기본 메타데이터 설정
const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hoverColor: { control: 'text' },
    focusColor: { control: 'text' },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 메뉴 항목
const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// Primary Story (기본 설정)
export const Primary: Story = {
  args: {
    menuItems,
    hoverColor: 'text-blue-500',
    focusColor: 'text-blue-700',
  },
};

// Secondary Story (커스텀 색상)
export const CustomColors: Story = {
  args: {
    menuItems,
    hoverColor: 'text-red-500',
    focusColor: 'text-green-700',
  },
};

// Large Menu Story (큰 메뉴)
export const LargeMenu: Story = {
  args: {
    menuItems: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Blog', href: '#blog' },
    ],
    hoverColor: 'text-purple-500',
    focusColor: 'text-orange-700',
  },
};
